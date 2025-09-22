import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { fn } from 'storybook/test';

import { Button } from '../button';
import { ConfettiIcon } from '@phosphor-icons/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example/Button',
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		pseudo: { hover: ['#hovered', "#active"], active: '#active', 'focus-visible': '#focused' }
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		variant: { control: 'select', options: ['default', 'secondary', 'outline', 'ghost', 'destructive'] },
		size: { control: 'select', options: ['sm', 'default', 'lg', 'icon'] },
		radius: { control: 'select', options: ['default', 'full'] }
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: "default"
	},
	render: (args) => (
		<div className='flex gap-6  w-screen h-screen justify-center items-center'>
			<Button {...args}>Default</Button>
			<Button {...args} id="hovered">Hovered</Button>
			<Button {...args} id="active">Active</Button>
		</div>
	)
};

export const Secondary: Story = {
	args: {
		variant: "secondary"
	},
	render: (args) => (
		<div className='flex gap-6  w-screen h-screen justify-center items-center'>
			<Button {...args}>Default</Button>
			<Button {...args} id="hovered">Hovered</Button>
			<Button {...args} id="active">Active</Button>
		</div>
	)
};

export const Ghost: Story = {
	args: {
		variant: "ghost"
	},
	render: (args) => (
		<div className='flex gap-6  w-screen h-screen justify-center items-center'>
			<Button {...args}>Default</Button>
			<Button {...args} id="hovered">Hovered</Button>
			<Button {...args} id="active">Active</Button>
		</div>
	)
};

export const Outline: Story = {
	args: {
		variant: "outline"
	},
	render: (args) => (
		<div className='flex gap-6  w-screen h-screen justify-center items-center'>
			<Button {...args}>Default</Button>
			<Button {...args} id="hovered">Hovered</Button>
			<Button {...args} id="active">Active</Button>
		</div>
	)
};

export const Destructive: Story = {
	args: {
		variant: "destructive"
	},
	render: (args) => (
		<div className='flex gap-6  w-screen h-screen justify-center items-center'>
			<Button {...args}>Default</Button>
			<Button {...args} id="hovered">Hovered</Button>
			<Button {...args} id="active">Active</Button>
		</div>
	)
};

export const Large: Story = {
	args: {
		size: 'lg',
		children: 'Button',
	},
};

export const Small: Story = {
	args: {
		size: 'sm',
		children: 'Button',
	},
};

export const Icon: Story = {
	args: {
		size: 'icon',
		children: <ConfettiIcon />
	},
}
