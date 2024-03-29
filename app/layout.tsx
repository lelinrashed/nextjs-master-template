import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextTopLoader
					color="hsl(0 0% 9%)"
					initialPosition={0.08}
					crawlSpeed={100}
					height={3}
					crawl={true}
					showSpinner={false}
					easing="ease"
					speed={500}
					shadow="0 0 10px hsl(0 0% 9%),0 0 hsl(0 0% 9%)"
				/>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
