import { useEffect, useState } from "react";

export type CircularProgressType = { size?: number, value: number }
export function CircularProgress({ size = 14, value }: CircularProgressType) {
	const [displayPercent, setDisplayPercent] = useState(0);

	useEffect(() => {
		setDisplayPercent(value);
	}, [value]);

	const isComplete = displayPercent >= 100;
	const radius = 2;
	const circumference = 2 * Math.PI * radius;


	const offset = circumference - (displayPercent / 100) * circumference;

	const progressColor = () => {
		if (displayPercent >= 50 && displayPercent <= 95) {
			return "var(--toast-background)"
		}
		if (displayPercent > 95) {
			return "var(--toast-background-success)"
		}
		if (displayPercent >= 0 && displayPercent < 50) {
			return "var(--toast-background-warning)"
		}
	}
	const completeRadius = 3;
	const completeCircumference = 2 * Math.PI * completeRadius;

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 14 14"
			fill="none"
			style={{ transition: 'all 0.3s ease' }}
		>
			{/* Outer dashed circle */}
			<circle
				cx="7"
				cy="7"
				r="6"
				fill="none"
				stroke={progressColor()}
				strokeWidth="1.5"
				strokeDasharray="3.14 0"
				strokeDashoffset="-0.7"
				style={{ transition: 'stroke 0.3s ease' }}
			/>

			{/* Inner progress circle */}
			<circle
				className="progress"
				cx="7"
				cy="7"
				r={isComplete ? completeRadius : radius}
				fill="none"
				stroke={progressColor()}
				strokeWidth={isComplete ? 6 : 4}
				strokeDasharray={`${isComplete ? completeCircumference : circumference} ${isComplete ? completeCircumference * 2 : circumference * 2}`}
				transform="rotate(-90 7 7)"
				strokeDashoffset={isComplete ? 0 : offset}
				style={{ transition: 'all 0.3s ease' }}
			/>

			{isComplete && (
				<path
					className="icon"
					stroke="none"
					fill="white"
					d="M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z"
					style={{
						opacity: displayPercent >= 100 ? 1 : 0,
						transition: 'opacity 0.3s ease 0.15s'
					}}
				/>
			)}
		</svg>
	);
}
