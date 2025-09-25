import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react"
import { CheckIcon } from '@phosphor-icons/react'

import { cn } from "./utils"


export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;
function Checkbox({
	className,
	...props
}: CheckboxProps) {
	return (
		<CheckboxPrimitive.Root
			{...props}

			className={cn("flex size-5 items-center justify-center rounded-sm focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent data-[checked]:bg-primary data-[unchecked]:border data-[unchecked]:border-border transition-all duration-150 ease-in-out", className)}
		>
			<CheckboxPrimitive.Indicator className="flex text-primary-foreground data-[unchecked]:hidden">
				<CheckIcon className="size-3" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	)
}

export { Checkbox }
