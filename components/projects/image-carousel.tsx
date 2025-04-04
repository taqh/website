'use client';

import { useEffect, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleIndex = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <Carousel className='rounded-lg overflow-hidden' setApi={setApi}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={`${image.alt}-${index}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={7000}
              className='rounded-lg'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex gap-4 justify-between py-2'>
        <div className='flex gap-2'>
          <CarouselPrevious className='static translate-y-0 size-8 md:size-12 [&_svg]:size-4 md:[&_svg]:size-5' />
          <CarouselNext className='static translate-y-0 size-8 md:size-12 [&_svg]:size-4 md:[&_svg]:size-5' />
        </div>
        <div className='flex items-center gap-2'>
          {images.map((image, index) => (
            <span
              key={image.src}
              className={cn(
                'size-3 md:size-4 rounded-full cursor-pointer',
                index === current - 1 ? 'bg-primary' : 'border md:border-2'
              )}
              onClick={() => handleIndex(index)}
              onKeyUp={(e) => e.key === 'Enter' && handleIndex(index)}
              tabIndex={0}
              role='button'
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
