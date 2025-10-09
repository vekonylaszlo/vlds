import { cn } from './utils'
import { Input as InputPrimitive } from '@base-ui-components/react'
import { ReactNode } from 'react';

export type InputProps = React.ComponentProps<typeof InputPrimitive> & {
	leftDecor?: ReactNode;
	rightDecor?: ReactNode;
}

// TODO: Valahogyan meg kell oldani, hogy ne kelljen sötét módban border / border-transparent értéket adni. Ehhez az kell, hogy a ring működjön sötét módban!
export const inputClass = "transition-all duration-200 bg-input text-foreground py-2 w-full rounded-[14px] px-3.5 text-base shadow-input placeholder:text-input-placeholder dark:border dark:border-transparent dark:focus-within:not-border-none focus-within:ring focus-within:ring-input-ring dark:focus-within:border dark:focus-within:border-input-ring relative grad-mask grad-mask-surface outline-input-outline"

export function Input({
	className,
	leftDecor,
	rightDecor,
	...props
}: InputProps) {
	return (
		<div className={cn("flex items-center", inputClass, {
			"gap-2": leftDecor || rightDecor
		})}>
			{leftDecor && <>{leftDecor}</>}
			<InputPrimitive className={cn("outline-none", className)} {...props} />
			{rightDecor && <>{rightDecor}</>}
		</div>
	)
}
