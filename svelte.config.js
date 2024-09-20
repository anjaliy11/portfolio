	import adapter from '@sveltejs/adapter-auto';
	import Preprocess  from '@sveltejs/kit/';

	/** @type {import('@sveltejs/kit').Config} */
	const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: Preprocess()
	};
	export default config;
