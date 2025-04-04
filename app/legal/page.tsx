import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Rivo - Legal Notice",
};

export default function Page() {
	return (
		<main className="legals">
			<section className="flex w-full max-w-7xl flex-col gap-6 text-lg text-foreground/80">
				<h1>Legal Notice</h1>
				<span>
					🇩🇪 For the German version please <Link href="legal-de">visit this page</Link>.
				</span>
				<span>Information according to § 5 TMG.</span>
				<div>
					<h4 className="mb-1">Contact</h4>
					<ul className="pl-4">
						<li>Dominik Koch</li>
						<li>Parkstraße 5</li>
						<li>88499 Riedlingen</li>
						<li>Germany</li>
						<li>
							Email: <a href="mailto:dominik@rivo.gg">dominik@rivo.gg</a>
						</li>
						<li>Phone: +49 151 23793107</li>
						<li className="text-yellow-200">🛈 No acceptance of parcels or packages.</li>
					</ul>
				</div>
				<div className="flex flex-col">
					<h4>Online dispute resolution</h4>
					<span>
						The European Comission provides a platform for online dispute resolution, available at{" "}
						<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
							https://ec.europa.eu/consumers/odr
						</a>
						.
					</span>
					<span>
						I am neither willing nor obliged to participate in dispute resolution proceedings in front of a consumer
						arbitration board.
					</span>
				</div>
				<div>
					<h4>Privacy Policy</h4>
					<Link href="/privacy">https://rivo.gg/privacy</Link>
				</div>
			</section>
		</main>
	);
}
