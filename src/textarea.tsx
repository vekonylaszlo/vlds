import { cn } from './utils'

export type TextareaProps = React.ComponentProps<'textarea'>

export function Textarea({
	className,
	...props
}: TextareaProps) {
	return (
		<textarea className={cn("transition-all duration-200 bg-input text-foreground h-fit w-full rounded-md pl-3.5 text-base outline outline-input-ring focus-visible:ring-2 focus-visible:ring-input-ring shadow-input placeholder:text-muted-foreground", className)} {...props} />
	)
}
