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
		<Card className="mx-auto w-[350px]">
			<CardHeader className="text-center">
				<CardTitle>Counter</CardTitle>
				<CardDescription>Simple counter with zustand.</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="text-center text-3xl font-semibold">{counter}</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button onClick={increment}>Increment</Button>
				<Button onClick={decrement}>Decrement</Button>
			</CardFooter>
		</Card>
	);
}
