import type { Meta, StoryObj } from '@storybook/react'
import { DialogBackdrop, DialogClose, DialogDescription, DialogPopup, DialogPortal, DialogRoot, DialogTrigger } from '../dialog';
import { Button } from '../button';
import { Flex } from '../flex';

const meta = {
	title: 'Example/Dialog',
	component: DialogRoot,


} satisfies Meta<typeof DialogRoot>;

export default meta;
type Story = StoryObj<typeof meta>;


export const DialogComponent: Story = {
	args: {
	},
	render: (args) => (
		<div className='flex flex-col gap-1 focus-visible:outline-none'>
			<DialogRoot>
				<DialogTrigger render={<Button>View notifications</Button>} />

				<DialogPortal>
					<DialogBackdrop />
					<DialogPopup title='Notifications' description='You are all caught up. Good job!'>
						<div className="flex items-center justify-end gap-4">
							<div className="mr-auto flex">
								<DialogRoot>
									<DialogTrigger render={<Button variant="secondary">View notifications</Button>} />
									<DialogPortal>
										<DialogPopup title='Customize notification'>
											<DialogDescription> Review your settings here.</DialogDescription>
											<div className="flex items-center justify-end gap-4">
											</div>
										</DialogPopup>
									</DialogPortal>
								</DialogRoot>
							</div>
						</div>
					</DialogPopup>
				</DialogPortal>
			</DialogRoot>
		</div>
	)
};

export const FullscreenDialogComponent: Story = {
	args: {
	},
	render: (args) => (
		<div className='flex flex-col gap-1 focus-visible:outline-none'>
			<DialogRoot>
				<DialogTrigger render={<Button>View notifications</Button>} />

				<DialogPortal>
					<DialogBackdrop />
					<DialogPopup fullscreen title='Notifications' description='You are all caught up. Good job!'>
						<div className="flex items-center justify-end gap-4">
							<div className="mr-auto flex">
								<DialogRoot>
									<DialogTrigger render={<Button variant="secondary">View notifications</Button>} />
									<DialogPortal>
										<DialogPopup title='Customize notification'>
											<DialogDescription> Review your settings here.</DialogDescription>
											<div className="flex items-center justify-end gap-4">
											</div>
										</DialogPopup>
									</DialogPortal>
								</DialogRoot>
							</div>
						</div>
					</DialogPopup>
				</DialogPortal>
			</DialogRoot>
		</div>
	)
};

export const AlertDialogComponent: Story = {
	args: {
	},
	render: (args) => (
		<div className='flex flex-col gap-1 focus-visible:outline-none'>
			<DialogRoot>
				<DialogTrigger render={<Button>View notifications</Button>} />

				<DialogPortal>
					<DialogBackdrop />
					<DialogPopup title='Are you sure?' description='You will remove the files'>
						<Flex className='p-2 flex-row-reverse'>
							<Button>Yeah</Button>
							<Button variant="secondary">Cancel</Button>
						</Flex>
					</DialogPopup>
				</DialogPortal>
			</DialogRoot>
		</div>
	)
};
