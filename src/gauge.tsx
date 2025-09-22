// https://github.com/suyalcinkaya/gauge
import { type CSSProperties, useEffect, useState, type SVGProps } from 'react';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface GaugeProps extends SVGProps<SVGSVGElement> {
	value: number;
	size?: Size | number | string;
	gapPercent?: number;
	strokeWidth?: number;
	variant?: 'ascending' | 'descending';
	showValue?: boolean;
	showAnimation?: boolean;
	primary?: string | { [key: number]: string };
	secondary?: string | { [key: number]: string };
}

/**
 * Renders a circular gauge using SVG. Allows configuration of colors, stroke, and animations.
 *
 * @param value - Current value of the gauge, expressed as a percentage.
 * @param size - Width and height of the gauge. Defaults to 'md'.
 * @param gapPercent - Percentage of the total circumference that represents a gap in the gauge. Defaults to 5%.
 * @param strokeWidth - Stroke width of the gauge. Defaults to 10px.
 * @param variant - Direction of the gauge's animation. Defaults to 'ascending'.
 * @param showValue - Option to display the numeric value inside the gauge. Defaults to false.
 * @param showAnimation - Option to animate the gauge's progress. Defaults to false.
 * @param primary - Primary color or set of colors for the gauge, with optional threshold values to determine color changes.
 * @param secondary - Secondary color or set of colors for the gauge, similar to `primary`.
 * @param props - Configuration and properties for the svg.
 */
