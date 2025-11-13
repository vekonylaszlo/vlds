import { cn } from './utils'

export type TextareaProps = React.ComponentProps<'textarea'>
export const textareaClass =
	"transition-colors duration-200 bg-input text-foreground py-2 w-full rounded-[14px] px-3.5 text-base shadow-input placeholder:text-input-placeholder dark:border dark:border-transparent dark:focus-within:not-border-none focus-within:ring focus-within:ring-input-ring dark:focus-within:border dark:focus-within:border-input-ring relative grad-mask grad-mask-surface outline-input-outline";
export function Textarea({
	className,
	...props
}: TextareaProps) {
	return (
		<div
			className={cn("flex items-start", textareaClass)}
		>
			<textarea className={cn("outline-none w-full bg-transparent", className)} {...props} />
		</div>
	)
}
