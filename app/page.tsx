import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import { Nunito, Poppins } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "600"],
});

export default function Home() {
  return (
    <main className="max-w-7xl px-3 mx-auto min-h-svh grid place-content-center gap-6 md:gap-10">
      <h1
        className={cn(
          "text-4xl md:text-8xl max-w-5xl font-semibold capitalize tracking-wide text-center text-balance",
          nunito.className
        )}
      >
        Welcome to NextJS master template
      </h1>
      <Button className="mx-auto text-2xl">
        <GithubIcon size={24} />
        <span className="ml-2">View on Github</span>
      </Button>
    </main>
  );
}
