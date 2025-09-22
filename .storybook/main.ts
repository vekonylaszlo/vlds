import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
	"stories": [
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	addons: [
		'@storybook/addon-essentials',
		'storybook-addon-rslib',
		'storybook-addon-pseudo-states',
		'@storybook/addon-themes'
	],
	framework: 'storybook-react-rsbuild',
};
export default config;
