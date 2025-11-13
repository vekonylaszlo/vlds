import { Textarea } from "../textarea";
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Example/Textarea',
	component: Textarea,


} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;


export const TextareaComponent: Story = {
	args: {
		placeholder: "Textarea placeholder",
		id: "test"
	},
	render: (args) => (
		<div className='flex flex-col gap-1'>
			<label htmlFor='test' className='flex flex-col gap-1 font-semibold focus-visible:outline-none'>
				Input label
			</label>
			<Textarea {...args} />
		</div>
	)
};
