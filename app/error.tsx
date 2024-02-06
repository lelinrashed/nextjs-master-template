"use client"; // Error components must be Client Components

import type { Metadata } from "next";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
	title: "Error",
	description: "Error page",
};

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<main className="min-h-screen grid place-content-center bg-white dark:bg-gray-900">
			<Card className="flex flex-col justify-center items-center py-2">
				<CardHeader className="px-4 mx-auto max-w-screen-xl lg:px-6 text-center">
					<CardTitle className="text-7xl tracking-tight font-extrabold lg:text-9xl text-destructive">
						500
					</CardTitle>
					<CardDescription className="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
						Internal Server Error
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-lg font-light text-gray-500 dark:text-gray-400">
						We are already working to solve the problem.
					</p>
				</CardContent>
				<CardFooter>
					<Button
						type="button"
						onClick={
							// Attempt to recover by trying to re-render the segment
							() => reset()
						}
					>
						Try again
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
