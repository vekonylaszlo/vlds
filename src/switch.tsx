import { Switch as SwitchPrimitive } from '@base-ui-components/react/switch';
import { cn } from './utils';

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

export function Switch({ className, ...props }: SwitchProps) {
	return (
		<SwitchPrimitive.Root
			{...props}
			className={cn("relative items-center flex h-[24px] w-[54px] rounded-full transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute focus-visible:ring-4 focus-visible:ring-accent/25 focus-visible:outline focus-visible:outline-accent bg-secondary-hover active:bg-accent/25 data-[checked]:bg-accent p-[2px]", className)}
		>
			<SwitchPrimitive.Thumb className="h-full rounded-full w-[32px] h-full bg-white transition-transform duration-150 data-[checked]:translate-x-[18px] data-[checked]:translate-y-[-0.5px] shadow-input data-[unchecked]:ring ring-input" />
		</SwitchPrimitive.Root>
	);
} 
