import webpack from 'webpack';

export function buildBabelLoader(isDev: boolean, isTsx?: boolean): webpack.RuleSetRule {
	const babelLoader = {
		test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: [/node_modules/],
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				presets: ['@babel/preset-env'],
				plugins: [
					isDev && 'react-refresh/babel',
					['@babel/plugin-transform-typescript', { isTsx }],
					'@babel/plugin-transform-runtime',
				].filter(Boolean),
			},
		},
	};

	return babelLoader;
}

/* 
npm uninstall @babel/core @babel/plugin-transform-runtime @babel/plugin-transform-typescript @babel/preset-env @babel/preset-react @babel/preset-typescript @pmmmwh/react-refresh-webpack-plugin @svgr/webpack @types/babel__core @types/circular-dependency-plugin @types/node @types/react @types/react-dom @types/webpack @types/webpack-bundle-analyzer @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-loader circular-dependency-plugin css-loader eslint eslint-config-prettier eslint-plugin-fsd-paths-guard eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-unused-imports fork-ts-checker-webpack-plugin html-webpack-plugin husky lint-staged mini-css-extract-plugin prettier react-refresh sass sass-loader style-loader stylelint stylelint-config-recess-order stylelint-config-standard-scss stylelint-order stylelint-scss ts-morph ts-node typescript webpack webpack-bundle-analyzer webpack-cli webpack-dev-server @reduxjs/toolkit classnames react react-dom react-redux react-router-dom react-virtuoso

npm uninstall @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/blocks @storybook/react @storybook/react-webpack5 @storybook/testing-library @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @vitejs/plugin-react concurrently copy-webpack-plugin cypress eslint-plugin-cypress eslint-plugin-i18next eslint-plugin-storybook identity-obj-proxy jest jest-environment-jsdom jest-fetch-mock jest-html-reporters json-server loki postcss-lit reg-cli regenerator-runtime storybook storybook-addon-mock ts-loader vite vite-plugin-svgr whatwg-fetch @headlessui/react @react-spring/web @use-gesture/react axios i18next i18next-browser-languagedetecto i18next-http-backend react-i18next
*/
