import { Language } from '../types';

export interface Translations {
  appName: string;
  appTagline: string;
  badgeVersion: string;
  nav: {
    publisher: string;
    memes: string;
    visuals: string;
    intelligence: string;
    voice: string;
    calendar: string;
    growth: string;
    analytics: string;
    prd: string;
  };
  common: {
    preview: string;
    generate: string;
    copied: string;
    copyCommand: string;
    downloadSvg: string;
    downloadPng: string;
    insertToTweet: string;
    status: string;
    active: string;
    ready: string;
    clear: string;
    reset: string;
    save: string;
    cancel: string;
    publishNow: string;
    schedule: string;
    loading: string;
    search: string;
    all: string;
    filters: string;
    exportMarkdown: string;
    exportNotion: string;
  };
  publisher: {
    title: string;
    subtitle: string;
    composeTitle: string;
    placeholder: string;
    addTweetToThread: string;
    tweetNumber: string;
    pollTitle: string;
    addOption: string;
    removePoll: string;
    pollDuration: string;
    addMedia: string;
    autoReplySection: string;
    autoReplyDesc: string;
    autoReplyTrigger: string;
    autoReplyResponse: string;
    autoDmSection: string;
    autoDmDesc: string;
    searchTrackerTitle: string;
    searchQueryPlaceholder: string;
    runSearch: string;
    scheduledAt: string;
    simulatedSuccess: string;
    cliSnippetTitle: string;
  };
  memes: {
    title: string;
    subtitle: string;
    selectTemplate: string;
    searchTemplates: string;
    smartSuggest: string;
    smartSuggestPlaceholder: string;
    smartSuggestBtn: string;
    customizeText: string;
    fontSize: string;
    textColor: string;
    textStroke: string;
    uppercase: string;
    renderSvg: string;
    gifGrepTitle: string;
    gifSearchPlaceholder: string;
    generateSheet: string;
  };
  visuals: {
    title: string;
    subtitle: string;
    cardType: string;
    quoteCard: string;
    statCard: string;
    flowchart: string;
    quoteText: string;
    quoteAuthor: string;
    quoteRole: string;
    statMetric: string;
    statLabel: string;
    statComparison: string;
    flowchartSteps: string;
    themeSelector: string;
    darkTheme: string;
    gradientTheme: string;
    lightTheme: string;
    exportCard: string;
  };
  intelligence: {
    title: string;
    subtitle: string;
    summarizeTab: string;
    weatherTab: string;
    summarizeInputPlaceholder: string;
    summarizeAction: string;
    viralHooksResult: string;
    threadOutlineResult: string;
    tldrResult: string;
    weatherTitle: string;
    selectCity: string;
    tempLabel: string;
    feelsLikeLabel: string;
    humidityLabel: string;
    suggestedHook: string;
  };
  voice: {
    title: string;
    subtitle: string;
    ttsTitle: string;
    voiceSelector: string;
    insertEmotionTag: string;
    tagsTooltip: string;
    inputPlaceholder: string;
    synthesizeBtn: string;
    playbackTitle: string;
    whisperTitle: string;
    whisperDesc: string;
    recordSimulate: string;
    transcriptionResult: string;
    convertToThread: string;
  };
  calendar: {
    title: string;
    subtitle: string;
    peakHoursTitle: string;
    peakHoursDesc: string;
    bestDays: string;
    consistencyScore: string;
    addScheduledSlot: string;
    slotTitle: string;
    slotDay: string;
    slotTime: string;
    slotType: string;
  };
  growth: {
    title: string;
    subtitle: string;
    viralScoreTab: string;
    hooksEngineTab: string;
    toneSwitcherTab: string;
    trendsRadarTab: string;
    leadMagnetTab: string;
    splitterExportTab: string;
    analyzeBtn: string;
    overallViralScore: string;
    strengthsTitle: string;
    improvementsTitle: string;
    trendJackBtn: string;
    dmSimulatorTitle: string;
    threadSplitterTitle: string;
    splitAction: string;
  };
  analytics: {
    title: string;
    subtitle: string;
    totalSpend: string;
    costPerPost: string;
    budgetCap: string;
    monthlyBurn: string;
    safeThreshold: string;
    modelBreakdown: string;
    provider: string;
    model: string;
    tokens: string;
    costUsd: string;
    ghIssuesTitle: string;
    ghIssuesDesc: string;
    openIssues: string;
    automatedPrs: string;
    cronStatus: string;
  };
  prd: {
    title: string;
    subtitle: string;
    executiveSummary: string;
    problem: string;
    solution: string;
    personasTitle: string;
    userJourneyTitle: string;
    architectureTitle: string;
    roadmapTitle: string;
    monetizationTitle: string;
    kpisTitle: string;
    risksTitle: string;
    planFree: string;
    planPro: string;
    planTeam: string;
    selectPlan: string;
  };
  viewMode: {
    mobile: string;
    desktop: string;
    mobileAppBadge: string;
  };
  templates: {
    browseTemplates: string;
    templatesLibrary: string;
    loadTemplate: string;
    estimatedReach: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    appName: 'MAEK7-Growth Suite',
    appTagline: 'الحزمة الشاملة لأتمتة ونمو المحتوى على X مع تطبيق الجوال',
    badgeVersion: 'MAEK7 • v2.0 • 2026',
    nav: {
      publisher: 'محرك النشر والثريد',
      memes: 'استوديو الميمز وGIF',
      visuals: 'المحرك البصري والمخططات',
      intelligence: 'طبقة التلخيص والسياق',
      voice: 'استوديو الصوت والتفريغ',
      calendar: 'تقويم النشر وأوقات الذروة',
      growth: 'أدوات النمو والانتشار (7 مزايا)',
      analytics: 'حماية التكلفة وDevOps',
      prd: 'ميثاق المنتج (PRD)',
    },
    common: {
      preview: 'معاينة حية',
      generate: 'توليد ذكي',
      copied: 'تم النسخ بنجاح!',
      copyCommand: 'نسخ أمر CLI',
      downloadSvg: 'تحميل كـ SVG',
      downloadPng: 'تحميل كـ PNG',
      insertToTweet: 'إدراج في مسودة التغريدة',
      status: 'الحالة',
      active: 'نشط',
      ready: 'جاهز للنشر',
      clear: 'مسح',
      reset: 'إعادة ضبط',
      save: 'حفظ المسودة',
      cancel: 'إلغاء',
      publishNow: 'نشر عبر xurl',
      schedule: 'جدولة للنشر',
      loading: 'جاري المعالجة...',
      search: 'بحث...',
      all: 'الكل',
      filters: 'التصنيفات',
      exportMarkdown: 'تصدير كـ Markdown',
      exportNotion: 'نسخ مهيأ لـ Notion',
    },
    publisher: {
      title: 'محرك النشر والثريد المتسلسل',
      subtitle: 'نشر، جدولة، ردود مؤتمتة، واستطلاعات رأي مدعومة بأمر xurl بدون تعقيدات الـ API.',
      composeTitle: 'كتابة التغريدة / الثريد',
      placeholder: 'ما الفكرة الملهمة التي تريد مشاركتها اليوم مع جمهورك؟',
      addTweetToThread: '+ إضافة تغريدة للثريد',
      tweetNumber: 'التغريدة رقم',
      pollTitle: 'إضافة استطلاع رأي',
      addOption: '+ إضافة خيار',
      removePoll: 'حذف الاستطلاع',
      pollDuration: 'المدة (ساعات)',
      addMedia: 'إرفاق وسائط (صورة / ميم / صوت)',
      autoReplySection: 'أتمتة الردود الذكية (xurl reply)',
      autoReplyDesc: 'رد تلقائي سريع على المتابعين الجدد أو الكلمات المفتاحية في ثريداتك.',
      autoReplyTrigger: 'الشرط المحفز (كلمة مفتاحية أو حساب)',
      autoReplyResponse: 'نص الرد التلقائي',
      autoDmSection: 'حملات الرسائل الخاصة (xurl dm)',
      autoDmDesc: 'تسليم الكتب الرقمية، الروابط، والمواد التعليمية عبر الخاص تلقائياً لمن يعلق.',
      searchTrackerTitle: 'محرك البحث والمراقبة في X (xurl search)',
      searchQueryPlaceholder: 'مثال: "ذكاء اصطناعي" lang:ar min_faves:50',
      runSearch: 'بحث متقدم',
      scheduledAt: 'مجدول في',
      simulatedSuccess: 'تمت محاكاة النشر بنجاح وحفظ السجل!',
      cliSnippetTitle: 'أمر الـ CLI المكافئ في xurl',
    },
    memes: {
      title: 'استوديو الميمز والمحتوى البصري العربي',
      subtitle: 'أكثر من 20 قالباً عالمياً ومحلياً مع دعم كامل للخطوط العربية وRTL واقتراحات السياق الذكي.',
      selectTemplate: 'اختر قالب الميم المناسب',
      searchTemplates: 'ابحث في أسماء القوالب أو الحالات...',
      smartSuggest: 'المقترح الذكي لنبرة المحتوى (meme-maker suggest)',
      smartSuggestPlaceholder: 'اكتب فكرة البوست أو المشكلة التقنية (مثال: برمجت الكود دون فحص واشتغل)...',
      smartSuggestBtn: 'اقترح قوالب ونصوص',
      customizeText: 'تعديل نصوص القالب (RTL مضبوط)',
      fontSize: 'حجم الخط',
      textColor: 'لون النص',
      textStroke: 'سماكة الإطار',
      uppercase: 'أحرف كبيرة / تشديد',
      renderSvg: 'توليد ومعاينة الميم',
      gifGrepTitle: 'محرك صور GIF والشرائح (gifgrep)',
      gifSearchPlaceholder: 'ابحث عن GIF مناسب لموضوعك...',
      generateSheet: 'توليد شبكة لقطات (GIF Sheet)',
    },
    visuals: {
      title: 'المحرك البصري وكروت الإنفوجرافيك',
      subtitle: 'تحويل الأفكار المعقدة والإحصائيات إلى كروت بصرية ومخططات سير عمل تزيد نسبة المشاركة 3x.',
      cardType: 'نوع البطاقة البصرية',
      quoteCard: 'كرت اقتباس فخم',
      statCard: 'كرت إحصائية ومقارنة',
      flowchart: 'مخطط سير عمل تقني',
      quoteText: 'نص الاقتباس أو الفكرة',
      quoteAuthor: 'اسم المتحدث أو الحساب',
      quoteRole: 'الصفة / المنصب',
      statMetric: 'الرقم الرئيسي (مثال: +340%)',
      statLabel: 'عنوان الإحصائية',
      statComparison: 'المقارنة (قبل مقابل بعد)',
      flowchartSteps: 'مراحل المخطط التقني',
      themeSelector: 'سمة التصميم',
      darkTheme: 'داكن فاخر',
      gradientTheme: 'تدرج تقني عصري',
      lightTheme: 'ورقي نظيف',
      exportCard: 'تصدير الكرت بصيغة SVG',
    },
    intelligence: {
      title: 'طبقة التلخيص والسياق الزمني',
      subtitle: 'تلخيص روابط المقالات، الفيديوهات، وملفات PDF واستخراج زوايا ثريد جاهزة وربطها بالطقس اليومي.',
      summarizeTab: 'محرك التلخيص (summarize)',
      weatherTab: 'سياق الطقس والمناسبات (weather)',
      summarizeInputPlaceholder: 'ضع رابط مقال، فيديو يوتيوب، أو الصق نصاً طويلاً هنا...',
      summarizeAction: 'استخراج زوايا الثريد',
      viralHooksResult: '3 خُطّافات (Hooks) فيروسية مقترحة',
      threadOutlineResult: 'هيكل الثريد المقترح',
      tldrResult: 'الملخص المركز (TL;DR)',
      weatherTitle: 'ربط التغريدة بالأجواء الحالية',
      selectCity: 'اختر المدينة لمراقبة طقسها',
      tempLabel: 'درجة الحرارة',
      feelsLikeLabel: 'الحرارة المحسوسة',
      humidityLabel: 'نسبة الرطوبة',
      suggestedHook: 'خُطّاف التغريدة المقترح حسب الطقس',
    },
    voice: {
      title: 'استوديو الصوت وتفريغ البودكاست',
      subtitle: 'توليد تعليق صوتي عالي الجودة مع وسوم المشاعر، وتفريغ الملاحظات الصوتية لنصوص جاهزة.',
      ttsTitle: 'تحويل النص إلى صوت (sag / ElevenLabs)',
      voiceSelector: 'الصوت المختار',
      insertEmotionTag: 'إدراج وسوم الأداء الصوتي (Audio Tags)',
      tagsTooltip: 'اضغط لإضافة وسم نبرة صوتية في موضع المؤشر',
      inputPlaceholder: 'اكتب نص التعليق الصوتي هنا مع الوسوم...',
      synthesizeBtn: 'توليد المقطع الصوتي',
      playbackTitle: 'مشغل المعاينة الصوتية ومخطط الترددات',
      whisperTitle: 'تفريغ الفويس نوت لثريد (openai-whisper)',
      whisperDesc: 'سجّل أو ارفع فكرة صوتية عفوية وسيقوم النظام بتحويلها لنص عربي مدقق وثريد مقسم.',
      recordSimulate: 'بدء التسجيل / محاكاة التفريغ',
      transcriptionResult: 'النص المفرّغ من الصوت',
      convertToThread: 'تحويل مباشر لمسودة ثريد',
    },
    calendar: {
      title: 'تقويم المحتوى وأوقات الذروة العربية',
      subtitle: 'خريطة النشر الأسبوعية ومواقيت الذروة التفاعلية في السعودية والخليج ومصر لضمان أعلى وصول.',
      peakHoursTitle: 'مواقيت الذروة التفاعلية الأكثر نشاطاً',
      peakHoursDesc: 'تحليل سلوك الجمهور في الشرق الأوسط يوضح أن أفضل الأوقات هي: 1:00م، 8:30م، و11:00م بتوقيت الرياض.',
      bestDays: 'أفضل الأيام للتفاعل: الأحد، الثلاثاء، والخميس مساءً',
      consistencyScore: 'معدل التزام النشر الأسبوعي',
      addScheduledSlot: '+ إضافة موعد نشر',
      slotTitle: 'عنوان أو موضوع التغريدة',
      slotDay: 'اليوم',
      slotTime: 'الوقت',
      slotType: 'نوع المحتوى',
    },
    growth: {
      title: 'أدوات النمو والانتشار المتقدمة (Growth Engines)',
      subtitle: '7 ميزات احترافية: فحص احتمالية الانتشار، مولد الخُطّافات بـ 6 معادلات، رادار الترندات، وأتمتة الـ DM.',
      viralScoreTab: 'محلل قوة التغريدة (Viral Score)',
      hooksEngineTab: 'مولد الخُطّافات (Hook Engine)',
      toneSwitcherTab: 'محول نبرة الصوت (Tone Switcher)',
      trendsRadarTab: 'رادار الترندات (Trend Jacking)',
      leadMagnetTab: 'أتمتة الهدايا والـ DM',
      splitterExportTab: 'تجزئة وتصدير الثريد (Splitter & Export)',
      analyzeBtn: 'تحليل التغريدة وحساب النتيجة',
      overallViralScore: 'درجة احتمالية الانتشار والوصول',
      strengthsTitle: 'نقاط القوة المكتشفة في النص',
      improvementsTitle: 'توصيات لرفع التفاعل قبل النشر',
      trendJackBtn: 'استغلال الترند وإنشاء محتوى',
      dmSimulatorTitle: 'محاكي تجربة المتابع في الرسائل الخاصة',
      threadSplitterTitle: 'تجزئة المقال الطويل لثريد تلقائياً',
      splitAction: 'تجزئة النص إلى تغريدات مرقمة',
    },
    analytics: {
      title: 'حماية التكلفة وأتمتة DevOps',
      subtitle: 'مراقبة حية لاستهلاك نماذج الـ LLM وأصوات ElevenLabs، مع نظام إغلاق تلقائي عند تجاوز 80% من الميزانية.',
      totalSpend: 'إجمالي الاستهلاك الشهري',
      costPerPost: 'متوسط تكلفة التغريدة',
      budgetCap: 'سقف الميزانية المحدد',
      monthlyBurn: 'معدل الحرق المتوقع',
      safeThreshold: 'حاجز الأمان (Guardrail)',
      modelBreakdown: 'تفصيل الاستهلاك حسب النماذج (model-usage)',
      provider: 'المزود',
      model: 'النموذج',
      tokens: 'الرموز المستهلكة (Tokens)',
      costUsd: 'التكلفة بالدولار ($)',
      ghIssuesTitle: 'أتمتة تطوير الميزات (gh-issues + github)',
      ghIssuesDesc: 'كل طلب لميزة جديدة أو إصلاح يتم فتحه كـ GitHub Issue ويُعالج عبر وكلاء الذكاء الاصطناعي.',
      openIssues: 'المهام البرمجية قيد المعالجة',
      automatedPrs: 'طلبات الدمج المؤتمتة (PRs)',
      cronStatus: 'المجدول التلقائي (Cron Watcher)',
    },
    prd: {
      title: 'ميثاق منتج MAEK7-Growth Suite (PRD v2.0)',
      subtitle: 'الرؤية المعمارية الشاملة لـ MAEK7، الشخصيات المستهدفة، خارطة الطريق، ونموذج التسعير التجاري لمنطقة MENA.',
      executiveSummary: 'الملخص التنفيذي السريع',
      problem: 'المشكلة الراهنة في السوق',
      solution: 'الحل المقترح عبر منصة MAEK7-Growth Suite',
      personasTitle: 'الشخصيات المستهدفة (Personas)',
      userJourneyTitle: 'رحلة صانع المحتوى: من الشرارة إلى الانتشار',
      architectureTitle: 'مخطط المعمارية التقنية (Architecture Flow)',
      roadmapTitle: 'خارطة طريق الإطلاق (Roadmap)',
      monetizationTitle: 'خطط الاشتراكات والتسعير (Monetization)',
      kpisTitle: 'مؤشرات الأداء الرئيسية (KPIs)',
      risksTitle: 'إدارة المخاطر وخطط التخفيف (Risks & Mitigation)',
      planFree: 'المجانية (Free)',
      planPro: 'المحترف (Pro)',
      planTeam: 'الفِرق والوكالات (Team)',
      selectPlan: 'اختيار الباقة',
    },
    viewMode: {
      mobile: 'وضع تطبيق الجوال',
      desktop: 'شاشة سطح المكتب',
      mobileAppBadge: 'تطبيق MAEK7 للجوال (Mobile App)',
    },
    templates: {
      browseTemplates: 'مكتبة قوالب الثريدات الجاهزة',
      templatesLibrary: 'قوالب ثريدات فيروسية مجربة',
      loadTemplate: 'تحميل هذا القالب في المحرر',
      estimatedReach: 'الوصول التقديري',
    },
  },
  en: {
    appName: 'MAEK7-Growth Suite',
    appTagline: 'Complete X Creator Growth & Automation Suite with Mobile App Experience',
    badgeVersion: 'MAEK7 • v2.0 • 2026',
    nav: {
      publisher: 'Publishing & Thread Engine',
      memes: 'Meme & GIF Studio',
      visuals: 'Visual & Diagram Engine',
      intelligence: 'Intelligence & Context',
      voice: 'Voice & STT Studio',
      calendar: 'Calendar & Peak Hours',
      growth: 'Growth & Viral Tools (7 Features)',
      analytics: 'Cost Guardrails & DevOps',
      prd: 'PRD & Strategy Hub',
    },
    common: {
      preview: 'Live Preview',
      generate: 'Generate with AI',
      copied: 'Copied to clipboard!',
      copyCommand: 'Copy CLI Command',
      downloadSvg: 'Download SVG',
      downloadPng: 'Download PNG',
      insertToTweet: 'Send to Tweet Draft',
      status: 'Status',
      active: 'Active',
      ready: 'Ready to Publish',
      clear: 'Clear',
      reset: 'Reset',
      save: 'Save Draft',
      cancel: 'Cancel',
      publishNow: 'Publish via xurl',
      schedule: 'Schedule Post',
      loading: 'Processing...',
      search: 'Search...',
      all: 'All',
      filters: 'Filters',
      exportMarkdown: 'Export Markdown',
      exportNotion: 'Format for Notion',
    },
    publisher: {
      title: 'Publishing & Threading Engine',
      subtitle: 'Post, thread, schedule, automate replies and polls with xurl without API friction.',
      composeTitle: 'Compose Tweet / Thread',
      placeholder: 'What insightful idea do you want to share with your audience today?',
      addTweetToThread: '+ Add Tweet to Thread',
      tweetNumber: 'Tweet #',
      pollTitle: 'Add Poll',
      addOption: '+ Add Option',
      removePoll: 'Remove Poll',
      pollDuration: 'Duration (hours)',
      addMedia: 'Attach Media (Image / Meme / Audio)',
      autoReplySection: 'Smart Reply Automation (xurl reply)',
      autoReplyDesc: 'Instant automatic replies to new followers or target keywords.',
      autoReplyTrigger: 'Trigger keyword or user handle',
      autoReplyResponse: 'Automated response text',
      autoDmSection: 'Direct Message Campaigns (xurl dm)',
      autoDmDesc: 'Deliver lead magnets, links, or PDF guides automatically to engaged users.',
      searchTrackerTitle: 'Advanced X Monitor (xurl search)',
      searchQueryPlaceholder: 'e.g., "AI agents" min_faves:100 lang:en',
      runSearch: 'Execute Search',
      scheduledAt: 'Scheduled for',
      simulatedSuccess: 'Publication simulated successfully and logged!',
      cliSnippetTitle: 'Equivalent xurl CLI Command',
    },
    memes: {
      title: 'Meme & Visual Content Studio',
      subtitle: '20+ curated global and regional templates with accurate typography, layout, and AI smart suggester.',
      selectTemplate: 'Select Meme Template',
      searchTemplates: 'Search templates, use-cases, or keywords...',
      smartSuggest: 'Smart Tone Suggester (meme-maker suggest)',
      smartSuggestPlaceholder: 'Enter your post idea or tech topic (e.g., code worked on first try without tests)...',
      smartSuggestBtn: 'Suggest Memes & Lines',
      customizeText: 'Customize Template Text',
      fontSize: 'Font Size',
      textColor: 'Text Color',
      textStroke: 'Outline Stroke',
      uppercase: 'Uppercase / Emphasis',
      renderSvg: 'Render Meme Preview',
      gifGrepTitle: 'GIF Grep & Frame Sheets (gifgrep)',
      gifSearchPlaceholder: 'Search GIFs for your topic...',
      generateSheet: 'Generate Frame Sheet',
    },
    visuals: {
      title: 'Visual Card & Flowchart Engine',
      subtitle: 'Turn dense thoughts into sleek quote cards, stat comparisons, and tech diagrams that drive 3x viral reach.',
      cardType: 'Visual Asset Type',
      quoteCard: 'Premium Quote Card',
      statCard: 'Stat & Comparison Card',
      flowchart: 'Technical Flowchart',
      quoteText: 'Quote text or core takeaway',
      quoteAuthor: 'Author name or handle',
      quoteRole: 'Role / Credential',
      statMetric: 'Primary metric (e.g., +340%)',
      statLabel: 'Metric headline',
      statComparison: 'Comparison (Before vs After)',
      flowchartSteps: 'Architecture / workflow steps',
      themeSelector: 'Visual Theme',
      darkTheme: 'Dark Studio',
      gradientTheme: 'Modern Mesh Gradient',
      lightTheme: 'Clean Editorial',
      exportCard: 'Export Card as SVG',
    },
    intelligence: {
      title: 'Summarization & Contextual Hooks',
      subtitle: 'Summarize web articles, YouTube clips, and PDFs into 3 viral hook angles, and tie into live weather.',
      summarizeTab: 'Summarize Engine (summarize)',
      weatherTab: 'Weather & Time Context (weather)',
      summarizeInputPlaceholder: 'Paste article URL, YouTube link, or raw text here...',
      summarizeAction: 'Extract Thread Angles',
      viralHooksResult: '3 Viral Hook Angles',
      threadOutlineResult: 'Thread Outline',
      tldrResult: 'Executive TL;DR',
      weatherTitle: 'Real-Time Weather Contextualizer',
      selectCity: 'Select Target City',
      tempLabel: 'Temperature',
      feelsLikeLabel: 'Feels Like',
      humidityLabel: 'Humidity',
      suggestedHook: 'Suggested Weather Context Hook',
    },
    voice: {
      title: 'Voice Synthesizer & Speech-To-Text',
      subtitle: 'High-fidelity ElevenLabs voiceovers with expressive audio tags and Whisper voice note transcription.',
      ttsTitle: 'Text-to-Speech Engine (sag / ElevenLabs)',
      voiceSelector: 'Selected Voice',
      insertEmotionTag: 'Insert Audio Expression Tags',
      tagsTooltip: 'Click to insert audio nuance tag at cursor',
      inputPlaceholder: 'Enter voice script with audio tags...',
      synthesizeBtn: 'Synthesize Audio Track',
      playbackTitle: 'Waveform Preview & Audio Player',
      whisperTitle: 'Voice Note Transcriber (openai-whisper)',
      whisperDesc: 'Record or upload an idea audio snippet and let Whisper convert it directly into a formatted X thread.',
      recordSimulate: 'Record / Simulate Transcribe',
      transcriptionResult: 'Transcribed Script',
      convertToThread: 'Convert Directly to Thread',
    },
    calendar: {
      title: 'Content Calendar & Peak Posting Windows',
      subtitle: 'Visual weekly dispatch queue with regional peak engagement windows for Riyadh, Dubai, Cairo, and Global.',
      peakHoursTitle: 'Peak Engagement Traffic Windows',
      peakHoursDesc: 'Audience telemetry indicates optimal posting times: 1:00 PM, 8:30 PM, and 11:00 PM GMT+3.',
      bestDays: 'Top Viral Days: Sunday, Tuesday, and Thursday evening',
      consistencyScore: 'Weekly Consistency Target',
      addScheduledSlot: '+ Add Scheduled Post',
      slotTitle: 'Post / Thread Topic',
      slotDay: 'Day',
      slotTime: 'Time Slot',
      slotType: 'Content Type',
    },
    growth: {
      title: 'Advanced Growth Engines & Viral Lab',
      subtitle: '7 High-leverage features: Viral Score Predictor, 6-Formula Hook Engine, Trend Radar, and DM Giveaways.',
      viralScoreTab: 'Viral Score Predictor',
      hooksEngineTab: '6-Formula Hook Engine',
      toneSwitcherTab: 'Tone & Persona Switcher',
      trendsRadarTab: 'Trend Jacking Radar',
      leadMagnetTab: 'Auto-DM Giveaway Studio',
      splitterExportTab: 'Thread Splitter & Export',
      analyzeBtn: 'Analyze Post & Predict Score',
      overallViralScore: 'Overall Viral Readiness Score',
      strengthsTitle: 'Detected Algorithmic Strengths',
      improvementsTitle: 'Actionable Optimization Tips',
      trendJackBtn: 'Trend-Jack Topic',
      dmSimulatorTitle: 'Follower Direct Message Simulation',
      threadSplitterTitle: 'Long Article / Essay Thread Splitter',
      splitAction: 'Auto-Split into 280-char Tweets',
    },
    analytics: {
      title: 'Cost Guardrails & DevOps Automation',
      subtitle: 'Real-time model spend telemetry, budget caps that stop runs at 80%, and automated GitHub issue-to-PR workers.',
      totalSpend: 'Total Monthly Spend',
      costPerPost: 'Average Cost Per Post',
      budgetCap: 'Hard Budget Cap',
      monthlyBurn: 'Projected Monthly Burn',
      safeThreshold: 'Cost Guardrail Safety Cap',
      modelBreakdown: 'Model Cost Breakdown (model-usage)',
      provider: 'Provider',
      model: 'Model',
      tokens: 'Total Tokens',
      costUsd: 'Cost (USD)',
      ghIssuesTitle: 'Autonomous DevOps Workers (gh-issues + github)',
      ghIssuesDesc: 'Feature requests and bug fixes are automatically converted to GitHub issues and solved by worker agents.',
      openIssues: 'Active In-Progress Issues',
      automatedPrs: 'Automated Pull Requests (PRs)',
      cronStatus: 'Cron Watcher Status',
    },
    prd: {
      title: 'MAEK7-Growth Suite Product Requirements (PRD v2.0)',
      subtitle: 'Comprehensive product architecture for MAEK7, target personas, roadmap phases, and monetization model for MENA.',
      executiveSummary: 'Executive Summary',
      problem: 'Current Problem in the Market',
      solution: 'The MAEK7-Growth Suite Solution',
      personasTitle: 'Target Creator Personas',
      userJourneyTitle: 'Creator Journey: From Spark to Viral Post',
      architectureTitle: 'Technical Architecture Diagram',
      roadmapTitle: 'Product Roadmap & Milestones',
      monetizationTitle: 'Pricing & Monetization Plans',
      kpisTitle: 'Key Performance Indicators (KPIs)',
      risksTitle: 'Risk Matrix & Mitigation Strategies',
      planFree: 'Free Starter',
      planPro: 'Creator Pro',
      planTeam: 'Agency & Team',
      selectPlan: 'Select Plan',
    },
    viewMode: {
      mobile: 'Mobile App View',
      desktop: 'Desktop Studio View',
      mobileAppBadge: 'MAEK7 Mobile Native PWA',
    },
    templates: {
      browseTemplates: 'Thread Templates Library',
      templatesLibrary: 'Proven Viral Thread Templates',
      loadTemplate: 'Load Template into Composer',
      estimatedReach: 'Estimated Reach',
    },
  },
  fr: {
    appName: 'MAEK7-Growth Suite',
    appTagline: 'Suite complète de croissance créateur sur X avec application mobile',
    badgeVersion: 'MAEK7 • v2.0 • 2026',
    nav: {
      publisher: 'Moteur de publication & fils',
      memes: 'Studio Memes & GIF',
      visuals: 'Moteur visuel & schémas',
      intelligence: 'Intelligence & contexte',
      voice: 'Studio voix & transcription',
      calendar: 'Calendrier & Heures de pointe',
      growth: 'Outils viraux & croissance (7 atouts)',
      analytics: 'Contrôle des coûts & DevOps',
      prd: 'Dossier PRD & Stratégie',
    },
    common: {
      preview: 'Aperçu en direct',
      generate: 'Générer avec l’IA',
      copied: 'Copié dans le presse-papiers !',
      copyCommand: 'Copier la commande CLI',
      downloadSvg: 'Télécharger SVG',
      downloadPng: 'Télécharger PNG',
      insertToTweet: 'Envoyer au brouillon',
      status: 'Statut',
      active: 'Actif',
      ready: 'Prêt à publier',
      clear: 'Effacer',
      reset: 'Réinitialiser',
      save: 'Enregistrer le brouillon',
      cancel: 'Annuler',
      publishNow: 'Publier via xurl',
      schedule: 'Programmer la publication',
      loading: 'Traitement en cours...',
      search: 'Recherche...',
      all: 'Tous',
      filters: 'Filtres',
      exportMarkdown: 'Exporter en Markdown',
      exportNotion: 'Formater pour Notion',
    },
    publisher: {
      title: 'Moteur de publication et fils de discussion',
      subtitle: 'Publiez, programmez, automatisez les réponses et les sondages avec xurl sans complexité.',
      composeTitle: 'Rédiger le tweet / fil',
      placeholder: 'Quelle idée perspicace souhaitez-vous partager aujourd’hui ?',
      addTweetToThread: '+ Ajouter un tweet au fil',
      tweetNumber: 'Tweet n°',
      pollTitle: 'Ajouter un sondage',
      addOption: '+ Ajouter une option',
      removePoll: 'Supprimer le sondage',
      pollDuration: 'Durée (heures)',
      addMedia: 'Joindre un média (Image / Mème / Audio)',
      autoReplySection: 'Automatisation des réponses intelligentes (xurl reply)',
      autoReplyDesc: 'Réponse automatique immédiate aux nouveaux abonnés ou mots-clés ciblés.',
      autoReplyTrigger: 'Mot-clé déclencheur ou compte',
      autoReplyResponse: 'Texte de réponse automatique',
      autoDmSection: 'Campagnes de messages directs (xurl dm)',
      autoDmDesc: 'Livraison automatique de documents ou guides aux abonnés engagés.',
      searchTrackerTitle: 'Surveillance avancée de X (xurl search)',
      searchQueryPlaceholder: 'ex. : "IA générative" min_faves:50 lang:fr',
      runSearch: 'Lancer la recherche',
      scheduledAt: 'Programmé pour',
      simulatedSuccess: 'Publication simulée avec succès et enregistrée !',
      cliSnippetTitle: 'Commande CLI xurl équivalente',
    },
    memes: {
      title: 'Studio de mèmes et contenus visuels',
      subtitle: 'Plus de 20 modèles mondiaux et régionaux avec typographie précise et suggestion intelligente.',
      selectTemplate: 'Sélectionner un modèle',
      searchTemplates: 'Rechercher des modèles ou thématiques...',
      smartSuggest: 'Suggesteur intelligent de ton (meme-maker suggest)',
      smartSuggestPlaceholder: 'Décrivez votre idée de post (ex. : le code a marché du premier coup sans tests)...',
      smartSuggestBtn: 'Suggérer des mèmes et répliques',
      customizeText: 'Personnaliser le texte',
      fontSize: 'Taille de police',
      textColor: 'Couleur du texte',
      textStroke: 'Bordure du texte',
      uppercase: 'Majuscules / emphase',
      renderSvg: 'Générer l’aperçu du mème',
      gifGrepTitle: 'Moteur GIF & planches contact (gifgrep)',
      gifSearchPlaceholder: 'Rechercher des GIFs pour votre sujet...',
      generateSheet: 'Générer une planche de frames',
    },
    visuals: {
      title: 'Moteur de visuels et diagrammes',
      subtitle: 'Transformez les idées denses en cartes de citation élégantes, statistiques et schémas techniques.',
      cardType: 'Type de ressource visuelle',
      quoteCard: 'Carte de citation premium',
      statCard: 'Carte de statistique et comparaison',
      flowchart: 'Organigramme technique',
      quoteText: 'Texte de la citation ou enseignement',
      quoteAuthor: 'Nom de l’auteur ou identifiant',
      quoteRole: 'Poste / Titre',
      statMetric: 'Métrique principale (ex. : +340%)',
      statLabel: 'Titre de la statistique',
      statComparison: 'Comparaison (Avant vs Après)',
      flowchartSteps: 'Étapes du processus technique',
      themeSelector: 'Thème visuel',
      darkTheme: 'Studio sombre',
      gradientTheme: 'Dégradé moderne',
      lightTheme: 'Éditorial épuré',
      exportCard: 'Exporter la carte en SVG',
    },
    intelligence: {
      title: 'Résumé intelligent et accroches contextuelles',
      subtitle: 'Résumez articles, vidéos YouTube et PDF en 3 angles viraux et intégrez la météo locale.',
      summarizeTab: 'Moteur de résumé (summarize)',
      weatherTab: 'Contexte météo et temporalité (weather)',
      summarizeInputPlaceholder: 'Collez l’URL d’un article, vidéo YouTube ou texte ici...',
      summarizeAction: 'Extraire les angles du fil',
      viralHooksResult: '3 accroches (hooks) virales',
      threadOutlineResult: 'Structure du fil',
      tldrResult: 'Résumé concis (TL;DR)',
      weatherTitle: 'Contextualisation météo en temps réel',
      selectCity: 'Sélectionner une ville cible',
      tempLabel: 'Température',
      feelsLikeLabel: 'Ressenti',
      humidityLabel: 'Humidité',
      suggestedHook: 'Accroche suggérée basée sur la météo',
    },
    voice: {
      title: 'Synthèse vocale & transcription audio',
      subtitle: 'Génération de voix-off ElevenLabs haute fidélité avec balises d’émotions et transcription Whisper.',
      ttsTitle: 'Moteur de synthèse vocale (sag / ElevenLabs)',
      voiceSelector: 'Voix sélectionnée',
      insertEmotionTag: 'Insérer des balises d’expression audio',
      tagsTooltip: 'Cliquez pour insérer une balise d’inflexion audio',
      inputPlaceholder: 'Entrez le script avec les balises vocales...',
      synthesizeBtn: 'Synthétiser la piste audio',
      playbackTitle: 'Lecteur audio et spectre d’ondes',
      whisperTitle: 'Transcription de notes vocales (openai-whisper)',
      whisperDesc: 'Enregistrez une note vocale et Whisper la convertit directement en fil de discussion structuré.',
      recordSimulate: 'Enregistrer / Simuler la transcription',
      transcriptionResult: 'Texte transcrit',
      convertToThread: 'Convertir directement en fil',
    },
    calendar: {
      title: 'Calendrier éditorial & Heures de pointe',
      subtitle: 'File de publication hebdomadaire optimisée selon les pics d’audience régionaux et mondiaux.',
      peakHoursTitle: 'Créneaux d’engagement maximal',
      peakHoursDesc: 'L’analyse de l’audience montre les meilleurs moments de publication : 13h00, 20h30 et 23h00 (GMT+3).',
      bestDays: 'Jours les plus viraux : Dimanche, Mardi et Jeudi soir',
      consistencyScore: 'Score de régularité hebdomadaire',
      addScheduledSlot: '+ Programmer une publication',
      slotTitle: 'Titre ou sujet du post',
      slotDay: 'Jour',
      slotTime: 'Créneau horaire',
      slotType: 'Format de contenu',
    },
    growth: {
      title: 'Laboratoire de croissance et outils viraux (7 Atouts)',
      subtitle: 'Prédicteur de score viral, moteur de 6 formules de crochets, radar de tendances et aimants à leads.',
      viralScoreTab: 'Score de viralité prédictif',
      hooksEngineTab: 'Moteur de 6 formules de crochets',
      toneSwitcherTab: 'Changeur de tonalité',
      trendsRadarTab: 'Radar de tendances (Trend-Jacking)',
      leadMagnetTab: 'Aimants à prospects & DM auto',
      splitterExportTab: 'Découpeur de fil & export',
      analyzeBtn: 'Analyser le post et calculer le score',
      overallViralScore: 'Score de viralité estimé',
      strengthsTitle: 'Points forts algorithmiques détectés',
      improvementsTitle: 'Recommandations d’optimisation',
      trendJackBtn: 'Exploiter la tendance',
      dmSimulatorTitle: 'Simulation de réception de message privé',
      threadSplitterTitle: 'Découpeur d’article long en fil de tweets',
      splitAction: 'Découper en tweets numérotés de 280 car.',
    },
    analytics: {
      title: 'Garde-fous financiers & automatisation DevOps',
      subtitle: 'Télémétrie en temps réel des dépenses LLM avec arrêt automatique à 80% et agents de tâches GitHub.',
      totalSpend: 'Dépense mensuelle totale',
      costPerPost: 'Coût moyen par publication',
      budgetCap: 'Plafond budgétaire',
      monthlyBurn: 'Consommation mensuelle prévue',
      safeThreshold: 'Seuil de sécurité budgétaire',
      modelBreakdown: 'Détail des coûts par modèle (model-usage)',
      provider: 'Fournisseur',
      model: 'Modèle',
      tokens: 'Tokens totaux',
      costUsd: 'Coût (USD)',
      ghIssuesTitle: 'Agents DevOps autonomes (gh-issues + github)',
      ghIssuesDesc: 'Les fonctionnalités et correctifs sont automatiquement transformés en tickets GitHub et résolus.',
      openIssues: 'Tâches actives en cours',
      automatedPrs: 'Demandes de tirage automatisées (PRs)',
      cronStatus: 'Statut du planificateur Cron',
    },
    prd: {
      title: 'Cahier des charges produit (PRD v1.0)',
      subtitle: 'Architecture technique complète, profils utilisateurs, jalons de déploiement et modèle économique.',
      executiveSummary: 'Résumé exécutif',
      problem: 'Problématique actuelle du marché',
      solution: 'La solution X Growth Suite',
      personasTitle: 'Profils créateurs cibles (Personas)',
      userJourneyTitle: 'Parcours créateur : de l’idée au post viral',
      architectureTitle: 'Diagramme d’architecture technique',
      roadmapTitle: 'Feuille de route & étapes clés',
      monetizationTitle: 'Grille tarifaire et monétisation',
      kpisTitle: 'Indicateurs de performance (KPIs)',
      risksTitle: 'Matrice des risques & mesures d’atténuation',
      planFree: 'Gratuit (Starter)',
      planPro: 'Créateur Pro',
      planTeam: 'Agence & Équipe',
      selectPlan: 'Sélectionner cette formule',
    },
    viewMode: {
      mobile: 'Vue application mobile',
      desktop: 'Vue studio bureau',
      mobileAppBadge: 'Application mobile native MAEK7',
    },
    templates: {
      browseTemplates: 'Bibliothèque de modèles de fils',
      templatesLibrary: 'Modèles viraux éprouvés pour X',
      loadTemplate: 'Charger ce modèle dans l’éditeur',
      estimatedReach: 'Portée estimée',
    },
  },
};
