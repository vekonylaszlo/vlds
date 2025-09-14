import { cn } from "./utils";
import { Text } from './text'
import { Flex } from "./flex";

export interface AlertProps extends React.ComponentProps<'div'> {
	children: string;
	description?: string;
	variant?: "info" | "warning" | "danger" | "success";
}

function getIcon(variant: "info" | "warning" | "danger" | "success") {
	switch (variant) {
		case "info":
			return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>
		case "warning":
			return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>;
		case "danger":
			return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10a10 10 0 1 1 0 -20m3.707 12.293a1 1 0 0 0 -1.262 -.125l-.945 .63l-.945 -.63l-.116 -.066a1 1 0 0 0 -.994 .066l-.945 .63l-.945 -.63a1 1 0 0 0 -1.262 .125l-1 1a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l.42 -.42l.818 .545l.116 .066a1 1 0 0 0 .994 -.066l.945 -.63l.945 .63l.116 .066a1 1 0 0 0 .994 -.066l.817 -.545l.42 .42a1 1 0 0 0 1.415 -1.414zm-6.5 -6.5a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l1.5 -1.5a1 1 0 0 0 0 -1.414zm7 0a1 1 0 0 0 -1.414 0l-1.5 1.5a1 1 0 0 0 0 1.414l1.5 1.5a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-.792 -.793l.792 -.793a1 1 0 0 0 0 -1.414" /></svg>
		case "success":
			return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>;
	}
}

export function Alert({ children, description, variant = "info", className, ...props }: AlertProps) {
	return (
		<Flex direction="column" {...props} className={cn("w-fit h-fit max-w-md py-2 px-4 rounded-lg gap-0", {
			"bg-alert-success text-alert-foreground-success shadow-alert-success ": variant === "success",
			"bg-alert-warning text-alert-foreground-warning shadow-alert-warning": variant === "warning",
			"bg-alert-danger text-alert-foreground-danger shadow-alert-danger ": variant === "danger",
			"bg-alert-info text-alert-foreground-info shadow-alert-info": variant === "info",


			"rounded-full": !description
		}, className)}>
			<Flex justify="center" className="w-fit h-fit">
				{getIcon(variant)}
				<Text weight="semibold">{children}</Text>
			</Flex>
			{description && <Text className="text-pretty pl-10" size="sm">{description}</Text>}
		</Flex>
	)
}
