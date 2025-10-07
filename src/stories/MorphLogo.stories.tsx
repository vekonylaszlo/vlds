import { Meta, StoryObj } from "storybook-react-rsbuild";
import { MorphLogo } from "../morph-logo";
import { MorphAnimationName, MorphLogoContextValue, MorphLogoProvider, useMorphLogo } from "../morph-logo-context";
import { Button } from "../button";
import { ArrowDownIcon, ArrowUpIcon, ExclamationMarkIcon, HourglassIcon, PingPongIcon, PlayIcon, SpiralIcon } from "@phosphor-icons/react";
import { Switch } from "../switch";
import { useState } from "react";

const meta = {
	title: "Example/MorphLogo",
	component: MorphLogo,
	parameters: {
	},
	argTypes: {

	},
	tags: ['autodocs']
} satisfies Meta<typeof MorphLogo>

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoComponent: Story = {
	render: () => (
		<MorphLogoProvider>
			<div className="flex flex-col gap-6">
				<MorphLogo />
				<MorphLogoTest />
			</div>
		</MorphLogoProvider>
	)
}

function testAnimation(name: MorphAnimationName, morph: MorphLogoContextValue) {
	morph.setAnimation(name, false);
	setTimeout(() => {
		morph.setAnimation('idle', false)
	}, 2000)
}

function MorphLogoTest() {
	const morph = useMorphLogo()
	const [isAnimating, setIsAnimating] = useState(false)
	return (
		<div className="flex items-center gap-4">
			<Switch checked={isAnimating} onCheckedChange={setIsAnimating} />
			<Button variant="secondary" size="icon" onClick={() => { testAnimation('loading', morph) }}>
				<HourglassIcon />
			</Button>
			<Button variant="secondary" size="icon" onClick={() => { testAnimation('idle', morph) }}>
				<SpiralIcon />
			</Button>
			<Button variant="secondary" size="icon" onClick={() => { testAnimation('busy', morph) }}>
				<PingPongIcon />
			</Button>
			<Button variant="secondary" size="icon" onClick={() => { testAnimation('download', morph) }}>
				<ArrowDownIcon />
			</Button>
			<Button variant="secondary" size="icon" onClick={() => { testAnimation('upload', morph) }}>
				<ArrowUpIcon />
			</Button>
			<Button variant="destructive" size="icon" onClick={() => { testAnimation('error', morph) }}>
				<ExclamationMarkIcon />
			</Button>
		</div>
	)
}
