import type { Decorator, Preview } from 'storybook-react-rsbuild'
import { DecoratorHelpers, withThemeByClassName } from '@storybook/addon-themes'
import "../src/index.css"
import "./storybook.css"

const { pluckThemeFromContext } = DecoratorHelpers;

export const withThemeByLocalStorage: Decorator = (Story, context) => {
	const selectedTheme = pluckThemeFromContext(context);

	localStorage.setItem('vite-ui-theme', selectedTheme)

	return withThemeByClassName({
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
	})(Story, context);
};

const preview: Preview = {
	decorators: [
		withThemeByLocalStorage
	]
};

export default preview;
