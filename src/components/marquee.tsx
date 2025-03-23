import { marqueeItems } from "@/data/marquee";
import Link from "next/link";

export function MarqueeWrapper() {
	return (
		<div className="my-20 flex w-full flex-col items-center justify-center gap-16 overflow-x-hidden">
			<div className="flex flex-col items-center justify-center gap-4 text-center">
				<span className="ml-1 h-fit text-5xl md:text-6xl">
					<span className="text-primary">Trusted</span> by Leading Brands
				</span>
				<span className="text-2xl md:text-3xl">
					Companies that already trust <span className="text-primary">Rivo</span>.
				</span>
			</div>
			<div className="relative flex flex-col gap-12 overflow-x-hidden sm:flex-row sm:gap-24">
				{marqueeItems.map((item) => (
					<Link href={item.href} key={item.label} target="_blank">
						<item.svg className="h-32 w-32" />
					</Link>
				))}
			</div>
		</div>
	);
}
