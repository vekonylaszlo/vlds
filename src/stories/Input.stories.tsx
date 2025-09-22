import { Input } from "../input";
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Example/Input',
	component: Input,


} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const InputComponent: Story = {
	args: {
		placeholder: "Input placeholder",
		id: "test"
	},
	render: (args) => (
		<div className='flex flex-col gap-1 focus-visible:outline-none'>
			<label htmlFor='test' className='flex flex-col gap-1 font-semibold focus-visible:outline-none'>
				Input label
			</label>
			<Input {...args} />
		</div>
	)
};
