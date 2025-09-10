import { cn } from './utils'
import { Input as InputPrimitive } from '@base-ui-components/react'

export type InputProps = React.ComponentProps<typeof InputPrimitive>;

export function Input({
	className,
	...props
}: React.ComponentProps<typeof InputPrimitive>) {
	return (
		<InputPrimitive className={cn("transition-all bg-input text-foreground h-9 w-full max-w-64 rounded-md pl-3.5 text-base outline outline-zinc-950/10 shadow-input placeholder:text-muted-foreground", className)} {...props} />
	)
}
