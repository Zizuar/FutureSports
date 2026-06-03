import fs from 'node:fs';
import path from 'node:path';

export interface AssetManifest {
  categories: Record<string, string[]>;
  logo: string | null;
}

const MANIFEST_PATH = path.join(process.cwd(), 'public', 'image-assets', 'manifest.json');

export function getAssetManifest(): AssetManifest {
  try {
    const raw = fs.readFileSync(MANIFEST_PATH, 'utf8');
    return JSON.parse(raw) as AssetManifest;
  } catch {
    return { categories: {}, logo: null };
  }
}
