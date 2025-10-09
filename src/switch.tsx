import { Switch as SwitchPrimitive } from '@base-ui-components/react/switch';
import { cn } from './utils';

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

function Switch({
	className,
	...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
	return (
		<SwitchPrimitive.Root
			data-slot="switch"
			className={cn(
				"bg-background data-[checked]:bg-primary transition-all relative peer inline-flex h-5 w-[34px] shrink-0 items-center rounded-full focus-visible:ring focus-visible:ring-input-ring outline outline-border shadow-input disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					"bg-input grad-mask grad-mask-secondary transition-all pointer-events-none block size-4 rounded-full data-[checked]:translate-x-[calc(100%-0.25px)] data-[unchecked]:translate-x-0.5"
				)}
			/>
		</SwitchPrimitive.Root>
	)
}

export { Switch } 
