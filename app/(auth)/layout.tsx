import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<div className="flex flex-grow items-center justify-center">
				{children}
			</div>
		</div>
	);
}
