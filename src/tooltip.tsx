import { HTMLProps } from 'react';
import { cn } from './utils';
import { Tooltip as TooltipPrimitive } from '@base-ui-components/react/tooltip';

export function TooltipProvider({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
	return (
		<TooltipPrimitive.Provider {...props} />
	)
}
export type TooltipProviderProps = React.ComponentProps<typeof TooltipPrimitive.Provider>;


export function TooltipRoot({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
	return <TooltipPrimitive.Root {...props} />
}

export type TooltipRootProps = React.ComponentProps<typeof TooltipPrimitive.Root>;


export function TooltipTrigger({ className, ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
	return <TooltipPrimitive.Trigger className={cn("", className)} {...props} />
}

export type TooltipTriggerProps = React.ComponentProps<typeof TooltipPrimitive.Trigger>;

export function TooltipPortal({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Portal>) {
	return <TooltipPrimitive.Portal {...props} />
}

export type TooltipPortalProps = React.ComponentProps<typeof TooltipPrimitive.Portal>;

export function TooltipPositioner({ className, sideOffset = 10, ...props }: React.ComponentProps<typeof TooltipPrimitive.Positioner>) {
	return <TooltipPrimitive.Positioner sideOffset={sideOffset} className={cn("", className)} {...props} />
}

export type TooltipPositionerProps = React.ComponentProps<typeof TooltipPrimitive.Positioner>;

export function TooltipPopup({ className, ...props }: React.ComponentProps<typeof TooltipPrimitive.Popup>) {
	return <TooltipPrimitive.Popup className={cn("flex origin-[var(--transform-origin)] flex-col rounded-md bg-popover/90 backdrop-blur-2xl text-popover-foreground px-2 py-1 text-sm shadow-lg  outline outline-zinc-950/20 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:duration-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0", className)} {...props} />
}

export type TooltipPopupProps = React.ComponentProps<typeof TooltipPrimitive.Popup>;

export function TooltipArrow({ className, ...props }: React.ComponentProps<typeof TooltipPrimitive.Arrow>) {
	return <TooltipPrimitive.Arrow className={cn("data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180", className)} {...props} />
}

export type TooltipArrowProps = React.ComponentProps<typeof TooltipPrimitive.Arrow>;


export type TooltipProps = {
	children:
	| React.ReactElement<Record<string, unknown>, string | React.JSXElementConstructor<any>>
	| ((
		props: React.HTMLProps<any>,
		state: TooltipPrimitive.Trigger.State
	) => React.ReactElement);
	content: string;
};

export function Tooltip({ children, content }: TooltipProps) {
	return (
		<TooltipRoot>
			<TooltipTrigger render={children} />
			<TooltipPortal>
				<TooltipPositioner>
					<TooltipPopup>
						{content}
					</TooltipPopup>
				</TooltipPositioner>
			</TooltipPortal>
		</TooltipRoot>
	)
}
