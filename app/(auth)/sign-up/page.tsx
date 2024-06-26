"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Signup, signupSchema } from "@/schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export default function SignupPage() {
	const { toast } = useToast();
	const { formState, register, handleSubmit } = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(signupSchema),
	});

	const onSubmit: SubmitHandler<Signup> = (data, e) => {
		e?.preventDefault();

		console.log(data);

		toast({
			title: "Account created",
			description: "We've created successfully! 🎉",
			variant: "default",
			action: <ToastAction altText="View Account">View account</ToastAction>,
		});
	};

	return (
		<div>
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Create an account</CardTitle>
					<CardDescription>Enter your email below to create your account</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<div className="grid grid-cols-2 gap-6">
						<Button variant="outline">
							<Icons.gitHub className="mr-2 h-4 w-4" />
							Github
						</Button>
						<Button variant="outline">
							<Icons.google className="mr-2 h-4 w-4" />
							Google
						</Button>
					</div>
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							{...register("email")}
							className="focus:border-none"
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							placeholder="********"
							{...register("password")}
							className="focus:border-none"
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Button className="w-full" type="submit" onClick={handleSubmit(onSubmit)}>
						Create account
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
