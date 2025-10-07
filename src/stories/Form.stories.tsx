import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '../form';
import { Field, FieldControl, FieldError, FieldLabel } from '../field'
import { useState } from 'react';
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
			<FormExample />
		</div>
	)
};

function FormExample() {
	const [errors, setErrors] = useState({})
	const [loading, setLoading] = useState(false);

	return (
		<Form errors={errors} onClearErrors={setErrors} onSubmit={async (event) => {
			event.preventDefault();
			const formData = new FormData(event.currentTarget);
			const value = formData.get('url') as string;

			setLoading(true);
			const response = await submitForm(value);
			const serverErrors = {
				url: response.error,
			};

			setErrors(serverErrors);
			setLoading(false);
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
	)
}

async function submitForm(value: string) {
	// Mimic a server response
	await new Promise((resolve) => {
		setTimeout(resolve, 1000);
	});

	try {
		const url = new URL(value);

		if (url.hostname.endsWith('example.com')) {
			return { error: 'The example domain is not allowed' };
		}
	} catch {
		return { error: 'This is not a valid URL' };
	}

	return { success: true };
}
