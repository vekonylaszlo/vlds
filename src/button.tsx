import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"
import { mergeProps, useRender } from "@base-ui-components/react"


const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full relative text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[98%] transition-[scale,shadow] duration-100 shadow-md active:shadow-xs outline dark:outline-none",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90 grad-mask grad-mask-primary outline-primary-outline",
				warning: "bg-warning text-warning-foreground hover:bg-warning/90 grad-mask grad-mask-warning outline-warning-outline",

				arctic: "bg-arctic text-arctic-foreground hover:bg-arctic/90 grad-mask grad-mask-arctic outline-arctic-outline",
				destructive:
					"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 grad-mask grad-mask-destructive outline-destructive-outline",
				outline:
					"border border-border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80 grad-mask grad-mask-secondary outline-secondary-outline",
				ghost:
					"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 shadow-none outline-none",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 px-6 has-[>svg]:px-4",
				icon: "size-9",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

export interface ButtonProps
	extends VariantProps<typeof buttonVariants>,
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	useRender.ComponentProps<"button"> { }

function Button({
	className,
	variant,
	size,
	render = <button />,
	...props
}: ButtonProps) {
	const defaultProps = {
		"data-slot": "button",
		className: cn(buttonVariants({ variant, size, className })),
	} as const

	const element = useRender({
		render,
		props: mergeProps<"button">(defaultProps, props),
	})

	return element
}

export { Button, buttonVariants }
