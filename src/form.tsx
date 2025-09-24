import { Form as FormPrimitive } from '@base-ui-components/react'
import { cn } from './utils';

export type FormProps = FormPrimitive.Props;

export function Form({ className, ...props }: FormProps) {
	return <FormPrimitive className={cn("flex flex-col gap-4", className)} {...props} />
}

