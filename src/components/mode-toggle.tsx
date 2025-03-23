"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button variant="outline" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
			{theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
			{/* <span className="sr-only">Toggle theme</span> */}
		</Button>
	);
}
