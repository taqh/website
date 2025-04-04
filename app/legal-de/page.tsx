import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Rivo - Impressum",
};

export default function Page() {
	return (
		<main className="legals">
			<section className="flex w-full max-w-7xl flex-col gap-6 text-lg text-foreground/80">
				<h1>Impressum</h1>
				<span>Informationen gemäß § 5 TMG.</span>
				<div>
					<h4 className="mb-1">Kontakt</h4>
					<ul className="pl-4">
						<li>Dominik Koch</li>
						<li>Parkstraße 5</li>
						<li>88499 Riedlingen</li>
						<li>Deutschland</li>
						<li>
							Email: <a href="mailto:dominik@rivo.gg">dominik@rivo.gg</a>
						</li>
						<li>Phone: +49 151 23793107</li>
						<li className="text-yellow-200">🛈 Keine Annahme von Paketen oder Päckchen.</li>
					</ul>
				</div>
				<div className="flex flex-col">
					<h4>Online dispute resolution</h4>
					<span>
						Die Europäische Kommission bietet eine Plattform für die Online-Streitbeilegung Streitbeilegung, die hier zu
						finden ist:{" "}
						<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
							https://ec.europa.eu/consumers/odr
						</a>
						.
					</span>
					<span>
						Ich bin weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren an einem
						Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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
