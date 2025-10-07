import { Meta, StoryObj } from "storybook-react-rsbuild";
import { Gauge } from "../gauge";

const meta = {
	title: 'Example/Gauge',
	component: Gauge,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
	},
	argTypes: {
		value: {
			control: "range",
		}
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
} satisfies Meta<typeof Gauge>;

export default meta;
type Story = StoryObj<typeof meta>;


export const GaugeComponent: Story = {
	args: {
		value: 20
	},
	render: (args) => (
		<div className='flex gap-6 flex-col w-screen h-screen justify-center items-center'>
			<Gauge {...args} />
		</div>
	)
};

