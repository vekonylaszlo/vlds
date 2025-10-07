import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import {
	pdohubDownPattern,
	hourglassPattern,
	pingPongPattern,
	downloadPattern,
	uploadPattern,
	Frame,
} from './morph-logo';

export type MorphAnimationName = 'idle' | 'upload' | 'download' | 'busy' | 'loading';

export interface MorphLogoContextValue {
	frame: number;
	currentPattern: Frame[][];
	setAnimation: (name: MorphAnimationName, loop?: boolean) => void;
}

export const MorphLogoContext = createContext<MorphLogoContextValue | null>(null);

export function MorphLogoProvider({ children }: { children: ReactNode }) {
	const patternsMap: Record<MorphAnimationName, Frame[][]> = {
		idle: pdohubDownPattern,
		upload: uploadPattern,
		download: downloadPattern,
		busy: pingPongPattern,
		loading: hourglassPattern,
	};

	const [frame, setFrame] = useState(0);
	const [currentPattern, setCurrentPattern] = useState<Frame[][]>(patternsMap.idle);
	const [isAnimating, setIsAnimating] = useState(false);
	const [shouldLoop, setShouldLoop] = useState(false);

	useEffect(() => {
		if (!isAnimating) return;

		let index = 1;
		const interval = setInterval(() => {
			if (!shouldLoop && index === currentPattern.length) {
				setIsAnimating(false);
			}
			setFrame(prev => (prev + 1) % currentPattern.length);
			index++;
		}, 200);

		return () => clearInterval(interval);
	}, [isAnimating, currentPattern, shouldLoop]);

	const setAnimation = useCallback(
		(name: MorphAnimationName, loop = false) => {
			setCurrentPattern(patternsMap[name]);
			setShouldLoop(loop);
			setIsAnimating(true);

			if (name === 'idle' && !loop) {
				const delay = Math.random() * (5 - 1) * 60_000 + 60_000;
				setTimeout(() => {
					setCurrentPattern(patternsMap.idle);
					setShouldLoop(false);
					setIsAnimating(true);
				}, delay);
			}
		},
		[patternsMap],
	);

	return (
		<MorphLogoContext.Provider value={{ frame, currentPattern: currentPattern[frame] ? [currentPattern[frame]] : [[]], setAnimation }}>
			{children}
		</MorphLogoContext.Provider>
	);
}

export function useMorphLogo() {
	const ctx = useContext(MorphLogoContext);
	if (!ctx) throw new Error('useMorphLogo must be used inside MorphLogoProvider');
	return ctx;
}
