import { Meta, StoryObj } from "storybook-react-rsbuild";
import { MorphLogo } from "../morph-logo";
import { MorphLogoProvider, useMorphLogo } from "../morph-logo-context";
import { Button } from "../button";
import { ArrowDownIcon, ArrowUpIcon, HourglassIcon, PingPongIcon, PlayIcon, SpiralIcon } from "@phosphor-icons/react";
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

function MorphLogoTest() {
	const morph = useMorphLogo()
	const [isAnimating, setIsAnimating] = useState(false)
	return (
		<div className="flex items-center gap-4">
			<Switch checked={isAnimating} onCheckedChange={setIsAnimating} />
			<Button variant="secondary" size="icon" onClick={() => { morph.setAnimation('loading', isAnimating) }}>
				<HourglassIcon />
			</Button>
			<Button variant="secondary" size="icon" onClick={() => { morph.setAnimation('idle', isAnimating) }}>
				<SpiralIcon />
			</Button>
			<Button variant="secondary" size="icon" onClick={() => { morph.setAnimation('busy', isAnimating) }}>
				<PingPongIcon />
			</Button>
			<Button variant="secondary" size="icon" onClick={() => { morph.setAnimation('download', isAnimating) }}>
				<ArrowDownIcon />
			</Button>
			<Button variant="secondary" size="icon" onClick={() => { morph.setAnimation('upload', isAnimating) }}>
				<ArrowUpIcon />
			</Button>
		</div>
	)
}
