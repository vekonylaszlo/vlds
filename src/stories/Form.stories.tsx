import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '../form';
import { Field, FieldControl, FieldError, FieldLabel } from '../field'
import { Button } from '../button';

const meta = {
	title: 'Example/Form',
	component: Form,


} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;


export const FormStory: Story = {
	args: {
	},
	render: (args) => (
		<div className='flex flex-col gap-1 focus-visible:outline-none'>
			<Form onSubmit={(event) => {
				event.preventDefault();
				const formData = new FormData(event.currentTarget);
				const value = formData.get('url') as string;

				console.info("yo", value)
				// setErrors(serverErrors);
			}}>
				<Field name='url' className="flex flex-col gap-1 items-start">
					<FieldLabel>Homepage</FieldLabel>
					<FieldControl type='url' required
						defaultValue="https://example.com"
						placeholder="https://example.com"
						pattern="https?://.*" />
					<FieldError />
				</Field>
				<Button type="submit">Submit</Button>
			</Form>
		</div>
	)
};

