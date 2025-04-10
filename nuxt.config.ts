// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/internity-dev.github.io/",
    },

    modules: ["@nuxtjs/tailwindcss"],

    runtimeConfig: {
        public: {
            apiBaseURL: process.env.API_BASE_URL,
		},
	},
});
