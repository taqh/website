'use client';

import { cn } from '@/lib/utils';
import { Button as ShadcnButton } from '@/components/ui/button';
import Image from 'next/image';
import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MoveLeft, MoveRight } from 'lucide-react';
import Link from 'next/link';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import type React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface PageWrapperProps {
  children: React.ReactNode;
  goBack?: boolean;
  hasPrivacy?: boolean;
}

const PageWrapperContext = createContext(false);

export function PageWrapper({
  children,
  goBack = false,
  hasPrivacy = false,
}: PageWrapperProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <PageWrapperContext.Provider value={true}>
      <div className='w-full max-w-7xl flex flex-col gap-4'>
        <div
          className={cn(
            'flex gap-4 relative',
            goBack ? 'justify-between' : 'justify-end'
          )}
        >
          {goBack && (
            <Button
              className='flex w-fit bg-background gap-2 items-center rounded-md px-4 py-2 font-normal max-w-[200px] group'
              variant='ghost'
              onClick={router.back}
            >
              <MoveLeft className='hidden sm:block absolute top-1/2 -translate-y-1/2 left-4 -translate-x-full w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-left-0.5 sm:group-hover:-left-2 transition-all -z-10' />
              <span className='text-lg'>Go back</span>
            </Button>
          )}
          {hasPrivacy && !pathname.toString().match(/\/privacy/) && (
            <Link href={`${pathname}/privacy`}>
              <Button
                className='flex w-fit bg-background gap-2 items-center rounded-md px-4 py-2 font-normal max-w-[200px] group'
                variant='ghost'
              >
                <span className='text-lg'>Privacy</span>
                <MoveRight className='hidden sm:block absolute top-1/2 -translate-y-1/2 right-4 translate-x-full w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:-right-0.5 sm:group-hover:-right-2 transition-all -z-10' />
              </Button>
            </Link>
          )}
        </div>
        {children}
      </div>
    </PageWrapperContext.Provider>
  );
}

interface Container extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

export function Container({
  children,
  className,
  orientation = 'vertical',
  ...props
}: Container) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error('Container must be used within a PageWrapper');
  }

  return (
    <div
      className={cn(
        'flex gap-4',
        orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function Heading({ children, ...props }: HeadingProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error('Heading must be used within a PageWrapper');
  }

  return <h1 {...props}>{children}</h1>;
}

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium';
  separator?: boolean;
}

export function Title({
  children,
  size,
  separator = false,
  ...props
}: TitleProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error('Title must be used within a PageWrapper');
  }

  switch (size) {
    case 'small':
      return separator ? (
        <div className='flex flex-col'>
          <h4 {...props}> {children}</h4>
          <hr className='mb-4 mt-2' />
        </div>
      ) : (
        <h4 {...props}>{children}</h4>
      );
    default:
      return separator ? (
        <div className='flex flex-col'>
          <h3 {...props}> {children}</h3>
          <hr className='mb-4 mt-2' />
        </div>
      ) : (
        <h3 {...props}>{children}</h3>
      );
  }
}

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Text({ children, className, ...props }: TextProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error('Text must be used within a PageWrapper');
  }

  return (
    <span className={cn(className)} {...props}>
      {children}
    </span>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'link'
    | null
    | undefined;
}

export function Button({
  children,
  className,
  variant = 'default',
  ...props
}: ButtonProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error('Button must be used within a PageWrapper');
  }

  return (
    <ShadcnButton
      className={cn('w-fit py-3 px-5 rounded-md', className)}
      variant={variant}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
}

interface ImageWrapperProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large' | 'auto' | 'full';
  zoom?: boolean;
}

export function ImageWrapper({
  src,
  alt,
  size = 'medium',
  zoom = false,
}: ImageWrapperProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error('ImageWrapper must be used within a PageWrapper');
  }

  function getSizeClass(size: string) {
    switch (size) {
      case 'large':
        return 'w-full sm:max-w-xl';
      case 'small':
        return 'w-full sm:max-w-sm';
      case 'medium':
        return 'w-full sm:max-w-md';
      case 'auto':
        return 'w-auto';
      case 'full':
        return 'w-full';
      default:
        return 'w-full sm:max-w-md';
    }
  }

  if (zoom)
    return (
      <Zoom>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className={cn('rounded-xl aspect-auto', getSizeClass(size))}
        />
      </Zoom>
    );

  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      className={cn('rounded-xl aspect-auto', getSizeClass(size))}
    />
  );
}

const ListContext = createContext(false);

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  position?: 'inside' | 'outside';
  listStyle?: 'disc' | 'decimal' | 'none';
}

export function List({
  children,
  position = 'inside',
  listStyle = 'disc',
  className,
  ...props
}: ListProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error('List must be used within a PageWrapper');
  }

  return (
    <ListContext.Provider value={true}>
      <ul
        className={cn(`list-${listStyle} list-${position}`, className)}
        {...props}
      >
        {children}
      </ul>
    </ListContext.Provider>
  );
}

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export function ListItem({ children, ...props }: ListItemProps) {
  const isWithinList = useContext(ListContext);

  if (!isWithinList) {
    throw new Error('ListItem must be used within a List');
  }

  return (
    <li {...props}>
      <Text>{children}</Text>
    </li>
  );
}

