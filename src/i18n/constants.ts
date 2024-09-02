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
        'start-with-app': 'حمّل التطبيق وابحث الآن',
        'services-sec-upperTitle': 'خدمات التطبيق',
        'services-sec-mainTitle': 'ماذا نقدم',
        'feature-card-1': 'طلب الإسعاف الفوري بكبسة زر',
        'feature-card-2': 'تعريف بأقسام المستشفيات',
        'feature-card-3': 'البحث عن الأطباء والعيادات التخصصية',
        'feature-card-4': 'جدول مناوبات أطباء الدراسات ومهامهم',
        'feature-card-5': 'الوصول إلى سياسات المنشأة الطبية ',
        'feature-card-6': 'التحكم ',
        'service-card-1-title': 'تطبيق الأطباء والمرضى',
        'service-card-1-desc': [{
            'title': 'الأطباء',
            'content': 'يوفر لك جدول بالمناوبات الشهرية والمهام الموكلو إليك ويزودك بتفاصيل المنشأة الطبية'
        },
        {
            'title': 'المرضى والزوّار',
            'content': 'إمكانية البحث عن المستشفيات والعيادات الطبية تبعاً للتخصص أو الموقع. كما يعرض لك كل ما يلزمك من معلومات : السياسات العامة وتعليمات الزيارة والمرافق العامة المتوفرة وغير ذلك من معلومات مفيدة '
        }
        ],
        'service-card-1-cta': 'تحميل التطبيق',
        'service-card-1-cta-link': '',
        'service-card-2-title': 'لوحة تحكم المنشأة',
        'service-card-2-desc': 'تتيح لك إضافة البيانات الخاصة بمنشأتك متضمنةً الأقسام والكوادر الطبية بالإضافة إلى إحصائيات الآراء والتقييمات',
        'service-card-2-cta': 'احصل على لوحة التحكم الخاصة بمنشأتك',
        'service-card-2-cta-link': '',
    },
    "en": {
        'site-name': 'Healing Guide',
        'download-btn-text': 'Download the app',
        'hero-title': 'Find a suitable treatment near you',
        'hero-subtitle': 'Your best choice for medical services in Damascus city',
        'learn-more': 'Learn More',
        'start-with-app': 'Search now by getting our mobile app',
        'services-sec-upperTitle': 'Our Services',
        'services-sec-mainTitle': 'What we offer',

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