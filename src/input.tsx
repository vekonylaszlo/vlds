import { cn } from './utils'
import { Input as InputPrimitive } from '@base-ui-components/react'

export type InputProps = React.ComponentProps<typeof InputPrimitive>;

export function Input({
	className,
	...props
}: InputProps) {
	return (
		<InputPrimitive className={cn("transition-all duration-200 bg-input text-foreground h-9 w-full rounded-md pl-3.5 text-base outline outline-input-ring focus-visible:ring-2 focus-visible:ring-input-ring shadow-input placeholder:text-muted-foreground", className)} {...props} />
	)
}
