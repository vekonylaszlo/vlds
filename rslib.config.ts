import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
	source: {
		entry: {
			index: ['./src/**'],
		},
	},
	lib: [
		{
			bundle: false,
			dts: true,
			format: 'esm',
		},
	],
	output: {
		target: 'web',
		emitCss: true,
		copy: {
			patterns: [{
				from: "./src/index.css", to: "./tw.css"
			}]
		}
	},
	plugins: [pluginReact()],
	tools: {
		rspack: {
			module: {
				rules: [
					{
						test: /\.css$/,
						use: [
							{
								loader: 'postcss-loader',
								options: {
									postcssOptions: {
										config: './postcss.config.mjs'
									}
								}
							},
						],
					},
				],
			}
		}
	}
});
