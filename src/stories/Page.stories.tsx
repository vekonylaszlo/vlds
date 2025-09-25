import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { Page } from '../page';
import { Button } from '../button';


const meta = {
	title: 'Example/Page',
	component: Page,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;


export const WithChildren: Story = {
	args: {
		title: 'Page with children',
		children: <div className='flex w-full h-full'>this is the content of the page</div>
	},
};

export const WithChildrenAndGlobalActions: Story = {
	args: {
		title: 'Page with children',
		globalActions: [<Button>Action 1</Button>, <Button variant="secondary">Action 2</Button>],
		children: <div className='flex w-full h-full'>this is the content of the page</div>
	},
};

export const WithTabs: Story = {
	args: {
		title: 'Page with tabs',
		globalActions: [<Button>Action 1</Button>, <Button variant="secondary">Action 2</Button>],
		tabs: [{
			label: "Tab 1",
			content: <div className='flex w-full h-full justify-center items-center '>
				<div className='flex w-[420px] h-[280px] rounded-md bg-card border border-border text-center'>
					card
				</div>
			</div>,
			default: true,
		}, {
			label: "Tab 2",
			content: <div className='flex w-ful h-full'>content of tab 2</div>,
		}]
	},
};
