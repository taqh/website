import { GithubIcon, LinkedInIcon, LocationIcon, MailIcon, Rivo } from "@/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type React from "react";

export function Footer() {
	return (
		<footer className="mt-24 flex items-center justify-center border-t-2 px-6 pb-12 pt-24">
			<div className="flex w-fit max-w-7xl flex-col items-center gap-12 md:w-full md:flex-row md:items-start md:justify-between md:gap-4">
				<div className="order-last flex flex-col items-center gap-2 md:order-first md:items-start">
					<Link href="/" className="flex items-center gap-2">
						<Rivo className="h-12 w-12" />
						<span className="text-3xl font-bold">Rivo</span>
					</Link>
					<span className="ml-3 max-w-[175px] text-center text-foreground/70 md:max-w-full md:text-start">
						© 2023 - Present Rivo. All rights reserved.
					</span>
					<div className="ml-2 flex gap-1">
						<Link href="https://www.linkedin.com/company/rivo-gg/" target="_blank">
							<LinkedInIcon className="h-8 w-8 text-primary transition hover:-translate-y-0.5" />
						</Link>
						<Link href="https://github.com/rivo-gg" target="_blank">
							<GithubIcon className="h-8 w-8 text-primary transition hover:-translate-y-0.5" />
						</Link>
					</div>
				</div>
				<FooterList>
					<FooterTitle>Legals</FooterTitle>
					<FooterLink href="/legal">Legal Notice</FooterLink>
					<FooterLink href="/privacy">Privacy Policy</FooterLink>
					<FooterLink href="/tos">Terms of Service</FooterLink>
				</FooterList>
				<FooterList className="pr-3">
					<FooterTitle>Contacts</FooterTitle>
					<FooterLink href="mailto:hello@rivo.gg" className="flex items-center gap-2">
						<MailIcon className="h-6 w-6 text-primary" />
						hello@rivo.gg
					</FooterLink>
					<span className="flex items-center gap-2 text-lg">
						<LocationIcon className="h-6 w-6 text-primary" />
						Germany
					</span>
				</FooterList>
			</div>
		</footer>
	);
}

const FooterList = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => <div className={cn("flex flex-col items-center gap-2 md:items-start", className)}>{children}</div>;

const FooterTitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => <span className={cn("text-xl font-bold", className)}>{children}</span>;

const FooterLink = ({
	href,
	children,
	className,
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
}) => (
	<Link href={href} className={cn("w-fit text-lg transition hover:text-blue-500", className)}>
		{children}
	</Link>
);
