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
		children: <div className='flex w-full h-full p-6 gap-4'>
			<div className='flex flex-col gap-4'>
				<button className='grad py-2 px-6 h-fit w-fit bg-[#f5f5f5] text-black font-semibold rounded-full grad-mask grad-mask-white outline outline-[#e1e1e1] relative shadow-md'>
					Action
				</button>
				<button className='grad py-2 px-6 h-fit w-fit bg-[#f4f3cf] text-[#906d56] font-semibold rounded-full outline outline-[#c6c6a0] grad-mask grad-mask-yellow relative shadow-md'>
					Action
				</button>

				<button className='py-2 px-6 h-fit shadow-md rounded-full w-fit bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 grad-mask grad-mask-red relative outline outline-destructive-outline'>
					Action
				</button>
				<button className='py-2 px-6 h-fit w-fit bg-black text-white font-semibold rounded-full grad-mask grad-mask-black relative outline outline-primary-outline shadow-md'>
					Action
				</button>
				<button className='grad py-2 px-6 h-fit w-fit bg-[oklch(0.89_0.02_269.42)] text-[#2c5da9] font-semibold rounded-full relative grad-mask grad-mask-blue outline outline-[#639de6] shadow-md'>
					Action
				</button>

			</div>
			<div className='fixed right-0 -top-[600px]'>
				<img src='https://pbs.twimg.com/media/G2wfV4lXEAASp1e?format=jpg' width={1024} />
			</div>
		</div >
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
