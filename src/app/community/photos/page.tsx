import type { Metadata } from 'next';
import PageIntro from '@/components/content/PageIntro';
import ImageGallery from '@/components/media/ImageGallery';
import PageBanner from '@/components/media/PageBanner';
import { brandAssets } from '@/config/brandAssets';

export const metadata: Metadata = {
  title: 'Photos',
};

export default function PhotosPage() {
  return (
    <>
      <PageBanner src={brandAssets.hero.banner} alt="FSO community and broadcasts" />
      <PageIntro
        title="Community Photos"
        lead="Brand marks, league moments, and legacy FSO imagery from our asset library."
      >
        <div className="space-y-12 not-prose max-w-5xl">
          <ImageGallery title="Current brand" images={brandAssets.gallery.logos} columns={4} />
          <ImageGallery title="Community & VR" images={brandAssets.gallery.general} />
          <ImageGallery title="Legacy FSO" images={brandAssets.gallery.legacy} />
        </div>
      </PageIntro>
    </>
  );
}
