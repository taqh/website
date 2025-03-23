import { Rivo } from "@/icons";
import Link from "next/link";

export default function RivoLogo() {
	return (
		<Link href="/" className="flex items-center gap-2 sm:basis-1/5">
			<Rivo className="h-9 w-9" />
			<span className="text-2xl font-bold">Rivo</span>
		</Link>
	);
}
