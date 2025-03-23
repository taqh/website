import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Testimonials() {
	return (
		<section id="testimonials" className="my-20 flex w-full max-w-6xl flex-col gap-20 px-6">
			<span className="text-center text-5xl md:text-6xl">
				Hear it from <span className="text-primary">Others</span>
			</span>
			<div className="flex flex-wrap justify-around gap-8">
				{testimonials.map((testimonial) => (
					<TestimonialCard key={testimonial.author} {...testimonial} className="my-auto h-fit w-full" />
				))}
			</div>
		</section>
	);
}

interface Testimonial {
	author: string;
	job: string;
	link: string;
	avatar: string;
	content: string;
}

const testimonials: Testimonial[] = [
	{
		author: "Shulkercraft",
		job: "YouTube Creator",
		link: "https://www.youtube.com/@Shulkercraft",
		avatar: "Shulkercraft.webp",
		content:
			"In the last 2 years Rivo helped my channel get one of the longest lasting brand sponsorships, which helped my brand to grow and be financially stable. They are always quick to solve any problems, which is important in the creator space where everything moves fast.",
	},
	{
		author: "Dylan",
		job: "Community Manager at Universal Music Group",
		link: "https://www.youtube.com/@fxtch",
		avatar: "Dylan.webp",
		content: `Working with the team at Rivo has been an opportunity I did not expect. Rivo kindly worked on a tight deadline to rigorously create & develop an interactive application for a world leading talent in music - the experience now being enjoyed in one of the largest gaming communities in Discord! Couldn't recommend their innovative solutions enough!`,
	},
	{
		author: "Tsundown",
		job: "Game Developer & Publisher",
		link: "https://tsundown.itch.io/",
		avatar: "Tsundown.webp",
		content:
			"Rivo made sure to help out my channel and game every step of the way! They not only made things easy and simple, but made sure I knew what the best things moving forward were. I cannot say enough good things about all thay they have done for me, and how they made growth simpler and more effective.",
	},
];

interface TestimonialCardProps {
	author: string;
	job: string;
	link: string;
	avatar: string;
	content: string;
	className?: string;
}

const TestimonialCard = ({ author, job, link, avatar, content, className }: TestimonialCardProps) => {
	const parts = content.split(/(Rivo)/g);

	return (
		<div
			className={cn(
				"flex max-w-xs flex-col gap-2 rounded-xl border-2 border-foreground/5 bg-foreground/[0.0125] px-8 py-6",
				className,
			)}
		>
			<span className="text-lg font-extralight">
				<span className="text-xl text-primary">&quot;</span>
				{parts.map((part, index) =>
					part === "Rivo" ? (
						<span key={index} className="text-primary">
							{part}
						</span>
					) : (
						<span key={index}>{part}</span>
					),
				)}
				<span className="text-xl text-primary">&quot;</span>
			</span>
			<div className="flex items-center gap-2">
				<Avatar className="h-12 w-12 select-none">
					<AvatarImage alt={`${author}s Logo`} src={avatar} />
					<AvatarFallback>
						{author.split(" ").map((name, index) => index < 2 && <span key={name}>{name[0]}</span>)}
					</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<Link className="font-bold" href={link} target="_blank">
						{author}
					</Link>
					<span className="text-sm text-foreground/50">{job}</span>
				</div>
			</div>
		</div>
	);
};
