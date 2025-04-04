import { cn } from "@/lib/utils";

type ProjectContainerProps = React.HTMLAttributes<HTMLDivElement>;

function ProjectContainer({ children, className }: ProjectContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full min-h-[calc(100vh-112px)] h-full max-w-6xl px-6 md:px-14 z-10',
        className
      )}
    >
      {children}
    </div>
  );
}

export default ProjectContainer;
