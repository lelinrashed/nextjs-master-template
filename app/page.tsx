import Navbar from "@/components/Navbar";
import Counter from "@/components/counter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["200", "300", "600"],
});

export default function Home() {
	return (
		<div className="flex min-h-svh flex-col">
			<Navbar />
			<div className="mx-auto grid max-w-7xl flex-grow place-content-center gap-6 px-3 md:gap-10">
				<h1
					className={cn(
						"max-w-5xl text-balance text-center text-4xl font-semibold capitalize tracking-wide md:text-8xl",
						nunito.className
					)}
				>
					Welcome to NextJS master template
				</h1>
				<Counter />
				<Button className="mx-auto text-2xl">
					<GithubIcon size={24} />
					<span className="ml-2">View on Github</span>
				</Button>
			</div>
		</div>
	);
}
