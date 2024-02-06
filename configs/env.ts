import { z } from "zod";

const serverEnvSchema = z.object({});
type ServerEnv = z.infer<typeof serverEnvSchema>;
export const serverEnv = serverEnvSchema.parse(process.env);

export const clientEnvSchema = z.object({});
type ClientEnv = z.infer<typeof clientEnvSchema>;
export const clientEnv = clientEnvSchema.parse(process.env);

type Env = ServerEnv & ClientEnv;

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Env {}
	}
}
