import { ImageWrapper } from '@/components/projects/elements';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
}

function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {images.map((image, index) => (
        <ImageWrapper
          key={image.src}
          src={image.src}
          alt={image.alt}
          size='auto'
          zoom
        />
      ))}
    </div>
  );
}

export default ImageGrid;
