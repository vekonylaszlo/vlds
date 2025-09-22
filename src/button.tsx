import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"


const buttonVariants = cva(
	"cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[98%] duration-150 will-change-[scale] focus-visible:ring-offset-1",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow-primary hover:bg-primary-hover active:bg-primary active:shadow-none focus-visible:ring-primary",
				destructive:
					"bg-destructive text-white shadow-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20",
				outline:
					"bg-transparent hover:bg-secondary-hover ring-1 ring-zinc-950/10 dark:ring-border",
				secondary:
					"bg-secondary text-secondary-foreground ring-1 ring-zinc-950/10 dark:ring-border shadow-sm hover:shadow-md active:shadow-sm hover:bg-secondary-hover",
				ghost:
					"hover:bg-secondary-hover hover:text-secondary-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "px-5 py-2 has-[>svg]:px-3",
				sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
			radius: {
				default: "rounded-md",
				full: "rounded-full",
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			radius: 'default'
		},
	}
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants { }

function Button({
	className,
	variant,
	size,
	radius,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {

	return (
		<button
			className={cn(buttonVariants({ variant, size, radius, className }))}
			{...props}
		/>
	)
}

export { Button, buttonVariants }
