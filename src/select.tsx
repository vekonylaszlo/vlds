import { cn } from './utils';
import { Select as SelectPrimitive } from '@base-ui-components/react/select';

export type SelectRootProps = React.ComponentProps<typeof SelectPrimitive.Root>

export function SelectRoot({ ...props }: SelectRootProps) {
	return (
		<SelectPrimitive.Root {...props} />
	)
}

export type SelectTriggerProps = React.ComponentProps<typeof SelectPrimitive.Trigger>

export function SelectTrigger({ className, ...props }: SelectTriggerProps) {
	return (
		<SelectPrimitive.Trigger className={cn("transition-all duration-200 bg-input text-foreground py-2 w-full rounded-[14px] px-3.5 text-base shadow-input placeholder:text-input-placeholder dark:border dark:border-transparent dark:focus-within:not-border-none focus-within:ring focus-within:ring-input-ring dark:focus-within:border dark:focus-within:border-input-ring relative grad-mask grad-mask-surface outline-input-outline flex items-center justify-between", className)} {...props} />
	)
}

export type SelectValueProps = React.ComponentProps<typeof SelectPrimitive.Value>;

export function SelectValue({ className, ...props }: SelectValueProps) {
	return (
		<SelectPrimitive.Value className={cn("", className)} {...props} />
	)
}

export type SelectIconProps = React.ComponentProps<typeof SelectPrimitive.Icon>

export function SelectIcon({ className, ...props }: SelectIconProps) {
	return (
		<SelectPrimitive.Icon className={cn("flex", className)} {...props} />
	)
}

export type SelectPortalProps = React.ComponentProps<typeof SelectPrimitive.Portal>

export function SelectPortal({ ...props }: SelectPortalProps) {
	return (
		<SelectPrimitive.Portal {...props} />
	)
}

export type SelectBackdropProps = React.ComponentProps<typeof SelectPrimitive.Backdrop>

export function SelectBackdrop({ className, ...props }: SelectBackdropProps) {
	return (
		<SelectPrimitive.Backdrop className={cn("", className)} {...props} />
	)
}

export type SelectPositionerProps = React.ComponentProps<typeof SelectPrimitive.Positioner>

export function SelectPositioner({ className, ...props }: SelectPositionerProps) {
	return (
		<SelectPrimitive.Positioner sideOffset={8} className={cn("outline-none select-none z-10", className)} {...props} />
	)
}

export type SelectScrollUpArrowProps = React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>;

export function SelectScrollUpArrow({ className, ...props }: SelectScrollUpArrowProps) {
	return (
		<SelectPrimitive.ScrollUpArrow className={cn("top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-accent text-center text-xs before:absolute data-[side=none]:before:top-[-100%] before:left-0 before:h-full before:w-full before:content-['']", className)} {...props} />
	)
}

export type SelectScrollDownArrowProps = React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>;

export function SelectScrollDownArrow({ className, ...props }: SelectScrollDownArrowProps) {
	return (
		<SelectPrimitive.ScrollDownArrow className={cn("z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-accent text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-[''] bottom-0 data-[side=none]:before:bottom-[-100%]", className)} {...props} />
	)
}

export type SelectPopupProps = React.ComponentProps<typeof SelectPrimitive.Popup>

export function SelectPopup({ className, ...props }: SelectPopupProps) {
	return (
		<SelectPrimitive.Popup className={cn("w-[var(--anchor-width)] min-w-48 max-h-[min(var(--available-height),23rem)] m-2 max-w-[var(--available-width)] origin-[var(--transform-origin)] overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-popover backdrop-blur-2xl text-popover-foreground py-2 shadow-lg dark:shadow-input outline outline-zinc-950/10 transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none", className)} {...props} />
	)
}


export type SelectArrowProps = React.ComponentProps<typeof SelectPrimitive.Arrow>

export function SelectArrow({ className, ...props }: SelectArrowProps) {
	return (
		<SelectPrimitive.Arrow className={cn("", className)} {...props} />
	)
}
export type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item>

export function SelectItem({ className, ...props }: SelectItemProps) {
	return (
		<SelectPrimitive.Item className={cn("grid grid-cols-[0.75rem_1fr] min-w-[var(--anchor-width)] cursor-default items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-secondary-foreground data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-item-highlighted group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4", className)} {...props} />
	)
}

export type SelectItemTextProps = React.ComponentProps<typeof SelectPrimitive.ItemText>

export function SelectItemText({ className, ...props }: SelectItemTextProps) {
	return (
		<SelectPrimitive.ItemText className={cn("col-start-2", className)} {...props} />
	)
}

export type SelectItemIndicatorProps = React.ComponentProps<typeof SelectPrimitive.ItemIndicator>

export function SelectItemIndicator({ className, ...props }: SelectItemIndicatorProps) {
	return (
		<SelectPrimitive.ItemIndicator className={cn("col-start-1", className)} {...props} />
	)
}

export type SelectSeparatorProps = React.ComponentProps<typeof SelectPrimitive.Separator>

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
	return (
		<SelectPrimitive.Separator className={cn("", className)} {...props} />
	)
}

export type SelectGroupProps = React.ComponentProps<typeof SelectPrimitive.Group>

export function SelectGroup({ className, ...props }: SelectGroupProps) {
	return (
		<SelectPrimitive.Group className={cn("", className)} {...props} />
	)
}

export type SelectGroupLabelProps = React.ComponentProps<typeof SelectPrimitive.GroupLabel>

export function SelectGroupLabel({ className, ...props }: SelectGroupLabelProps) {
	return (
		<SelectPrimitive.GroupLabel className={cn("", className)} {...props} />
	)
}

export type SelectListProps = React.ComponentProps<typeof SelectPrimitive.List>

export function SelectList({ className, ...props }: SelectListProps) {
	return (
		<SelectPrimitive.List className={cn("relative py-1 scroll-py-6 overflow-y-auto max-h-[var(--available-height)]", className)} {...props} />
	)
}
