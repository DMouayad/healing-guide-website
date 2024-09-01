import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { LOCALES, DEFAULT_LOCALE } from '/src/i18n/constants';
import lottie from "astro-integration-lottie";


// https://astro.build/config
export default defineConfig({
    //TODO:: add site url
    // site:,
    output: 'static',
    integrations: [tailwind(), sitemap({ i18n: { locales: LOCALES, defaultLocale: DEFAULT_LOCALE } }), lottie()],
    i18n: {
        defaultLocale: 'ar',
        locales: ['ar', 'en']
    }
});
