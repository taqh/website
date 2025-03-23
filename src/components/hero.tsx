"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Barlow } from "next/font/google";
import { AbstractSVG } from "./abstract-svg";
import Link from "next/link";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function Hero() {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className="relative mt-52 flex min-h-[60vh] w-full flex-1 justify-center overflow-x-hidden px-6 md:min-h-[80vh]"
    >
      <div className="z-10 flex w-auto flex-col gap-12 md:mt-16">
        <div
          className={cn("flex flex-col items-center gap-8", barlow.className)}
        >
          <div className="text-center text-5xl font-semibold leading-[1.15] md:text-6xl">
            <span>The </span>
            <span className="text-primary">Digital </span>
            <span>
              Product Agency <br /> you can{" "}
            </span>
            <span className="text-primary">trust</span>
          </div>
          <div className="hidden w-fit flex-wrap items-center gap-2 whitespace-nowrap rounded-lg border bg-background/25 px-8 py-4 text-lg backdrop-blur-xl md:flex">
            <span className="text-foreground/50">For</span>
            <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
              Community Managers
            </span>
            <span className="text-foreground/50">,</span>
            <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
              Creators
            </span>
            <span className="text-foreground/50">,</span>
            <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
              Game Developers
            </span>
            <span className="text-foreground/50">and</span>
            <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
              Entrepreneurs
            </span>
          </div>
          <div className="flex w-fit flex-col items-center gap-2 whitespace-nowrap rounded-lg border bg-background/25 px-4 py-4 text-base backdrop-blur-xl md:hidden">
            <div className="xs:gap-2 flex items-center gap-1">
              <span className="text-foreground/50">For</span>
              <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
                Community Managers
              </span>
              <span className="text-foreground/50">,</span>
              <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
                Creators
              </span>
              <span className="text-foreground/50">,</span>
            </div>
            <div className="xs:gap-2 flex items-center gap-1">
              <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
                Game Developers
              </span>
              <span className="text-foreground/50">and</span>
              <span className="rounded-md bg-foreground/5 px-2.5 py-1.5">
                Entrepreneurs
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="/projects">
            <Button variant="outline">Our Work</Button>
          </Link>
          <Button>Contact Us</Button>
        </div>
      </div>
      <AbstractSVG className="opacity-100% absolute bottom-0 left-1/2 h-full !w-[1800px] -translate-x-1/2 md:w-10/12" />
    </section>
  );
}
