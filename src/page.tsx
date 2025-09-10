import type { ReactNode } from "react";
import { Text } from "./text";
import { Tab, TabIndicator, TabPanel, Tabs, TabsList } from "./tabs";

type BaseProps = {
	title: string;
	children?: ReactNode;
};

type WithTabs = {
	tabs: {
		label: string;
		content: ReactNode;
		default?: boolean;
		state?: string;
	}[];
	globalActions?: never;
};

type WithGlobalActions = {
	globalActions?: ReactNode[];
	tabs?: never;
};

type Props = BaseProps & (WithTabs | WithGlobalActions);

export function Page({ title, children, tabs, globalActions }: Props) {
	return (
		<div className="flex flex-col w-full h-full gap-4">
			<div className="flex items-center gap-4 justify-between p-2">
				<Text size="xl" weight="semibold">{title}</Text>
				<div className="flex items-center gap-4">
					{
						globalActions?.map((action, i) => {
							return <div key={i}>{action}</div>
						})
					}
				</div>
			</div>

			{
				tabs && <Tabs defaultValue={tabs.filter((t) => t.default)?.at(0)?.label ?? undefined}>
					<TabsList>
						{
							tabs.map((t) => {
								return <Tab key={`tab-${t.label}`} value={t.label}>{t.label}</Tab>
							})
						}
						<TabIndicator />

					</TabsList>
					{
						tabs.map((t) => {
							return (
								<TabPanel key={`panel-${t.label}`} value={t.label}>
									{t.content}
								</TabPanel>
							)
						})
					}
				</Tabs>
			}
			{
				children && <div className="h-full w-full">{children}</div>
			}
		</div>
	)
}
