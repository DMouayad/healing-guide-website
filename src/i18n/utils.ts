import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from "astro:i18n";
import { AR_NAV_ITEMS, AR_USEFUL_LINKS, DEFAULT_LOCALE, EN_NAV_ITEMS, EN_USEFUL_LINKS, TRANSLATIONS } from "./constants";

export function i18n(lang?: keyof typeof TRANSLATIONS) {
    return function t(key: keyof typeof TRANSLATIONS[typeof DEFAULT_LOCALE]) {
        return lang ? TRANSLATIONS[lang][key] : TRANSLATIONS[DEFAULT_LOCALE][key];
    }
}
export function localeSiteName(locale?: string) {
    return i18n(locale)("site-name");
}
export function absLangURL(url: string, currentLocale?: string) {
    return getAbsoluteLocaleUrl(currentLocale || DEFAULT_LOCALE, url);
}

export function relLangURL(url: string, currentLocale?: string) {

    return getRelativeLocaleUrl(currentLocale || DEFAULT_LOCALE, url);
}
export function getLocaleNavItems(currentLocale?: string) {
    return (currentLocale || DEFAULT_LOCALE) === 'ar' ? AR_NAV_ITEMS : EN_NAV_ITEMS;
}
export function getLocaleUsefulLinks(currentLocale?: string) {
    return (currentLocale || DEFAULT_LOCALE) === 'ar' ? AR_USEFUL_LINKS : EN_USEFUL_LINKS;
}