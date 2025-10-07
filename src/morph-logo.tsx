import { cn } from "./utils";
import { useMorphLogo } from "./morph-logo-context";

export type FrameState = 'off' | 'low' | 'high'

export type Frame = FrameState[]

export const pdohubDownPattern: Frame[][] = [
	[
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'off', 'high', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'low', 'low', 'low'],
		['low', 'high', 'low', 'low', 'low'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'off', 'high', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'low', 'low', 'low'],
	],
	[
		['low', 'high', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'high', 'high', 'low', 'low'],
		['low', 'high', 'off', 'high', 'low'],
		['low', 'high', 'high', 'high', 'low'],
	],
	[
		['low', 'high', 'low', 'low', 'low'],
		['low', 'high', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'off', 'high', 'low'],
	],
	[
		['low', 'high', 'off', 'high', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'low', 'low', 'low'],
		['low', 'high', 'low', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
	],
]

export const hourglassPattern: Frame[][] = [
	[
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'low', 'high', 'low'],
		['low', 'high', 'high', 'high', 'low'],
	],
	[
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'low', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'high', 'high', 'low'],
	],
	[
		['low', 'high', 'high', 'low', 'low'],
		['high', 'low', 'high', 'low', 'low'],
		['high', 'high', 'high', 'high', 'high'],
		['low', 'low', 'high', 'high', 'high'],
		['low', 'low', 'high', 'high', 'high'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['high', 'high', 'low', 'high', 'high'],
		['high', 'low', 'high', 'high', 'high'],
		['high', 'high', 'low', 'high', 'high'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['low', 'low', 'high', 'high', 'low'],
		['low', 'low', 'high', 'high', 'high'],
		['high', 'high', 'high', 'high', 'high'],
		['high', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'low', 'low'],
	],
	[
		['low', 'high', 'high', 'high', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'low', 'high', 'low'],
		['low', 'high', 'high', 'high', 'low'],
	],
]

export const pingPongPattern: Frame[][] = [
	[
		['low', 'low', 'low', 'low', 'low'],
		['high', 'low', 'low', 'low', 'high'],
		['high', 'high', 'low', 'low', 'high'],
		['high', 'low', 'low', 'low', 'high'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['high', 'low', 'low', 'low', 'low'],
		['high', 'low', 'low', 'low', 'high'],
		['high', 'low', 'high', 'low', 'high'],
		['low', 'low', 'low', 'low', 'high'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['high', 'low', 'low', 'low', 'low'],
		['high', 'low', 'low', 'low', 'high'],
		['high', 'low', 'low', 'low', 'high'],
		['low', 'low', 'low', 'high', 'high'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['high', 'low', 'low', 'low', 'low'],
		['high', 'low', 'low', 'low', 'high'],
		['high', 'low', 'high', 'low', 'high'],
		['low', 'low', 'low', 'low', 'high'],
	],
	[
		['high', 'low', 'low', 'low', 'low'],
		['high', 'low', 'low', 'low', 'low'],
		['high', 'high', 'low', 'low', 'high'],
		['low', 'low', 'low', 'low', 'high'],
		['low', 'low', 'low', 'low', 'high'],
	],
	[
		['high', 'low', 'low', 'low', 'low'],
		['high', 'low', 'high', 'low', 'high'],
		['high', 'low', 'low', 'low', 'high'],
		['low', 'low', 'low', 'low', 'high'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['high', 'low', 'low', 'high', 'high'],
		['high', 'low', 'low', 'low', 'high'],
		['high', 'low', 'low', 'low', 'high'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
	],
]

export const downloadPattern: Frame[][] = [
	[
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
	],
]

export const uploadPattern: Frame[][] = [
	[
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
	],
	[
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
	],
	[
		['low', 'low', 'high', 'low', 'low'],
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['low', 'high', 'high', 'high', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
	],
	[
		['low', 'low', 'high', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
		['low', 'low', 'low', 'low', 'low'],
	],
]


export function MorphLogo() {
	const { currentPattern } = useMorphLogo();
	const frameData = currentPattern[0];
	const cols = 5;

	return (
		<div className="flex flex-col gap-4 w-full items-center">
			<div
				className="grid gap-1 w-fit"
				style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
			>
				{frameData?.map((row, rowIndex) =>
					row.map((state, colIndex) => (
						<div
							key={`${rowIndex}-${colIndex}-p`}
							className={cn('w-1 h-1 rounded-full transition-all duration-300', {
								'bg-transparent': state === 'off',
								'bg-alert-info': state === 'low',
								'bg-alert-foreground-info': state === 'high',
							})}
						/>
					)),
				)}
			</div>
		</div>
	);
}
