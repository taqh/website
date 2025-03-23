import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import type React from "react";

export function MobileMenu({
	children,
	className,
	open,
	setOpen,
}: {
	children: React.ReactNode;
	className?: string;
	open: boolean;
	setOpen: (open: boolean) => void;
}) {
	// const [open, setOpen] = React.useState(false)

	return (
		<div className={cn(className)}>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger aria-label="Mobile Hamburger Menu">
					<Menu className="h-12 w-12 p-2" />
				</SheetTrigger>
				<SheetContent side="right" className={cn("flex flex-col items-center pt-16", className)}>
					{children}
				</SheetContent>
			</Sheet>
		</div>
	);
}
