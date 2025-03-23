'use client';

import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { ScrollArea } from './ui/scroll-area';

function TableOfContents({ toc }: { toc: string }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileToc toc={toc} />;
  }

  return (
    <div className='sticky top-24'>
      <h2 className='text-lg font-medium mb-3'>Table of Contents</h2>

      <ScrollArea
        className='flex max-h-64 flex-col overflow-y-auto'
        type='always'
      >
        <div
          dangerouslySetInnerHTML={{ __html: toc }}
          className='prose prose-sm prose-a:no-underline'
        />
      </ScrollArea>
    </div>
  );
}

export default TableOfContents;

const MobileToc = ({ toc }: { toc: string }) => {
  return (
    <div className='bg-muted/20 rounded-md'>
      <details className='group col-start-2 block rounded-xl border p-4 lg:hidden'>
        <summary className='flex cursor-pointer items-center justify-between text-xl font-semibold group-open:pb-4'>
          Table of Contents
          <ChevronDown className='size-5 transition-transform group-open:rotate-180' />
        </summary>
        <ScrollArea
          className='flex max-h-64 flex-col overflow-y-auto'
          type='always'
        >
          <div dangerouslySetInnerHTML={{ __html: toc }} className='prose prose-sm prose-a:no-underline' />
        </ScrollArea>
      </details>
    </div>
  );
};
