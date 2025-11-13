import { cn } from "./utils";

export const nativeSelectClass =
	"transition-all duration-200 bg-input text-foreground py-2 w-full rounded-[14px] px-3.5 text-base shadow-input placeholder:text-input-placeholder dark:border dark:border-transparent dark:focus-within:not-border-none focus-within:ring focus-within:ring-input-ring dark:focus-within:border dark:focus-within:border-input-ring relative grad-mask grad-mask-surface outline-input-outline appearance-none";

export function NativeSelect({
	className,
	...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
	return (
		<div
			className={cn("flex items-center", nativeSelectClass)}
		>
			<select className={cn("outline-none w-full bg-transparent pr-6", className)} {...props} />
		</div>
	);
}