export function Gauge({
	value,
	size = 'md',
	gapPercent = 5,
	strokeWidth = 10,
	variant = 'ascending',
	showValue = false,
	showAnimation = false,
	primary,
	secondary,
	...props
}: GaugeProps) {
	const isAscendingVariant = variant === 'ascending'

	const [animatedValue, setAnimatedValue] = useState(
		showAnimation ? (isAscendingVariant ? 0 : 100) : value // Start value for animation
	)

	useEffect(() => {
		if (showAnimation) setAnimatedValue(value)
	}, [showAnimation, value])

	const strokePercent = showAnimation ? animatedValue : value // %

	const circleSize = 100 // px
	const radius = circleSize / 2 - strokeWidth / 2
	const circumference = 2 * Math.PI * radius
	const isEqual = strokePercent > circleSize / 2 - 1 && strokePercent < circleSize / 2 + 1 // between 49 and 51
	const offsetFactor = isEqual ? 0.5 : 0
	const offsetFactorSecondary = 1 - offsetFactor

	// Stroke dasharrays
	const primaryStrokeDasharray = calculatePrimaryStrokeDasharray(strokePercent, offsetFactor, gapPercent, circumference)
	const secondaryStrokeDasharray = calculateSecondaryStrokeDasharray(
		strokePercent,
		offsetFactorSecondary,
		gapPercent,
		circumference
	)

	// Transforms
	const primaryTransform = calculatePrimaryTransform(strokePercent, offsetFactor, gapPercent, isAscendingVariant)
	const secondaryTransform = calculateSecondaryTransform(
		strokePercent,
		offsetFactorSecondary,
		gapPercent,
		isAscendingVariant
	)

	// Stroke colors
	const primaryStroke = calculatePrimaryStroke(primary!, strokePercent)
	const secondaryStroke = calculateSecondaryStroke(secondary!, strokePercent)

	// Opacities
	const primaryOpacity = calculatePrimaryOpacity(offsetFactor, strokePercent, gapPercent, offsetFactorSecondary)
	const secondaryOpacity = calculateSecondaryOpacity(offsetFactor, strokePercent, gapPercent, offsetFactorSecondary)

	const circleStyles: CSSProperties = {
		...(showAnimation
			? {
				transitionProperty: 'stroke-dasharray, transform, stroke, opacity',
				transitionDuration: '1000ms',
				transitionTimingFunction: `cubic-bezier(0.785, 0.135, 0.15, 0.86)`,
				transitionDelay: '0ms'
			}
			: {}),
		transformOrigin: '50% 50%'
	}

	const circleProps: SVGProps<SVGCircleElement> = {
		cx: circleSize / 2,
		cy: circleSize / 2,
		r: radius,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		strokeDashoffset: 0,
		strokeWidth,
		shapeRendering: 'geometricPrecision'
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${circleSize} ${circleSize}`}
			// @ts-ignore
			width={sizeConfig[size]?.size || size}
			// @ts-ignore
			height={sizeConfig[size]?.size || size}
			fill="none"
			shapeRendering="crispEdges"
			style={{ userSelect: 'none' }}
			{...props}
		>
			{/*secondary*/}
			<circle
				{...circleProps}
				style={{
					...circleStyles,
					strokeDasharray: secondaryStrokeDasharray,
					transform: secondaryTransform,
					stroke: secondaryStroke,
					opacity: secondaryOpacity
				}}
			/>

			{/* primary */}
			<circle
				{...circleProps}
				style={{
					...circleStyles,
					strokeDasharray: primaryStrokeDasharray,
					transform: primaryTransform,
					stroke: primaryStroke,
					opacity: primaryOpacity
				}}
			/>
			{showValue && (
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					dominantBaseline="middle"
					alignmentBaseline="central"
					fill="currentColor"
					fontSize={32}
				>
					{Math.round(value)}
				</text>
			)}
		</svg>
	)
}

export const calculatePrimaryStrokeDasharray = (
	strokePercent: number,
	offsetFactor: number,
	gapPercent: number,
	circumference: number
) => {
	const percentToPx = circumference / 100 // px

	if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
		// Calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
		const subtract = -strokePercent + 100

		return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`
	} else {
		const subtract = gapPercent * 2 * offsetFactor

		return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`
	}
}

export const calculateSecondaryStrokeDasharray = (
	strokePercent: number,
	offsetFactorSecondary: number,
	gapPercent: number,
	circumference: number
) => {
	const percentToPx = circumference / 100 // px

	if (offsetFactorSecondary < 1 && strokePercent < gapPercent * 2 * offsetFactorSecondary) {
		// Calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
		const subtract = strokePercent

		return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`
	} else {
		const subtract = gapPercent * 2 * offsetFactorSecondary

		return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`
	}
}

export const calculatePrimaryTransform = (
	strokePercent: number,
	offsetFactor: number,
	gapPercent: number,
	isAscendingVariant: boolean
) => {
	const percentToDegree = 360 / 100 // deg

	if (offsetFactor > 0 && strokePercent > 100 - gapPercent * 2 * offsetFactor) {
		// Calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
		const add = 0.5 * (-strokePercent + 100)
		const rotateDegValue = -90 + add * percentToDegree

		return isAscendingVariant ? `rotate(${rotateDegValue}deg)` : `rotate(${-1 * rotateDegValue}deg) scaleX(-1)`
	} else {
		const add = gapPercent * offsetFactor
		const rotateDegValue = -90 + add * percentToDegree

		return isAscendingVariant ? `rotate(${rotateDegValue}deg)` : `rotate(${-1 * rotateDegValue}deg) scaleX(-1)`
	}
}

export const calculateSecondaryTransform = (
	strokePercent: number,
	offsetFactorSecondary: number,
	gapPercent: number,
	isAscendingVariant: boolean
) => {
	const percentToDegree = 360 / 100 // deg

	if (offsetFactorSecondary < 1 && strokePercent < gapPercent * 2 * offsetFactorSecondary) {
		// Calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
		const subtract = 0.5 * strokePercent
		const rotateDegValue = -90 + subtract * percentToDegree

		return isAscendingVariant
			? `rotate(${rotateDegValue}deg) scaleY(-1)`
			: `rotate(${-1 * rotateDegValue}deg) scaleY(-1) scaleX(-1)`
	} else {
		const subtract = gapPercent * offsetFactorSecondary
		const rotateDegValue = 360 - 90 - subtract * percentToDegree

		return isAscendingVariant
			? `rotate(${rotateDegValue}deg) scaleY(-1)`
			: `rotate(${-1 * rotateDegValue}deg) scaleY(-1) scaleX(-1)`
	}
}

const checkCustomColorRange = (color: Record<number, string>, strokePercent: number) => {
	const colorKeys = Object.keys(color).sort((a, b) => Number(a) - Number(b))
	let stroke = ''

	for (let i = 0; i < colorKeys.length; i++) {
		const currentKey = Number(colorKeys[i])
		const nextKey = Number(colorKeys[i + 1])

		if (strokePercent >= currentKey && (strokePercent < nextKey || !nextKey)) {
			stroke = color[currentKey]
			break
		}
	}

	return stroke
}

export const calculatePrimaryStroke = (primary: string | Record<number, string>, strokePercent: number) => {
	if (!primary) {
		// Default red --> amber --> blue --> green
		return strokePercent <= 25
			? 'hsl(358 75% 59%)'
			: strokePercent <= 50
				? 'hsl(39 100% 57%)'
				: strokePercent <= 75
					? 'hsl(212 100% 48%)'
					: 'hsl(131 41% 46%)'
	} else if (typeof primary === 'string') {
		// Specific default color or custom color
		return primary
	} else if (typeof primary === 'object') {
		// Custom color range
		return checkCustomColorRange(primary, strokePercent)
	}
}

export const calculateSecondaryStroke = (secondary: string | Record<number, string>, strokePercent: number) => {
	if (!secondary) {
		// Default gray
		return 'hsl(0 0% 92%)'
	} else if (typeof secondary === 'string') {
		// Specific default color or custom color
		return secondary
	} else if (typeof secondary === 'object') {
		// Custom color range
		return checkCustomColorRange(secondary, 100 - strokePercent)
	}
}

export const calculatePrimaryOpacity = (
	offsetFactor: number,
	strokePercent: number,
	gapPercent: number,
	offsetFactorSecondary: number
) => {
	if (
		offsetFactor > 0 &&
		strokePercent < gapPercent * 2 * offsetFactor &&
		strokePercent < gapPercent * 2 * offsetFactorSecondary
	) {
		return 0
	} else return 1
}

export const calculateSecondaryOpacity = (
	offsetFactor: number,
	strokePercent: number,
	gapPercent: number,
	offsetFactorSecondary: number
) => {
	if (
		(offsetFactor === 0 && strokePercent > 100 - gapPercent * 2) ||
		(offsetFactor > 0 &&
			strokePercent > 100 - gapPercent * 2 * offsetFactor &&
			strokePercent > 100 - gapPercent * 2 * offsetFactorSecondary)
	) {
		return 0
	} else return 1
}

export const sizeConfig: Record<Size, { size: number }> = {
	xs: {
		size: 32
	},
	sm: {
		size: 48
	},
	md: {
		size: 72
	},
	lg: {
		size: 96
	},
	xl: {
		size: 120
	},
	'2xl': {
		size: 144
	}
}
