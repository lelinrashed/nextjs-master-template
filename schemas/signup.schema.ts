import { z } from "zod";

export const signupSchema = z.object({
	email: z
		.string({
			description: "The email of the user",
			invalid_type_error: "Please provide a valid email address",
			required_error: "Please provide an email address",
		})
		.email("Please provide a valid email address"),
	password: z
		.string({
			description: "The password of the user",
			invalid_type_error: "Please provide a valid password",
			required_error: "Please provide a password",
		})
		.min(6, "Password must be at least 6 characters long"),
});
export type Signup = z.infer<typeof signupSchema>;
