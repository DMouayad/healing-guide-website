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
        'feature-card-2': 'تعريف بأقسام المستشفيات وميزاتها',
        'feature-card-3': 'البحث عن الأطباء والعيادات التخصصية',
        'feature-card-4': 'جدول مناوبات أطباء الدراسات',
        'feature-card-5': ' بيانات الموقع والذهاب إلى المنشأة',
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
        'service-card-1-cta': 'اكتشف المزيد من الميزات في التطبيق',
        'service-card-1-cta-link': '',
        'service-card-2-title': 'لوحة تحكم المنشأة',
        'service-card-2-desc': 'تتيح لك إضافة البيانات الخاصة بمنشأتك متضمنةً الأقسام والكوادر الطبية بالإضافة إلى إحصائيات الآراء والتقييمات',
        'service-card-2-cta': 'احصل على لوحة التحكم الخاصة بمنشأتك',
        'service-card-2-cta-link': '',
        'copyright': 'جميع الحقوق محفوظة',
        'get-app-footer-title': 'تطبيق الموبايل',
        'our-socials': 'حساباتنا',
        'about-us': 'من نحن',
        'useful-links': 'روابط مفيدة',
        'direct-download': 'تحميل مباشر'
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
        'feature-card-1': 'Get instant help in case of an emergency',
        'feature-card-2': 'Explore hospitals departments and their specialities',
        'feature-card-3': 'Find the best doctors in your city',
        'feature-card-4': 'Get directions to any facility',
        'feature-card-5': 'Check doctors shift before visit',
        'feature-card-6': '',
        'service-card-1-title': 'For doctor & patient',
        'service-card-1-desc': [{
            'title': 'Doctors',
            'content': 'يوفر لك جدول بالمناوبات الشهرية والمهام الموكل و إليك ويزودك بتفاصيل المنشأة الطبية'
        },
        {
            'title': 'Patients & Visitors',
            'content': 'إمكانية البحث عن المستشفيات والعيادات الطبية تبعاً للتخصص أو الموقع. كما يعرض لك كل ما يلزمك من معلومات : السياسات العامة وتعليمات الزيارة والمرافق العامة المتوفرة وغير ذلك من معلومات مفيدة '
        }
        ],
        'service-card-1-cta': 'Get the App',
        'service-card-1-cta-link': '',
        'service-card-2-title': 'Facility Dashboard',
        'service-card-2-desc': 'تتيح لك إضافة البيانات الخاصة بمنشأتك متضمنةً الأقسام والكوادر الطبية بالإضافة إلى إحصائيات الآراء والتقييمات',
        'service-card-2-cta': 'Become a partner',
        'service-card-2-cta-link': '',
        'copyright': 'All rights reserved',
        'get-app-footer-title': 'Download the mobile app',
        'our-socials': 'Our socials',
        'about-us': 'About us',
        'useful-links': 'Useful Links',
        'direct-download': 'Direct download'

    },
} as const;
export const EN_USEFUL_LINKS = [
    {
        'label': 'Terms and conditions',
        'link': '',
    },
    {
        'label': 'Privacy Policy',
        'link': '',
    },
];
export const AR_USEFUL_LINKS = [
    {
        'label': 'شروط الاستخدام',
        'link': ''
    },
    {
        'label': 'سياسة الخصوصية',
        'link': ''
    },
];
export const AR_NAV_ITEMS = [
    {
        'label': 'خدماتنا',
        'link': 'services'
    },
    {
        'label': 'شركائنا',
        'link': 'partners'
    },
    {
        'label': 'آراء المستخدمين',
        'link': 'reviews'
    },
    {
        'label': 'الأسئلة الشائعة',
        'link': 'faq'
    },
    {
        'label': 'تواصل معنا',
        'link': 'contact'
    },
] as const;
export const EN_NAV_ITEMS = [
    {
        'label': 'What we offer',
        'link': 'services'
    },
    {
        'label': 'Our Partners',
        'link': 'partners'
    },
    {
        'label': 'Users Reviews',
        'link': 'reviews'
    },
    {
        'label': 'FAQs',
        'link': 'faq'
    },
    {
        'label': 'Contact us',
        'link': 'contact'
    },
] as const;