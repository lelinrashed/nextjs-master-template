import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div className="flex min-h-screen items-center dark:bg-slate-800">
			<div className="mx-auto flex h-full w-full max-w-[50rem] flex-col">
				<header className="z-50 mb-auto flex w-full justify-center py-4">
					<nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
						<Link
							className="flex-none text-xl font-semibold dark:text-white sm:text-3xl"
							href="/"
							aria-label="Brand"
						>
							App Name
						</Link>
					</nav>
				</header>

				<div className="px-4 py-10 text-center sm:px-6 lg:px-8">
					<h1 className="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">
						404
					</h1>
					<h1 className="block text-2xl font-bold text-white"></h1>
					<p className="mt-3 text-gray-600 dark:text-gray-400">
						Oops, something went wrong.
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						Sorry, we couldn&apos;t find your page.
					</p>
					<div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
						<Link
							className="text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-400 inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-semibold disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:w-auto"
							href="/"
						>
							<svg
								className="h-4 w-4 flex-shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="m15 18-6-6 6-6" />
							</svg>
							Back to home
						</Link>
					</div>
				</div>

				<footer className="mt-auto py-5 text-center">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<p className="text-sm text-gray-500">© All Rights Reserved. 2024.</p>
					</div>
				</footer>
			</div>
		</div>
	);
}
