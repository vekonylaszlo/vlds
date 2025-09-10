import { cn } from './utils';
import { Toast as ToastPrimitive } from '@base-ui-components/react/toast';
import { CheckCircleIcon, InfoIcon, SirenIcon, XIcon } from '@phosphor-icons/react';
import { buttonVariants } from './button';
import React from 'react';
import { WarningCircleIcon } from '@phosphor-icons/react';

export function ToastProvider({ ...props }: React.ComponentProps<typeof ToastPrimitive.Provider>) {
	return (
		<ToastPrimitive.Provider {...props} />
	)
}

export type ToastProviderProps = React.ComponentProps<typeof ToastPrimitive.Provider>;

export function ToastPortal({ ...props }: React.ComponentProps<typeof ToastPrimitive.Portal>) {
	return <ToastPrimitive.Portal {...props} />
}

export type ToastPortalProps = React.ComponentProps<typeof ToastPrimitive.Portal>;


export function ToastViewPort({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
	return <ToastPrimitive.Viewport className={cn("fixed z-50 top-auto right-[1rem] bottom-[1rem] mx-auto flex w-[250px] sm:right-[2rem] sm:bottom-[2rem] sm:w-[360px]", className)} {...props} />
}

export type ToastViewPortProps = React.ComponentProps<typeof ToastPrimitive.Viewport>;

export function ToastRoot({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Root>) {
	return <ToastPrimitive.Root style={{
		['--gap' as string]: '1rem',
		['--offset-y' as string]:
			'calc(var(--toast-offset-y) * -1 + (var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y))',
	}} className={cn("absolute right-4 bottom-4 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-full max-w-md [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(min(var(--toast-index),10)*-15px)))_scale(calc(max(0,1-(var(--toast-index)*0.1))))] rounded-lg bg-toast-background data-[type=warning]:bg-toast-background-warning shadow-toast data-[type=warning]:shadow-toast-warning data-[type=success]:shadow-toast-success data-[type=success]:bg-toast-background-success  data-[type=danger]:shadow-toast-danger data-[type=danger]:bg-toast-background-danger bg-clip-padding p-4 transition-all [transition-property:opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] select-none after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-[ending-style]:opacity-0 data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y)))] data-[limited]:opacity-0 data-[starting-style]:[transform:translateY(150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]", className)} {...props} />
}

export type ToastRootProps = React.ComponentProps<typeof ToastPrimitive.Root>;

export function ToastTitle({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Title>) {
	return <ToastPrimitive.Title className={cn("text-[0.975rem] text-foreground leading-5 font-medium", className)} {...props} />
}

export type ToastTitleProps = React.ComponentProps<typeof ToastPrimitive.Title>;

export function ToastDescription({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Description>) {
	return <ToastPrimitive.Description className={cn("text-[0.925rem] text-foreground leading-5", className)} {...props} />
}

export type ToastDescriptionProps = React.ComponentProps<typeof ToastPrimitive.Description>;

export function ToastClose({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Close>) {
	return <ToastPrimitive.Close className={cn(buttonVariants({ size: "sm", variant: "ghost", className: "absolute top-2 right-2 size-5" }), className)} {...props} />
}

export type ToastCloseProps = React.ComponentProps<typeof ToastPrimitive.Close>;


export function ToastList() {
	const { toasts } = ToastPrimitive.useToastManager();
	return toasts.map((toast) => (
		<ToastRoot key={toast.id} toast={toast}>
			<div className={cn('absolute left-0 top-0 rounded-l-md h-full w-2.5', {
				"bg-toast-hl-background-warning": toast.type === "warning",
				"bg-toast-hl-background-danger": toast.type === "danger",
				"bg-toast-hl-background-success": toast.type === "success",
			})} />
			<div className={cn('absolute left-2 blur-[26px] top-0 rounded-l-md h-full w-2.5', {
				"bg-toast-hl-background-warning": toast.type === "warning",
				"bg-toast-hl-background-danger": toast.type === "danger",
				"bg-toast-hl-background-success": toast.type === "success",
			})} />
			<div className='absolute top-4 left-4'>
				{toast.type === "warning" && <WarningCircleIcon size={22} />}
				{toast.type === "danger" && <SirenIcon size={22} />}
				{toast.type === "success" && <CheckCircleIcon size={22} />}
				{toast.type === "" && <InfoIcon size={22} />}
			</div>
			<div className='pl-8'>

				<ToastTitle />
				<ToastDescription />
				<ToastClose>
					<XIcon />
				</ToastClose>
			</div>
		</ToastRoot >
	))
}


