import { Meta, StoryObj } from "storybook-react-rsbuild";
import { Alert, AlertDescription, AlertTitle } from "../alert";

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
		<div className='flex gap-6 flex-col w-screen h-screen justify-center items-center p-2'>
			<Alert>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
				<AlertTitle>Info variant alert state</AlertTitle>
				<AlertDescription>Test description</AlertDescription>
			</Alert>
			<Alert variant="warning">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
				<AlertTitle>Warning variant alert state</AlertTitle>
			</Alert>
			<Alert variant="danger">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
				<AlertTitle>Danger variant alert state</AlertTitle>
			</Alert>
			<Alert variant="success">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
				<AlertTitle>Success variant alert state</AlertTitle>
			</Alert>
		</div>
	)
};
