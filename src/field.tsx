import { Field as FieldPrimitive } from '@base-ui-components/react'
import { cn } from './utils';
import { inputClass } from './input';

export type FieldProps = React.ComponentProps<typeof FieldPrimitive.Root>;

export function Field({ className, ...props }: FieldProps) {
	return <FieldPrimitive.Root className={cn(className)} {...props} />
}

export type FieldLabelProps = React.ComponentProps<typeof FieldPrimitive.Label>;

export function FieldLabel({ className, ...props }: FieldLabelProps) {
	return <FieldPrimitive.Label className={cn("text-sm font-medium", className)} {...props} />
}

export type FieldControlProps = React.ComponentProps<typeof FieldPrimitive.Control>;

export function FieldControl({ className, ...props }: FieldControlProps) {
	return <FieldPrimitive.Control className={cn(inputClass, className)} {...props} />
}

export type FieldErrorProps = React.ComponentProps<typeof FieldPrimitive.Error>;

export function FieldError({ className, ...props }: FieldErrorProps) {
	return <FieldPrimitive.Error className={cn("text-sm text-destructive", className)} {...props} />
}

export type FieldDescriptionProps = React.ComponentProps<typeof FieldPrimitive.Description>;

export function FieldDescription({ className, ...props }: FieldDescriptionProps) {
	return <FieldPrimitive.Description className={cn("text-sm text-muted-foreground", className)} {...props} />
}


export type FieldValidityProps = React.ComponentProps<typeof FieldPrimitive.Validity>;

export function FieldValidity({ ...props }: FieldValidityProps) {
	return <FieldPrimitive.Validity {...props} />
}

