import { NativeSelect } from "../native-select";
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Example/NativeSelect',
	component: NativeSelect,


} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;


export const NativeSelectComponent: Story = {
	args: {
		id: "test",
	},
	render: (args) => (
		<div className='flex flex-col gap-1 focus-visible:outline-none'>
			<label htmlFor='test' className='flex flex-col gap-1 font-semibold focus-visible:outline-none'>
				Select label
			</label>
			<NativeSelect {...args} >
				<option>Option 1</option>
				<option>Option 2</option>
				<option>Option 3</option>
			</NativeSelect>
		</div>
	)
};
