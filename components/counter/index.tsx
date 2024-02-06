"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useCounterStore } from "@/stores/counter-store";

export default function Counter() {
	const { counter, increment, decrement } = useCounterStore();
	return (
		<Card className="w-[350px] mx-auto">
			<CardHeader className="text-center">
				<CardTitle>Counter</CardTitle>
				<CardDescription>Simple counter with zustand.</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="text-3xl font-semibold text-center">
					{counter}
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button onClick={increment}>Increment</Button>
				<Button onClick={decrement}>Decrement</Button>
			</CardFooter>
		</Card>
	);
}
