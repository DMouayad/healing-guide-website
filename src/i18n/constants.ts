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
        'direct-download': 'تحميل مباشر',
        'partners-sec-mainTitle': 'شركائنا',
        'partners-sec-upperTitle': 'مراكز طبية تثق بنا',
        "positive-review": 'تقييم إيجابي',
        "monthly-visitor": 'زائر شهرياً',
        "doctor": 'طبيب',
        "med-facility": 'منشأة طبية',
        'stats-section-upperTitle': 'نعتز بثقتكم',
        'stats-section-mainTitle': 'إحصائيات',
        'reviews-section-mainTitle': 'لماذا نحن',
        'reviews-section-upperTitle': 'آراء ومراجعات',
        'review-1-name': 'أحمد أحمد',
        'review-1-role': 'مريض',
        'review-1-text': 'أستخدم تطبيق الدليل الشافي بشكل يومي للبحث عن أطباء متخصصين في مجال الأمراض الجلدية. المرشحات المتعددة تساعدني في العثور على طبيب قريب من منزلي ويتوافق مع تأميني الصحي. أقسام الموارد الخاصة بكل عيادة توفر لي معلومات مفصلة عن الخدمات المقدمة وأسعارها. هذا التطبيق وفر علي الكثير من الوقت والجهد، وأنا أوصي به بشدة لأي شخص يبحث عن رعاية صحية جيدة.',
        'review-2-name': 'مؤيد الحموي',
        'review-2-text': 'كضيف في المدينة، كان هذا التطبيق منقذي. لقد ساعدني في العثور على أقرب مستشفى في حالة الطوارئ، كما وفر لي معلومات عن الخدمات المتاحة للسياح. فالتطبيق يعمل بسلاسة وسرعة، حتى مع وجود اتصال إنترنت ضعيف. كما أن توفير معلومات عن المواصلات المتاحة إلى المستشفى ميزة رائعة، خاصة بالنسبة للأشخاص الذين لا يعرفون المنطقة جيداً.',
        'review-2-role': 'مريض من دولة أجنبية',
        'review-3-name': 'مرام مرام',
        'review-3-role': 'مدير مستشفى',
        'review-3-text': 'التطبيق ساهم في تحسين سمعة مستشفانا وزيادة ثقة المرضى بنا. قسم الموارد يسمح لنا بتقديم معلومات دقيقة وشاملة عن خدماتنا.',
        'faq-section-mainTitle': 'الأسئلة الشائعة',
        'faq-section-upperTitle': 'تعرّف علينا أكثر',
        'faq-tab1-label': 'عن التطبيق',
        'faq-tab1-q1-title': 'ما هو تطبيق الدليل الشافي؟',
        'faq-tab1-q1-body': 'تطبيق الدليل الشافي هو منصة شاملة يمكن الوصول إليها عن طريق تطبيقنا على أجهزة الموبايل وتسعى لحل المشكلات المتعلقة بإيجاد مستشفى أو منشأة طبية تقدم الرعاية الطبية المناسبة للمرضى.',
        'faq-tab1-q2-title': 'كيف يمكنني الاتصال بفريق الدعم؟',
        'faq-tab1-q2-body': 'يمكنك الاتصال بفريق الدعم من خلال استمارة "اتصل بنا" ضمن موقعنا الالكتروني أو عن طريق البريد الإلكتروني.',
        'faq-tab1-q3-title': 'هل التطبيق مجاني؟',
        'faq-tab1-q3-body': 'نعم، التطبيق مجاني للتنزيل والاستخدام. قد تكون هناك بعض الميزات الإضافية المدفوعة.',
        'faq-tab2-label': 'عن البحث والفلترة',
        'faq-tab2-q1-title': 'هل يمكنني العثور على أطباء متخصصين في أمراض معينة؟',
        'faq-tab2-q1-body': 'نعم، يمكنك البحث عن أطباء متخصصين في أي مجال طبي تقريبًا من خلال تحديد التخصص الطبي المطلوب في البحث.',
        'faq-tab2-q2-title': 'كيف يمكنني فلترة نتائج البحث؟',
        'faq-tab2-q2-body': 'يمكنك فلترة نتائج البحث عن طريق الضغط على الزر الموضح في الشكل رقم -1- ثم اختيار معيار فلترة نتائج البحث.',
        'faq-tab2-q3-title': 'بناءً على ماذا يمكنني البحث عن المنشآت الطبية؟',
        'faq-tab2-q3-body': 'التخصص الطبي: اختر التخصص الذي تحتاج إليه (باطنية، جراحة، نساء وتوليد، إلخ).\nالخدمات المقدمة: ابحث عن المنشآت التي تقدم الخدمات المطلوبة (تحاليل، أشعة، عمليات جراحية، إلخ).\nالتقييم: تصفح المنشآت الأعلى تقييمًا من قبل المرضى السابقين.\nالموقع: حدد منطقة جغرافية محددة أو ابحث عن أقرب منشأة إليك.\nالساعات: ابحث عن المنشآت التي تعمل في ساعات معينة.\nاللغة: ابحث عن الأطباء الذين يتحدثون لغتك.',
        'faq-tab3-label': 'عن البيانات ضمن التطبيق',
        'faq-tab3-q1-title': 'هل المعلومات التي يقدمها التطبيق دقيقة؟',
        'faq-tab3-q1-body': 'نطبق العديد من الإجراءات لضمان دقة البيانات، منها:\nآلية الإبلاغ عن الأخطاء: نوفر للمستخدمين آلية سهلة للإبلاغ عن أي أخطاء أو معلومات غير دقيقة.\nالتحديث الدوري: نقوم بشكل دوري بطلب من مدراء المنشآت الطبية القيام بالتحقق من البيانات الخاصة بهم للتأكد من أنها تعكس أحدث التطورات في المنشآت الطبية.\n ولكن ننصحك بالاتصال بالمنشأة الطبية للتأكد من أي تفاصيل قبل زيارتها.',
        'faq-tab3-q2-title': 'كيف يمكنني الإبلاغ عن أي خطأ في البيانات؟',
        'faq-tab3-q2-body': 'بوساطة تطبيق الدليل الشافي على الموبايل عن طريق الذهاب إلى الصفحة التي تحوي على الخطأ والضغط على زر "الإبلاغ عن خطأ - اقتراح تعديل"  ثم ملء البيانات المطلوبة والضغط على زر إرسال \nأو عن طريق البريد الإلكتروني.',
        'faq-tab3-q3-title': 'كيف يتم جمع البيانات عن المنشآت الطبية؟',
        'faq-tab3-q3-body': 'المؤسسات الطبية نفسها: جميع البيانات تتم إضافتها عن طريق فريق تابع لهذه المنشأة الطبية فهذا يضمن موثوقية ودقة البيانات.\n',
        'contact-sec-upperTitle': 'رأيكم يهمّنا',
        'contact-sec-mainTitle': 'تواصل معنا',
        'send': 'إرسال',
        'first-name': 'الاسم الأول',
        'last-name': 'الكنية',
        'email': 'البريد الالكتروني',
        'message': 'رسالتك أو ملاحظتك'
    },
    "en": {
        'site-name': 'Healing Guide',
        'download-btn-text': 'Get the app',
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
        'direct-download': 'Direct download',
        'partners-sec-mainTitle': 'Our partners',
        'partners-sec-upperTitle': 'Medical facilites that trsut us',
        "positive-review": 'Positive Review',
        "monthly-visitor": 'Monthly Visitor',
        "doctor": 'Doctor',
        "med-facility": 'Medical Facility',
        'stats-section-upperTitle': 'We value your trust',
        'stats-section-mainTitle': 'Let the numbers talk ',
        'reviews-section-mainTitle': 'what our users say',
        'reviews-section-upperTitle': 'Testimonials',
        'review-1-name': 'Ahmad D',
        'review-1-text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ',
        'review-2-name': 'Mouayad DD',
        'review-2-text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ',
        'review-3-name': 'Maram DDD',
        'review-3-text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ',
        'faq-section-mainTitle': 'Frequently Asked Question',
        'faq-section-upperTitle': 'Know us more',
        'faq-1-title': 'Lorem ipsum dolor sit amet, consectetur ',
        'faq-1-body': ' Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla',
        'faq-2-title': 'Lorem ipsum dolor sit amet, consectetur ',
        'faq-2-body': ' Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla',
        'faq-3-title': 'Lorem ipsum dolor sit amet, consectetur ',
        'faq-3-body': ' Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla',
        'contact-sec-upperTitle': 'We appreciate your feedback',
        'contact-sec-mainTitle': 'Contact Us',
        'send': 'SEND',
        'first-name': 'First name',
        'last-name': 'Last name',
        'email': 'Email Address',
        'message': 'Your message or feedback'
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
        'label': 'لماذا نحن',
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