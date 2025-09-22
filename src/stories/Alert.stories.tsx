import { Meta, StoryObj } from "storybook-react-rsbuild";
import { Alert } from "../alert";

const meta = {
	title: 'Example/Alert',
	component: Alert,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;



export const AlertComponent: Story = {
	args: {
		children: "Info variant alert state",
	},
	render: () => (
		<div className='flex gap-6 flex-col w-screen h-screen justify-center items-center'>
			<Alert description="Test description" >Info variant alert state</Alert>
			<Alert variant="warning" >Warning variant alert state</Alert>
			<Alert variant="danger" >Danger variant alert state</Alert>
			<Alert variant="success">Success variant alert state</Alert>
		</div>
	)
};
