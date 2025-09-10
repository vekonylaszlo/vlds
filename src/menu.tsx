import { cn } from './utils';
import { Menu as MenuPrimitive } from '@base-ui-components/react/menu';

export function MenuRoot({ ...props }: React.ComponentProps<typeof MenuPrimitive.Root>) {
	return (
		<MenuPrimitive.Root {...props} />
	)
}

export type MenuRootProps = React.ComponentProps<typeof MenuPrimitive.Root>;

export function MenuTrigger({ className, ...props }: React.ComponentProps<typeof MenuPrimitive.Trigger>) {
	return (
		<MenuPrimitive.Trigger className={cn("", className)} {...props} />
	)
}

export type MenuTriggerProps = React.ComponentProps<typeof MenuPrimitive.Trigger>;

export function MenuPortal({ ...props }: React.ComponentProps<typeof MenuPrimitive.Portal>) {
	return (
		<MenuPrimitive.Portal {...props} />
	)
}

export type MenuPortalProps = React.ComponentProps<typeof MenuPrimitive.Portal>;

export function MenuPositioner({ className, ...props }: React.ComponentProps<typeof MenuPrimitive.Positioner>) {
	return (
		<MenuPrimitive.Positioner className={cn("outline-none", className)} {...props} />
	)
}

export type MenuPositionerProps = React.ComponentProps<typeof MenuPrimitive.Positioner>;

export function MenuPopup({ className, ...props }: React.ComponentProps<typeof MenuPrimitive.Popup>) {
	return (
		<MenuPrimitive.Popup className={cn("w-[var(--anchor-width)] min-w-48 max-h-[min(var(--available-height),23rem)] m-2 max-w-[var(--available-width)] origin-[var(--transform-origin)] overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-popover backdrop-blur-2xl text-popover-foreground py-2 shadow-lg dark:shadow-input outline outline-zinc-950/10 transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none", className)} {...props} />
	)
}

export type MenuPopupProps = React.ComponentProps<typeof MenuPrimitive.Popup>;

export function MenuItem({ className, ...props }: React.ComponentProps<typeof MenuPrimitive.Item>) {
	return (
		<MenuPrimitive.Item className={cn("flex cursor-default items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-secondary-foreground data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-item-highlighted", className)} {...props} />
	)
}
export type MenuItemProps = React.ComponentProps<typeof MenuPrimitive.Item>;
