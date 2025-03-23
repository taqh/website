'use server';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ProjectArrow } from '@/icons';
import { projects } from '@/data/projects';
import type { Project } from '@/types/projects';

export async function ProjectList() {
  const projectPath = (project: any) => {
    return `/projects/${project.folder}`;
  };

  if (projects.length === 0) {
    return (
      <p className='text-lg text-foreground/70'>
        There are no projects projects yet.
      </p>
    );
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <div className='w-full relative flex flex-col items-center lg:items-start overflow-hidden gap-[2px]'>
      {projects
        .sort(
          (olderProject: Project, newerProject: Project) =>
            newerProject.date.getTime() - olderProject.date.getTime()
        )
        .map((project, index) => (
          <div
            key={project.title}
            className='flex flex-col sm:flex-row gap-2 justify-between w-full max-w-2xl lg:max-w-full'
          >
            <div className='hidden sm:flex flex-col lg:items-center justify-center w-fit relative min-w-[200px] lg:min-w-[250px] pb-6'>
              <div
                className={cn(
                  'absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 w-8 h-32 bg-gradient-to-b from-background z-20',
                  index === 0 ? 'block' : 'hidden'
                )}
              />
              <div
                className={cn(
                  'absolute left-0 lg:left-1/2 lg:-translate-x-1/2 bottom-0 w-8 h-32 bg-gradient-to-t from-background z-20',
                  index === projects.length - 1 ? 'block' : 'hidden'
                )}
              />
              <div className='absolute left-[9px] lg:left-1/2 lg:-translate-x-1/2 top-0 h-full border border-foreground/25 border-dashed' />
              <div className='w-5 h-5 rounded-full bg-primary z-30 relative'>
                <span
                  className={cn(
                    'hidden lg:block absolute whitespace-nowrap',
                    index % 2 === 0 ? 'left-8' : 'right-8'
                  )}
                >
                  {project.date.toLocaleDateString('en-US', dateOptions)}
                </span>
                <span
                  className={cn(
                    'block lg:hidden absolute whitespace-nowrap -bottom-[2px] left-8'
                  )}
                >
                  {project.date.toLocaleDateString('en-US', dateOptions)}
                </span>
                <ProjectArrow
                  className={cn(
                    'hidden lg:block w-28 h-28 absolute text-foreground/50',
                    index % 2 === 0
                      ? '-bottom-6 right-6 rotate-90'
                      : '-top-16 left-6 -rotate-90 scale-x-[-1]'
                  )}
                />
              </div>
            </div>
            <div
              className={cn(
                'hidden relative lg:flex flex-wrap items-center justify-between rounded-lg sm:flex-row sm:gap-6 gap-4 overflow-hidden group w-full max-w-[425px] h-[200px]',
                index % 2 === 0 ? 'order-last' : 'order-first'
              )}
            />
            <span className='sm:hidden text-lg order-first text-center'>
              {project.date.toLocaleDateString('en-US', dateOptions)}
            </span>
            <Link
              href={project.path}
              className={cn(
                'relative flex flex-wrap items-center justify-between rounded-lg bg-accent text-foreground/70 transition-all duration-300 hover:bg-foreground/10 sm:gap-6 overflow-hidden group w-full max-w-[375px] lg:max-w-[425px] min-h-[200px] mb-6 order-first mx-auto sm:mx-0',
                index % 2 === 0 ? 'order-first' : 'lg:order-last'
              )}
            >
              <div
                className={cn(
                  'flex flex-col items-start gap-2 w-full max-w-[300px] py-4 px-6 z-20 mb-auto'
                )}
              >
                <div className='flex w-full flex-wrap items-center gap-2'>
                  {project.tags.length <= 3
                    ? project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className='flex items-center rounded bg-foreground/5 px-2 py-1 text-xs text-foreground/70 hover:bg-foreground/10 transition'
                        >
                          {tag}
                        </span>
                      ))
                    : project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className='flex items-center rounded bg-foreground/5 px-2 py-1 text-xs text-foreground/70 hover:bg-foreground/10 transition'
                        >
                          {tag}
                        </span>
                      ))}
                  {project.tags.length > 3 && (
                    <span className='flex items-center rounded bg-foreground/5 px-2 py-1 text-xs text-foreground/70 hover:bg-foreground/10 transition'>
                      +{project.tags.length - 2} more
                    </span>
                  )}
                </div>
                <span className='text-xl text-foreground line-clamp-2'>
                  {project.title}
                </span>
                <span className='text-sm max-w-[225px] line-clamp-5'>
                  {project.description}
                </span>
              </div>
              {project.thumbnail?.large && (
                <>
                  <Image
                    src={project.thumbnail.large}
                    alt={project.thumbnail.alt || project.title}
                    className='hidden sm:block absolute right-0 top-0 w-auto h-[200px] object-cover group-hover:opacity-80 group-hover:brightness-75 transition-all duration-300'
                    width={1920}
                    height={1080}
                  />
                  <div className='hidden sm:flex absolute items-center p-8 w-full h-full from-accent from-60% bg-gradient-to-r justify-end'>
                    <ArrowRight className='w-10 h-10 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300' />
                  </div>
                </>
              )}
              <div className='block sm:hidden p-4 pt-0'>
                <Image
                  src={project.thumbnail.large}
                  alt={project.thumbnail.alt || project.title}
                  className='w-full aspect-video rounded-md object-cover transition-all duration-300'
                  width={1920}
                  height={1080}
                />
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
