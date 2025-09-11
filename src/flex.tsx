import { cn } from "./utils";
import React from "react";

export interface FlexProps extends React.ComponentProps<'div'> {
	gap?: string;
	direction?: 'row' | 'column';
	align?: 'start' | 'center' | 'end' | 'baseline';
	justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | 'normal' | 'baseline';
	children: React.ReactNode;
}
export function Flex({ gap = "gap-4", direction = "row", align = "start", justify = "normal", children, className, ...props }: FlexProps) {
	return (
		<div {...props} className={cn("flex w-full h-full overflow-x-auto", gap, {
			"flex-col overflow-y-auto": direction === "column",
			"items-start": align === "start",
			"items-end": align === "end",
			"items-center": align === "center",
			"items-baseline": align === "baseline",
			"justify-start": justify === "start",
			"justify-end": justify === "end",
			"justify-center": justify === "center",
			"justify-between": justify === "between",
			"justify-around": justify === "around",
			"justify-evenly": justify === "evenly",
			"justify-stretch": justify === "stretch",
			"justify-normal": justify === "normal",
			"justify-baseline": justify === "baseline",
		}, className)} >
			{React.Children.map(children, (child, i) => (
				<div key={`flex-item-${i}`}>{child}</div>
			))}
		</div>
	)
}
