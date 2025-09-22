import { Meta, StoryObj } from "storybook-react-rsbuild";
import { Switch } from "../switch";

const meta = {
	title: 'Example/Switch',
	component: Switch,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SwitchComponent: Story = {
	render: () => (
		<div className='flex gap-6 flex-col w-screen h-screen justify-center items-center'>
			<label htmlFor='test' className='flex items-center gap-2 font-semibold focus-visible:outline-none'>
				<Switch id="test" />
				Switch label
			</label>
		</div>
	)
};
