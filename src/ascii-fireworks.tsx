import { useState, useEffect, type ReactNode, createContext, useContext } from 'react';

interface Props {
	children: ReactNode;
}
interface Rocket {
	id: number;
	x: number;
	y: number;
	targetY: number;
	speed: number;
}

interface Particle {
	id: number;
	x: number;
	y: number;
	vx: number;
	vy: number;
	char: string;
	color: string;
	life: number;
	maxLife: number;
	size: number;
}

interface Firework {
	id: number;
	x: number;
	y: number;
	particles: Particle[];
	exploded: boolean;
}

type FireworksContextType = {
	startFireworks: () => void;
	stopFireworks: () => void;
	clearAll: () => void;
	isActive: boolean;
}

const FireworksContext = createContext<FireworksContextType | undefined>(undefined);

export function useFireworks() {
	const ctx = useContext(FireworksContext);
	if (!ctx) throw new Error("useFireworks must be used inside ASCIIFireworks")
	return ctx;
}

const ASCIIFireworks = ({ children }: Props) => {
	const [rockets, setRockets] = useState<Rocket[]>([]);
	const [fireworks, setFireworks] = useState<Firework[]>([]);
	const [isActive, setIsActive] = useState(false);

	const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8', '#f7dc6f', '#bb8fce', '#85c1e9', '#ff9ff3', '#54a0ff'];
	const explosionChars = ['*', '⋆'];

	useEffect(() => {
		let animationFrame: number;
		let rocketInterval: number;

		if (isActive) {
			// Add new rockets periodically
			rocketInterval = setInterval(() => {
				if (Math.random() > 0.7) {
					const newRocket: Rocket = {
						id: Math.random(),
						x: Math.random() * 80 + 10,
						y: 95,
						targetY: Math.random() * 30 + 20,
						speed: Math.random() * 2 + 2,
					};
					setRockets(prev => [...prev, newRocket]);
				}
			}, 200);

			// Animation loop
			const animate = () => {
				// Update rockets
				setRockets(prevRockets => {
					const newFireworks: Firework[] = [];
					const remainingRockets = prevRockets.filter(rocket => {
						rocket.y -= rocket.speed;
						if (rocket.y <= rocket.targetY) {
							// Create explosion
							const particleCount = Math.random() * 30 + 40;
							const baseColor = colors[Math.floor(Math.random() * colors.length)];
							const particles: Particle[] = [];

							for (let i = 0; i < particleCount; i++) {
								const angle = (Math.PI * 3 * i) / particleCount + (Math.random() - 0.5) * 0.5;
								const speed = Math.random() * 8 + 3;
								const vx = Math.cos(angle) * speed;
								const vy = Math.sin(angle) * speed;
								const life = Math.random() * 60 + 40;

								particles.push({
									id: Math.random(),
									x: rocket.x,
									y: rocket.y,
									vx,
									vy,
									char: explosionChars[Math.floor(Math.random() * explosionChars.length)],
									color: Math.random() > 0.7 ? colors[Math.floor(Math.random() * colors.length)] : baseColor,
									life,
									maxLife: life,
									size: Math.random() * 0.8 + 0.6,
								});
							}

							newFireworks.push({
								id: Math.random(),
								x: rocket.x,
								y: rocket.y,
								particles,
								exploded: true,
							});
							return false;
						}
						return true;
					});

					if (newFireworks.length > 0) {
						setFireworks(prevFireworks => [...prevFireworks, ...newFireworks]);
					}

					return remainingRockets;
				});

				// Update fireworks
				setFireworks(prevFireworks =>
					prevFireworks
						.map(firework => ({
							...firework,
							particles: firework.particles
								.map(particle => ({
									...particle,
									x: particle.x + particle.vx * 0.5,
									y: particle.y + particle.vy * 0.5,
									vy: particle.vy + 0.1, // gravity
									vx: particle.vx * 0.99, // air resistance
									life: particle.life - 1,
								}))
								.filter(particle => particle.life > 0 && particle.y < 2000),
						}))
						.filter(firework => firework.particles.length > 0)
				);

				animationFrame = requestAnimationFrame(animate);
			};

			animate();
		}

		return () => {
			clearInterval(rocketInterval);
			cancelAnimationFrame(animationFrame);
		};
	}, [isActive]);

	const startFireworks = () => {
		setIsActive(true);
		setTimeout(() => {
			clearAll()
		}, 5000);
	};

	const stopFireworks = () => {
		setIsActive(false);
	};

	const clearAll = () => {
		setIsActive(false);
		setRockets([]);
		setFireworks([]);
	};

	return (
		<FireworksContext.Provider value={{ startFireworks, stopFireworks, clearAll, isActive }}>
			<div className="relative w-full h-screen overflow-hidden flex justify-center">
				<div className="relative w-full left-1/2 top-[33%] h-full z-50">
					{/* Rockets */}
					<div className="absolute inset-0 pointer-events-none z-50">
						{rockets.map(rocket => (
							<div
								key={rocket.id}
								className="absolute font-mono font-bold text-yellow-300"
								style={{
									left: `${rocket.x}px`,
									top: `${rocket.y}px`,
									fontSize: '16px',
									zIndex: 10,
								}}
							>
								|
							</div>
						))}
					</div>

					{/* Firework particles */}
					<div className="absolute inset-0 pointer-events-none">
						{fireworks.map(firework =>
							firework.particles.map(particle => {
								const opacity = particle.life / particle.maxLife;
								return (
									<div
										key={particle.id}
										className="absolute font-mono font-bold select-none"
										style={{
											left: `${particle.x}px`,
											top: `${particle.y}px`,
											color: particle.color,
											fontSize: `${particle.size * 14}px`,
											opacity: opacity,
											zIndex: 5,
										}}
									>
										{particle.char}
									</div>
								);
							})
						)}
					</div>
				</div>
				<div className='w-full h-full'>{children}</div>
			</div>
		</FireworksContext.Provider>
	);
};

export { ASCIIFireworks };
