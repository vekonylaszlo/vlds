import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"


const buttonVariants = cva(
	"cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow-primary hover:bg-primary-hover",
				destructive:
					"bg-destructive text-white shadow-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20",
				outline:
					"ring-1 ring-black bg-transparent hover:bg-secondary hover:text-accent-foreground hover:ring-2",
				secondary:
					"bg-secondary text-secondary-foreground ring-1 ring-zinc-950/10 shadow-sm hover:shadow-md active:shadow-sm hover:bg-secondary-hover",
				ghost:
					"hover:bg-secondary-hover hover:text-secondary-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants { }

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {

	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
