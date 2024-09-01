export const ENGLISH_LANG = "en" as const;
export const ARABIC_LANG = "ar" as const;
export const LANGUAGES = {
    "English": ENGLISH_LANG,
    "Arabic": ARABIC_LANG
} as const;
export const LOCALES = [ENGLISH_LANG, ARABIC_LANG];
export const DEFAULT_LOCALE = "ar" as const;

export const TRANSLATIONS: { [key: string]: any } = {
    "ar": {
        'site-name': 'الدليل الشافي',
        'hero-title': 'ابحث عن المشافي القريبة منك و المناسبة لاحتياجك',
        'hero-subtitle': 'دليلك الأول للخدمات الطبية في مدينة دمشق',
        'download-btn-text': 'تحميل التطبيق',
        'learn-more': 'اعرف أكثر',
        'start-with-app': 'حمّل التطبيق وابحث الآن'
    },
    "en": {
        'site-name': 'Healing Guide',
        'download-btn-text': 'Download the app',
        'hero-title': 'Find a suitable treatment near you',
        'hero-subtitle': 'Your best choice for medical services in Damascus city',
        'learn-more': 'Learn More',
        'start-with-app': 'Search now by getting our mobile app'

    },
} as const;

export const AR_NAV_ITEMS = [
    {
        'label': 'ماذا نقدم',
        'link': '#services'
    },
    {
        'label': 'شركائنا',
        'link': '#partners'
    },
    {
        'label': 'آراء المستخدمين',
        'link': '#reviews'
    },
    {
        'label': 'الأسئلة الشائعة',
        'link': '#faq'
    },
    {
        'label': 'تواصل معنا',
        'link': '#contact'
    },
] as const;
export const EN_NAV_ITEMS = [
    {
        'label': 'What we offer',
        'link': '#services'
    },
    {
        'label': 'Our Partners',
        'link': '#partners'
    },
    {
        'label': 'Users Reviews',
        'link': '#reviews'
    },
    {
        'label': 'FAQs',
        'link': '#faq'
    },
    {
        'label': 'Contact us',
        'link': '#contact'
    },
] as const;