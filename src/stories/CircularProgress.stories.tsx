import { Meta, StoryObj } from "storybook-react-rsbuild";
import { CircularProgress } from "../circular-progress";

const meta = {
	title: "Example/CircularProgress",
	component: CircularProgress,
	parameters: {
	},
	argTypes: {
		value: {
			control: "range"
		},
		size: {
			control: {
				type: "range",
				min: 14,
				max: 22,
			},
		}
	},
	tags: ['autodocs']
} satisfies Meta<typeof CircularProgress>

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressComponent: Story = {
	args: {
		value: 20,
	},
}
