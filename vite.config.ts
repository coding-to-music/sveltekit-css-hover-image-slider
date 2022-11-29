import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	define: {
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
	}
};

export default config;

// ,
// build: {
// 	outDir: '../public'
// }
// import { sveltekit } from '@sveltejs/kit/vite';
// import type { UserConfig } from 'vite';

// const config: UserConfig = {
// 	plugins: [sveltekit()]
// };

// export default config;
