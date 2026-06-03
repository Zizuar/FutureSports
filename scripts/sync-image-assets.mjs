import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const source = path.join(root, 'ImageAssetts');
const dest = path.join(root, 'public', 'image-assets');

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif']);

/** @type {Record<string, string[]>} */
const manifest = {};

function walkManifest(relDir, absDir) {
  if (!fs.existsSync(absDir)) return;
  const files = [];
  for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
    const relPath = relDir ? `${relDir}/${entry.name}` : entry.name;
    const absPath = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      walkManifest(relPath, absPath);
    } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
      files.push(`/image-assets/${relPath.replace(/\\/g, '/')}`);
    }
  }
  if (files.length) manifest[relDir || '.'] = files.sort();
}

function copyRecursive(src, dst, relBase = '') {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);
    const relPath = relBase ? `${relBase}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      copyRecursive(srcPath, dstPath, relPath);
    } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

if (!fs.existsSync(source)) {
  console.warn('[sync:assets] ImageAssetts/ missing — skipping copy.');
  fs.mkdirSync(dest, { recursive: true });
  fs.writeFileSync(path.join(dest, 'manifest.json'), JSON.stringify({ categories: {}, logo: null }, null, 2));
  process.exit(0);
}

fs.rmSync(dest, { recursive: true, force: true });
copyRecursive(source, dest);
walkManifest('', dest);

const primaryLogo = '/image-assets/CurrentLogos/Asset 2.png';
const sealLogo = '/image-assets/CurrentLogos/FSOlogoReDo-Ver2.png';
const all = Object.values(manifest).flat();
const logo = all.includes(primaryLogo)
  ? primaryLogo
  : manifest['CurrentLogos']?.find((p) => /Asset 2/i.test(p)) ?? null;
const seal = all.includes(sealLogo) ? sealLogo : null;

const out = { categories: manifest, logo, seal };
fs.writeFileSync(path.join(dest, 'manifest.json'), JSON.stringify(out, null, 2));
console.log(`[sync:assets] Copied assets; manifest: ${Object.values(manifest).flat().length} images`);
