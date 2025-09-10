import { cn } from './utils';
import { Dialog as DialogPrimitive } from '@base-ui-components/react/dialog';
import { buttonVariants } from './button';

export function DialogRoot({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
	return (
		<DialogPrimitive.Root {...props} />
	)
}

export type DialogRootProps = React.ComponentProps<typeof DialogPrimitive.Root>;

export function DialogTrigger({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
	return (
		<DialogPrimitive.Trigger className={cn("", className)} {...props} />
	)
}

export type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;

export function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
	return (
		<DialogPrimitive.Portal {...props} />
	)
}
export type DialogPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;

export function DialogBackdrop({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Backdrop>) {
	return (
		<DialogPrimitive.Backdrop className={cn("fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70", className)} {...props} />
	)
}

export type DialogBackdropProps = React.ComponentProps<typeof DialogPrimitive.Backdrop>;

export function DialogPopup({ title, description, className, ...props }: React.ComponentProps<typeof DialogPrimitive.Popup> & {
	title: string;
	description?: string
}) {
	return (
		<DialogPrimitive.Popup className={cn("fixed top-0 left-0 w-full h-full bg-popover/90 backdrop-blur-2xl text-popover-foreground p-6 transition-all duration-300 data-[ending-style]:-translate-y-20 data-[starting-style]:-translate-y-20 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0", className)} {...props} >
			<div className="flex flex-col w-full h-full items-center">
				<div className="flex flex-col gap-4 w-2/3 h-full items-center">
					<div className="flex flex-col w-full text-left h-full">
						<DialogTitle className="mb-6 pl-2">{title}</DialogTitle>
						{description && <DialogDescription>yo description</DialogDescription>}
						<div className='h-full w-full flex flex-col overflow-y-auto p-2'>
							{props.children}
						</div>

					</div>
				</div>
			</div>


			<DialogClose className="fixed top-2 right-2" >
				X
			</DialogClose>
		</DialogPrimitive.Popup>
	)
}

export type DialogPopupProps = React.ComponentProps<typeof DialogPrimitive.Popup> & {
	title: string;
	description?: string
};

export function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
	return (
		<DialogPrimitive.Title className={cn("-mt-1.5 text-lg font-semibold", className)} {...props} />
	)
}

export type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;

export function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
	return (
		<DialogPrimitive.Description className={cn("mb-6 text-sm text-muted-foreground", className)} {...props} />
	)
}

export type DialogDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>;

export function DialogClose({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
	return (
		<DialogPrimitive.Close className={cn(buttonVariants({ size: "sm", variant: "ghost" }), className)} {...props} >
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
		</DialogPrimitive.Close>
	)
}
export type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
