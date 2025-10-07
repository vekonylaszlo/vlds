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
				"peer data-[checked]:bg-primary data-[unchecked]:bg-secondary inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full outline outline-input-ring focus-visible:ring-4 focus-visible:ring-ring focus-visible:outline-accent shadow-input disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb
				data-slot="switch-thumb"
				className={cn(
					"bg-background pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[checked]:translate-x-[calc(100%-2px)] data-[unchecked]:translate-x-0 border border-ring/20"
				)}
			/>
		</SwitchPrimitive.Root>
	)
}

export { Switch } 
