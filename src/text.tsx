import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

export type TextProps = React.ComponentProps<"p"> & VariantProps<typeof textVariants> & {
	children: string,
}

const textVariants = cva("", {
	variants: {

		size: {
			default: 'text-base',
			sm: 'text-sm',
			lg: 'text-lg',
			xl: 'text-xl',
			"2xl": 'text-2xl',
		},
		weight: {
			default: 'font-normal',
			semibold: 'font-semibold',
			medium: 'font-medium',
			bold: 'font-bold'
		}
	},
	defaultVariants: {
		size: "default",
		weight: "default"
	}
}
)

export function Text({ children, size, weight, className, ...props }: TextProps) {
	return (
		<p className={cn(textVariants({ size, weight, className }))} {...props}>{children}</p>
	)
}
