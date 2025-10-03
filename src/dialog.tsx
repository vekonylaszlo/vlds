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

export function DialogPopup({ title, description, className, fullscreen = false, ...props }: React.ComponentProps<typeof DialogPrimitive.Popup> & {
	title: string;
	description?: string;
	fullscreen?: boolean;
}) {
	return (
		<DialogPrimitive.Popup className={cn("fixed bg-popover/95 backdrop-blur-2xl text-popover-foreground p-2 transition-all duration-300 data-[ending-style]:-translate-y-20 data-[starting-style]:-translate-y-20 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0", {
			"w-full h-full translate-x-0 translate-y-0 left-0 top-0 mt-0 max-w-full": fullscreen,
			"top-[calc(50%+1.25rem*var(--nested-dialogs))] left-1/2 sm:-mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 border border-border rounded-md -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] min-w-full min-h-full sm:min-w-[460px] sm:min-h-fit shadow-lg": !fullscreen
		}, className)} {...props} >
			<div className="flex flex-col w-full h-full items-center">
				<div className={cn("flex flex-col gap-4 w-full h-full items-center", {
					"w-2/3": fullscreen
				})}>
					<div className="flex flex-col w-full text-left h-full">
						<DialogTitle className="mb-6 pl-2">{title}</DialogTitle>
						{description && <DialogDescription>{description}</DialogDescription>}
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
		<DialogPrimitive.Description className={cn("mb-2 ml-2.5 text-sm text-muted-foreground", className)} {...props} />
	)
}

export type DialogDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>;

export function DialogClose({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
	return (
		<DialogPrimitive.Close className={cn(buttonVariants({ size: "sm", variant: "secondary", className: "rounded-full" }), className)} {...props} >
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
		</DialogPrimitive.Close>
	)
}
export type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
