import { useRef } from "react";

export const useRenderCounter = (): void => {
	const componentName = useRef<string>(
		new Error().stack
			?.split("\n")[2]
			.trim()
			.match(/^at (.+) \(/)?.[1] ?? ""
	);

	const renderCount = useRef<number>(0);

	process.env.NODE_ENV === "development"
		? console.log(
				`[${componentName.current}] Component has rendered ${renderCount.current} times.`
		  )
		: null;

	renderCount.current++;
};
