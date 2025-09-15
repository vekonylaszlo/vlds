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
	return <TooltipPrimitive.Popup className={cn("flex origin-[var(--transform-origin)] flex-col rounded-md bg-popover/90 backdrop-blur-2xl text-popover-foreground px-2 py-1 text-sm shadow-lg max-w-xs text-balance ring ring-ring transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:duration-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0", className)} {...props} />
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
						<TooltipArrow>
							<ArrowSvg />
						</TooltipArrow>
						{content}
					</TooltipPopup>
				</TooltipPositioner>
			</TooltipPortal>
		</TooltipRoot>
	)
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
	return (
		<svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
			<path
				d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
				className="fill-popover"
			/>
			<path
				d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
				className="fill-ring"
			/>
		</svg>
	);
}
