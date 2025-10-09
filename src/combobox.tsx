import { inputClass } from "./input";
import { cn } from "./utils"
import { Combobox as ComboboxPrimitive } from "@base-ui-components/react/combobox"

export function ComboboxRoot({
	...props }: React.ComponentProps<typeof ComboboxPrimitive.Root>) {
	return (
		<ComboboxPrimitive.Root {...props} />
	)
}

export type ComboboxRootProps = React.ComponentProps<typeof ComboboxPrimitive.Root>;

export function ComboboxInput({ className, ...props }: React.ComponentProps<typeof ComboboxPrimitive.Input>) {
	return (
		<ComboboxPrimitive.Input className={cn(inputClass, "outline-none", className)} {...props} />
	)
}

export type ComboboxInputProps = React.ComponentProps<typeof ComboboxPrimitive.Input>;

export function ComboboxClear({ className, ...props }: React.ComponentProps<typeof ComboboxPrimitive.Clear>) {
	return (
		<ComboboxPrimitive.Clear aria-label="Clear selection" className={cn("flex h-10 w-6 items-center justify-center rounded bg-transparent p-0", className)} {...props} />
	)
}
export type ComboboxClearProps = React.ComponentProps<typeof ComboboxPrimitive.Clear>;

export function ComboboxTrigger({ className, ...props }: React.ComponentProps<typeof ComboboxPrimitive.Trigger>) {
	return (
		<ComboboxPrimitive.Trigger className={cn("flex h-10 w-6 items-center justify-center rounded bg-transparent p-0", className)} {...props} />
	)
}
export type ComboboxTriggerProps = React.ComponentProps<typeof ComboboxPrimitive.Trigger>;

export function ComboboxPortal({ ...props }: React.ComponentProps<typeof ComboboxPrimitive.Portal>) {
	return (
		<ComboboxPrimitive.Portal {...props} />
	)
}

export type ComboboxPortalProps = React.ComponentProps<typeof ComboboxPrimitive.Portal>;

export function ComboboxPositioner({ className, ...props }: React.ComponentProps<typeof ComboboxPrimitive.Positioner>) {
	return (
		<ComboboxPrimitive.Positioner className={cn("outline-none ", className)} {...props} />
	)
}

export type ComboboxPositionerProps = React.ComponentProps<typeof ComboboxPrimitive.Positioner>;

export function ComboboxPopup({ className, ...props }: React.ComponentProps<typeof ComboboxPrimitive.Popup>) {
	return (
		<ComboboxPrimitive.Popup className={cn("w-[var(--anchor-width)] max-h-[min(var(--available-height),23rem)] m-2 max-w-[var(--available-width)] origin-[var(--transform-origin)] overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-xl bg-popover text-popover-foreground py-2 shadow-lg transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none dark:shadow-input dark:-outline-offset-1 relative grad-mask grad-mask-surface", className)} {...props} />
	)
}

export type ComboboxPopupProps = React.ComponentProps<typeof ComboboxPrimitive.Popup>;


export function ComboboxEmpty({ className, ...props }: React.ComponentProps<typeof ComboboxPrimitive.Empty>) {
	return (
		<ComboboxPrimitive.Empty className={cn("px-4 py-2 text-[0.925rem] leading-4 empty:m-0 empty:p-0 text-muted-foreground", className)} {...props} />
	)
}

export type ComboboxEmptyProps = React.ComponentProps<typeof ComboboxPrimitive.Empty>;

export function ComboboxList({ className, ...props }: React.ComponentProps<typeof ComboboxPrimitive.List>) {
	return (
		<ComboboxPrimitive.List className={cn(className, "")} {...props} />
	)
}

export type ComboboxListProps = React.ComponentProps<typeof ComboboxPrimitive.List>;

export function ComboboxItem({ className, ...props }: React.ComponentProps<typeof ComboboxPrimitive.Item>) {
	return (
		<ComboboxPrimitive.Item className={cn("flex items-center gap-2 cursor-default grid-cols-[0.75rem_1fr] py-2 pr-8 pl-4 text-base leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-secondary-foreground data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-item-highlighted")} {...props} />
	)
}

export type ComboboxItemProps = React.ComponentProps<typeof ComboboxPrimitive.Item>;

export function ComboboxItemIndicator({ className, ...props }: React.ComponentProps<typeof ComboboxPrimitive.ItemIndicator>) {
	return (
		<ComboboxPrimitive.ItemIndicator className={cn("col-start-1", className)} {...props} />
	)
}
export type ComboboxItemIndicatorProps = React.ComponentProps<typeof ComboboxPrimitive.ItemIndicator>;
