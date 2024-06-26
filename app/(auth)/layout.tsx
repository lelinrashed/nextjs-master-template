import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen flex-col">
			<Navbar />
			<div className="flex flex-grow items-center justify-center">{children}</div>
		</div>
	);
}
