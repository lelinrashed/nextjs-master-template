import Link from "next/link";
import { Icons } from "../icons";
import { Separator } from "../ui/separator";

export default function Navbar() {
	return (
		<div className="sticky inset-0 top-0 flex h-16 items-center justify-between bg-white px-3 shadow-md md:px-6">
			<div className="flex items-center space-x-4">
				<Link href="/">
					<Icons.npm className="size-9" />
				</Link>
			</div>
			<div className="flex items-center space-x-4">
				<Link href="/sign-in">Sign in</Link>
				<Separator className="h-5" orientation="vertical" />
				<Link href="/sign-up">Sign up</Link>
			</div>
		</div>
	);
}
