import { Hero } from "@/components/hero";
import { SocialProfileJsonLd, OrganizationJsonLd } from "next-seo";
import { MarqueeWrapper } from "@/components/marquee";
import { Testimonials } from "@/components/testimonials";
import { AboutOwnerBox } from "@/components/founder-box";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<SocialProfileJsonLd
				type="Organization"
				name="Rivo"
				url="https://rivo.gg"
				useAppDir={true}
				sameAs={["https://www.linkedin.com/company/rivo-gg/", "https://github.com/rivo-gg", "https://x.com/Rivodotgg"]}
			/>
			<OrganizationJsonLd
				type="Corporation"
				id="https://rivo.gg/"
				logo="https://rivo.gg/Logo.png"
				legalName="Dominik Koch"
				name="Rivo"
				useAppDir={true}
				address={{
					streetAddress: "Parkstraße 5",
					addressLocality: "Riedlingen",
					addressRegion: "BW",
					postalCode: "88499",
					addressCountry: "DE",
				}}
				contactPoint={[
					{
						telephone: "+49 151 23793107",
						contactType: "customer service",
						email: "support@rivo.gg",
						areaServed: "DE",
						availableLanguage: ["English", "German"],
					},
				]}
				sameAs={["https://rivo.gg/"]}
				url="https://rivo.gg/"
			/>
			<Hero />
			<MarqueeWrapper />
			<Testimonials />
			<AboutOwnerBox />
		</main>
	);
}
