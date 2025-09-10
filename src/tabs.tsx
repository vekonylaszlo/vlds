import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs"
import { cn } from "./utils"

function Tabs({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
	return (
		<TabsPrimitive.Root className={cn("flex flex-col w-full h-full", className)} {...props} />
	)
}

export type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;

function TabsList({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			className={cn(
				"relative z-0 flex gap-1 p-2 shadow-[inset_0_-1px] shadow-border",
				className
			)}
			{...props}
		/>
	)
}

export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;

function Tab({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
	return (
		<TabsPrimitive.Tab className={cn("flex h-7 items-center justify-center border-0 px-4 text-sm font-medium break-keep whitespace-nowrap text-muted-foreground outline-none select-none before:inset-x-0 before:inset-y-1 before:rounded-sm before:-outline-offset-1 hover:text-accent-foreground focus-visible:relative focus-visible:before:absolute focus-visible:before:outline-2 data-[selected]:text-foreground cursor-pointer", className)} {...props} />
	)
}

export type TabProps = React.ComponentProps<typeof TabsPrimitive.Tab>;

function TabPanel({
	className, ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
	return (
		<TabsPrimitive.Panel className={cn("flex outline-none w-full h-full", className)} {...props} />
	)
}

export type TabPanelProps = React.ComponentProps<typeof TabsPrimitive.Panel>;

function TabIndicator({
	className, ...props
}: React.ComponentProps<typeof TabsPrimitive.Indicator>) {
	return (
		<TabsPrimitive.Indicator className={cn("absolute top-1/2 left-0 z-[-1] h-8 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 rounded-md bg-tab transition-all duration-200 ease-in-out shadow-tab", className)} {...props} />
	)
}

export type TabIndicatorProps = React.ComponentProps<typeof TabsPrimitive.Indicator>;
export { Tabs, TabsList, Tab, TabPanel, TabIndicator };