const GridContext = createContext(false);

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Grid({ children, className, ...props }: GridProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error('List must be used within a PageWrapper');
  }

  return (
    <GridContext.Provider value={true}>
      <div
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GridItem({ children, className, ...props }: GridItemProps) {
  const isWithinGrid = useContext(GridContext);

  if (!isWithinGrid) {
    throw new Error('GridItem must be used within a Grid');
  }

  return (
    <div className={cn('max-w-full', className)} {...props}>
      {children}
    </div>
  );
}

interface SystemRequirementsWrapperProps {
  requirements: SystemRequirements;
}

export interface SystemRequirements {
  minimum: {
    info?: string;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    additional?: string;
  };
  recommended?: {
    info?: string;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    additional?: string;
  };
}

export function SystemRequirementsWrapper({
  requirements,
}: SystemRequirementsWrapperProps) {
  const isWithinPageWrapper = useContext(PageWrapperContext);

  if (!isWithinPageWrapper) {
    throw new Error('List must be used within a PageWrapper');
  }

  const rm = requirements.minimum;
  const rr = requirements.recommended;
  return (
    <div className='flex flex-col'>
      <Title separator>System Requirements</Title>
      <div className='flex flex-col gap-4 sm:flex-row sm:gap-12'>
        {rm && (
          <div className='flex flex-col max-w-md gap-1.5'>
            <Text className='text-xl'>Minimum:</Text>
            {rm.info && (
              <ItemWrapper>
                <Text>{rm.info}</Text>
              </ItemWrapper>
            )}
            <ItemWrapper>
              <SubText>OS:</SubText> <Text>{rm.os}</Text>
            </ItemWrapper>
            <ItemWrapper>
              <SubText>Processor:</SubText> <Text>{rm.processor}</Text>
            </ItemWrapper>
            <ItemWrapper>
              <SubText>Memory:</SubText> <Text>{rm.memory}</Text>
            </ItemWrapper>
            <ItemWrapper>
              <SubText>Graphics:</SubText> <Text>{rm.graphics}</Text>
            </ItemWrapper>
            <ItemWrapper>
              <SubText>Storage:</SubText> <Text>{rm.storage}</Text>
            </ItemWrapper>
            {rm.additional && (
              <ItemWrapper>
                <SubText>Additional Notes:</SubText>{' '}
                <Text>{rm.additional}</Text>
              </ItemWrapper>
            )}
          </div>
        )}
        {rr && (
          <div className='flex flex-col max-w-md gap-1.5'>
            <Text className='text-xl'>Recommended:</Text>
            {rr.info && (
              <ItemWrapper>
                <Text>{rr.info}</Text>
              </ItemWrapper>
            )}
            <ItemWrapper>
              <SubText>OS:</SubText> <Text>{rr.os}</Text>
            </ItemWrapper>
            <ItemWrapper>
              <SubText>Processor:</SubText> <Text>{rr.processor}</Text>
            </ItemWrapper>
            <ItemWrapper>
              <SubText>Memory:</SubText> <Text>{rr.memory}</Text>
            </ItemWrapper>
            <ItemWrapper>
              <SubText>Graphics:</SubText> <Text>{rr.graphics}</Text>
            </ItemWrapper>
            <ItemWrapper>
              <SubText>Storage:</SubText> <Text>{rr.storage}</Text>
            </ItemWrapper>
            {rr.additional && (
              <ItemWrapper>
                <SubText>Additional Notes:</SubText>{' '}
                <Text>{rr.additional}</Text>
              </ItemWrapper>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const SubText = ({ children }: { children: React.ReactNode }) => (
  <Text className='text-foreground/50'>{children}</Text>
);

const ItemWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className='leading-tight'>{children}</span>
);

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
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
              height={1080}
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
                index === current - 1
                  ? 'bg-primary'
                  : 'border md:border-2 border-white/25'
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

interface AccordionWrapperProps {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export function AccordionWrapper({ title, questions }: AccordionWrapperProps) {
  return (
    <div className='flex flex-col'>
      <Title>{title}</Title>
      <Accordion type='single' collapsible>
        {questions.map((q, index) => (
          <AccordionItem key={`${q.question}-${index}`} value={`item-${index}`}>
            <AccordionTrigger className='text-xl'>
              <Title size='small'>{q.question}</Title>
            </AccordionTrigger>
            <AccordionContent className='text-lg'>
              <Text>{q.answer}</Text>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

interface SteamWishlistButtonProps {
  url: string;
}

export function SteamWishlistButton({ url }: SteamWishlistButtonProps) {
  return (
    // <Link
    //   href={url}
    //   target="_blank"
    //   rel="noreferrer"
    //   className="flex gap-2 w-fit items-center bg-black text-white dark:bg-white dark:text-black p-2 rounded-xl"
    // >
    //   <SteamLogo className="size-12 text-white dark:text-black" />
    //   <div className="flex flex-col">
    //     <span className="text-lg font-bold">Wishlist on</span>
    //     <span className="text-2xl font-black uppercase">Steam™</span>
    //   </div>
    // </Link>
    <Link href={url} target='_blank' rel='noreferrer'>
      <Image
        src='/steambutton.png'
        alt='Wishlist on Steam'
        width={1920}
        height={1080}
        className='w-52 invert dark:invert-0'
      />
    </Link>
  );
}
