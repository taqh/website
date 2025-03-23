import { cn } from '@/lib/utils';
import type React from 'react';

type ProseProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'article';
  html: string;
};

function Prose({ children, html, className }: ProseProps) {
  return (
    <article
      className={cn(
        'prose prose-h1:font-bold max-w-none prose-h1:text-xl prose-a:text-blue-600 prose-p:text-justify dark:prose-invert prose-headings:font-normal mx-auto',
        className
      )}
    >
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </article>
  );
}

export default Prose;
