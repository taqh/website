import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function AboutOwnerBox() {
  return (
    <section id="testimonials" className="my-20 flex w-full max-w-6xl flex-col gap-20 px-6">
    <span className="text-center text-5xl md:text-6xl">
      Meet the man behind <span className="text-primary">Rivo</span>
    </span>
        <Card className="rounded-xl border-2 border-foreground/5 bg-foreground/[0.0125]">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                  <Image
                    src="/dominik-koch.webp"
                    alt="Dominik Koch"
                    width={256}
                    height={256}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-2 rounded-lg shadow-md transform rotate-6">
                  <p className="text-sm font-semibold">⤴️ The Mastermind</p>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold mb-4 text-primary">Dominik Koch</h3>
                <p className="text-lg mb-6">
                  Hi, I'm Dominik Koch the founder of <span className="text-primary">Rivo</span>. I love working on modern solutions to all sorts of problems. I'm a creative thinker, problem solver, and
                  tech enthusiast. I'm always looking for new challenges and
                  opportunities to grow and learn.
                </p>
                <p className="text-lg mb-6">Need to get in touch? Feel free to reach out to me at{" "} <a href="mailto:dominik@rivo.gg"><code className="text-blue-500 hover:text-blue-400">dominik@rivo.gg</code></a>!</p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Problem Solver",
                    "Tech Enthusiast",
                    "Creative Thinker",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="text-blue-500 mr-2">▹</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
    </section>
  );
}
