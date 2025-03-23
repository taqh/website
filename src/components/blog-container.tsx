import { cn } from "@/lib/utils";

type BlogContainerProps = React.HTMLAttributes<HTMLDivElement>;

function BlogContainer({ children, className }: BlogContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full min-h-[calc(100vh-112px)] h-full max-w-5xl px-6 md:px-14 lg:px-20 z-10',
        className
      )}
    >
      {children}
    </div>
  );
}

export default BlogContainer;
