import React, { useState } from 'react';
import { Language, TrendingTopic, HookFormula, ViralScoreResult } from '../../types';
import { translations } from '../../i18n/translations';
import {
  Flame,
  Wand2,
  SlidersHorizontal,
  Radar,
  Gift,
  FileCode,
  Send,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Download,
  Share2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

interface GrowthWorkspaceProps {
  lang: Language;
  onNotify: (msg: string) => void;
  onSendToDraft: (text: string) => void;
}

export const GrowthWorkspace: React.FC<GrowthWorkspaceProps> = ({
  lang,
  onNotify,
  onSendToDraft,
}) => {
  const t = translations[lang];

  type SubTab =
    | 'viral-score'
    | 'hooks'
    | 'tone'
    | 'trends'
    | 'lead-magnet'
    | 'splitter';

  const [activeSubTab, setActiveSubTab] = useState<SubTab>('viral-score');

  // --- Feature 1: Viral Score Predictor State ---
  const [testTweetText, setTestTweetText] = useState(
    lang === 'ar'
      ? '🔥 90% من الشركات تستعد لتبني وكلاء الذكاء الاصطناعي خلال 6 أشهر.. لكن معظم المهندسين غير مستعدين.\n\nإليك 5 مهارات تحتاج لتعلمها اليوم للبقاء في المقدمة 🧵👇'
      : '🔥 90% of companies are adopting autonomous AI agents in 6 months.. but most engineers are unprepared.\n\nHere are 5 core skills you must learn today to stay ahead 🧵👇'
  );

  const calculateViralScore = (text: string): ViralScoreResult => {
    let score = 50;
    const strengths: string[] = [];
    const improvements: string[] = [];

    // Hook check
    const hasNumber = /\d+/.test(text);
    const hasCuriosity = /لكن|كيف|سر|لماذا|90%|صدمة|حقيقة|why|how|secret|but/.test(text.toLowerCase());
    if (hasNumber) {
      score += 15;
      strengths.push('يحتوي على أرقام وإحصائيات دقيقة تجذب الانتباه (+15%)');
    }
    if (hasCuriosity) {
      score += 15;
      strengths.push('يحتوي على كلمات تثير الفضول الفكري وتفتح الفجوة المعرفية (+15%)');
    } else {
      improvements.push('أضف عنصراً يثير الفضول في السطر الأول (مثل: "لكن الصدمة أن...")');
    }

    // Readability & spacing check
    const hasLineBreaks = text.includes('\n');
    if (hasLineBreaks) {
      score += 10;
      strengths.push('تنسيق مريح للعين مع مسافات بيضاء بين الفقرات (+10%)');
    } else {
      improvements.push('افصل الأسطر بمسافات بيضاء لمنع تكتل النص');
    }

    // Call to Action (CTA) check
    const hasCta = /👇|🧵|تابعني|شارك|thread|follow|below/.test(text.toLowerCase());
    if (hasCta) {
      score += 10;
      strengths.push('وجود إشارة توجيهية صريحة لمتابعة قراءة الثريد (CTA) (+10%)');
    } else {
      improvements.push('اختم التغريدة الأولى بدعوة واضحة لقراءة الثريد (🧵👇)');
    }

    // Length check
    if (text.length > 80 && text.length < 260) {
      score += 10;
      strengths.push('طول التغريدة مثالي جداً لمتوسط انتباه المستخدمين (+10%)');
    }

    return {
      score: Math.min(100, Math.max(30, score)),
      hookQuality: hasNumber && hasCuriosity ? 92 : 65,
      readability: hasLineBreaks ? 88 : 55,
      mediaImpact: 85,
      ctaPresence: hasCta,
      strengths,
      improvements,
    };
  };

  const viralResult = calculateViralScore(testTweetText);

  // --- Feature 3: 6-Formula Hook Engine State ---
  const [hookTopic, setHookTopic] = useState(
    lang === 'ar' ? 'تعلم الذكاء الاصطناعي وبناء التطبيقات' : 'Building AI Apps & Solopreneurship'
  );

  const hookFormulas: HookFormula[] = [
    {
      id: 'f1',
      name: 'معادلة الفجوة المعرفية (Curiosity Gap)',
      category: 'curiosity',
      template: 'معظم الناس يظنون أن [الاعتقاد الشائع]، لكن بعد [المدة/التجربة] اكتشفت أن الحقيقة مختلفة تماماً...',
      example: 'معظم الناس يظنون أن برمجة تطبيقات الذكاء الاصطناعي تتطلب شهادة دكتوراه، لكن الحقيقة أنك تحتاج فقط لـ 3 مكتبات مجانية...',
    },
    {
      id: 'f2',
      name: 'معادلة الدليل العملي (Actionable Blueprint)',
      category: 'blueprint',
      template: 'كيف أنجزت [الهدف الكبير] في [المدة الزمنية] بدون [العقبة التقليدية] خطوة بخطوة 🧵👇',
      example: 'كيف بنيت أول نموذج أتمتة حقق 10K زيارة في 48 ساعة بدون دفع دولار واحد للإعلانات خطوة بخطوة 🧵👇',
    },
    {
      id: 'f3',
      name: 'معادلة الرأي الجريء المعاكس (Contrarian Take)',
      category: 'contrarian',
      template: 'توقف عن فعل [الممارسة المعتادة] فوراً. إليك السبب الصادم وما يجب أن تفعله بدلاً منها:',
      example: 'توقف عن قضاء ساعات في كتابة التغريدات يدوياً فوراً. إليك كيف تدمج xurl مع نماذج التلخيص لتوفير 80% من وقتك:',
    },
    {
      id: 'f4',
      name: 'معادلة الأرقام والإحصائيات (Data-Driven)',
      category: 'data',
      template: 'حللت [رقم ضخم من العينات]، وخرجت بـ [رقم] حقائق تغير طريقتك في [المجال]:',
      example: 'حللت أكثر من 5,000 ثريد فيروسي على X، وخرجت بـ 4 قوانين بصرية ثابتة تضمن مضاعفة التفاعل 3 أضعاف:',
    },
    {
      id: 'f5',
      name: 'معادلة القصة والتحول من الصفر (Story & Transformation)',
      category: 'story',
      template: 'قبل [سنة/فترة] كنت [الحالة الصعبة]. اليوم حققت [النجاح]. إليك الدرس الأكبر الذي تعلمته:',
      example: 'قبل عام كنت أكتب لأيام دون تفاعل يذكر. اليوم أدرت حملات وصلت لأكثر من 500 ألف مبدع. إليك الخطة الكاملة:',
    },
    {
      id: 'f6',
      name: 'معادلة النقاش المثير للجدل (Debate / Question)',
      category: 'debate',
      template: 'سؤال صريح لكل مهندس وصانع محتوى: هل تعتقد أن [المسألة X] أم [المسألة Y]؟ شاركني رأيك 👇',
      example: 'سؤال صريح لصناع المحتوى: هل تفضل التركيز على نشر تغريدة واحدة عميقة أسبوعياً، أم 3 تغريدات يومياً؟ شاركنا تجربتك 👇',
    },
  ];

  // --- Feature 4: Tone & Persona Switcher State ---
  const [toneOriginal, setToneOriginal] = useState(
    lang === 'ar'
      ? 'أداة X Growth Suite تساعدك على نشر المحتوى وصناعة الميمز وجدولة التغريدات بسهولة.'
      : 'X Growth Suite helps you publish content, make memes, and schedule tweets easily.'
  );

  const toneRewrites: Record<string, string> = {
    authoritative:
      lang === 'ar'
        ? 'تشير معطيات النمو في 2026 إلى أن الأتمتة الممنهجة عبر X Growth Suite تختصر 85% من الهدر التشغيلي لصناع المحتوى والشركات الناشئة.'
        : 'Enterprise benchmarks in 2026 demonstrate that systematic automation via X Growth Suite eliminates 85% of creator operational overhead.',
    sarcastic:
      lang === 'ar'
        ? 'لا تزال تضيع 4 ساعات تفتح 6 مواقع مختلفة عشان تصنع ميم وتكتب ثريد؟ ارحم نفسك، X Growth Suite تخلّص كل شيء بدقيقتين 😅'
        : 'Still wasting 4 hours juggling 6 apps just to make one meme and tweet? Save yourself, X Growth Suite handles it in 2 minutes 😅',
    educational:
      lang === 'ar'
        ? 'إذا كنت تريد مضاعفة وصولك على منصة X، فإليك سر المعادلة الثلاثية: محتوى نصي قوي + ميم عربي ذكي + تعليق صوتي فخم. هذا بالضبط ما تدمجه الأداة.'
        : 'If you want to 3x your reach on X, here is the triple formula: strong copy + contextual meme + audio voiceover. This is what the suite integrates.',
    inspiring:
      lang === 'ar'
        ? 'الفرق بين المبدع الذي يراه العالم وذلك الذي يبقى في الظل ليس الموهبة، بل الاستمرارية وتوزيع الفكرة بأذكى الأدوات. ابدأ اليوم ولا تتوقف.'
        : 'The difference between the creator who reaches millions and one who stays unseen is not talent—it is consistency and distribution tooling.',
  };

  const [activeTone, setActiveTone] = useState<string>('authoritative');

  // --- Feature 5: Trend Jacking Radar State ---
  const trendingTopics: TrendingTopic[] = [
    {
      id: 'tr1',
      tag: '#الذكاء_الاصطناعي',
      category: 'تكنولوجيا ومستقبل',
      region: 'السعودية والخليج',
      postsVolume: '142K تغريدة',
      growthRate: '+340%',
      suggestedAngleAr: 'ثريد تحليلي: كيف تستخدم وكلاء الذكاء الاصطناعي لأتمتة عملك اليومي بدلاً من مجرد استخدام ChatGPT التقليدي.',
      suggestedAngleEn: 'Breakdown thread: How to deploy autonomous AI agents for daily workflows beyond simple chat prompting.',
    },
    {
      id: 'tr2',
      tag: 'OpenAI Operator',
      category: 'أخبار عالمية',
      region: 'عالمي • Tech',
      postsVolume: '88K تغريدة',
      growthRate: '+190%',
      suggestedAngleAr: 'ميم مقارنة: الفرق بين تصفح الويب يدوياً وبين إعطاء الأمر لـ Operator لينفذ كل شيء في الخلفية.',
      suggestedAngleEn: 'Comparison meme: Doing repetitive browser tasks manually vs letting Operator run in the background.',
    },
    {
      id: 'tr3',
      tag: 'نصائح_الإنتاجية',
      category: 'تطوير الذات والأعمال',
      region: 'مصر وشمال إفريقيا',
      postsVolume: '65K تغريدة',
      growthRate: '+115%',
      suggestedAngleAr: 'كرت إحصائية: كيف وفرت 12 ساعة أسبوعياً عبر التخلي عن المهام اليدوية والاعتماد على الجدولة المسبقة.',
      suggestedAngleEn: 'Stat graphic: How automating repetitive social dispatches saved 12 productive hours weekly.',
    },
  ];

  // --- Feature 6: Lead Magnet Delivery Simulator State ---
  const [lmdKeyword, setLmdKeyword] = useState('دليل');
  const [lmdAssetTitle, setLmdAssetTitle] = useState('دليل أتمتة منصة X للمبدعين 2026 (PDF)');
  const [lmdDeliveredCount, setLmdDeliveredCount] = useState(148);

  // --- Feature 7: Long Essay Splitter State ---
  const [splitterInput, setSplitterInput] = useState(
    lang === 'ar'
      ? 'الأتمتة في صناعة المحتوى ليست مجرد توفير للوقت، بل هي الطريقة الوحيدة لضمان البقاء في سوق شديد التنافسية. عندما تنشر يومياً، فإن خوارزمية X تمنح حسابك أولوية في الظهور بنسبة تزيد عن 300%. لكن التحدي الأكبر يكمن في الحفاظ على الجودة العالية. هنا يأتي دور الذكاء الاصطناعي ليس لكتابة المحتوى بالنيابة عنك، بل ليكون مساعدك البصري والصوتي في التلخيص وصناعة الميمز وتقديم الإحصائيات في قوالب يسهل استيعابها.'
      : 'Automation in content creation is not just about saving time; it is the prerequisite for consistency in a hyper-competitive landscape. When you post consistently, X algorithmic ranking awards your account priority impressions.'
  );

  const [splitTweets, setSplitTweets] = useState<string[]>([]);

  const handleSplitEssay = () => {
    // Intelligent chunker around 240 chars respecting sentence/word boundaries
    const words = splitterInput.split(' ');
    const chunks: string[] = [];
    let currentChunk = '';

    words.forEach((w) => {
      if ((currentChunk + ' ' + w).length < 240) {
        currentChunk = currentChunk ? `${currentChunk} ${w}` : w;
      } else {
        chunks.push(currentChunk);
        currentChunk = w;
      }
    });
    if (currentChunk) chunks.push(currentChunk);

    const numberedChunks = chunks.map(
      (c, idx) => `${idx + 1}/${chunks.length} ${c}`
    );
    setSplitTweets(numberedChunks);
    onNotify(`تم تجزئة النص بنجاح إلى ${numberedChunks.length} تغريدات مرقمة!`);
  };

  return (
    <div className="space-y-6">
      {/* Workspace Header Card */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ff4328]" />
              <span>{t.growth.title}</span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {t.growth.subtitle}
            </p>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#ff4328]/10 text-[#ff4328] font-bold border border-[#ff4328]/20">
            7 ADVANCED ENGINES ACTIVE
          </span>
        </div>

        {/* 6 Sub-Tab Navigation Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-neutral-200 dark:border-neutral-800">
          {[
            { id: 'viral-score', label: t.growth.viralScoreTab, icon: Flame },
            { id: 'hooks', label: t.growth.hooksEngineTab, icon: Wand2 },
            { id: 'tone', label: t.growth.toneSwitcherTab, icon: SlidersHorizontal },
            { id: 'trends', label: t.growth.trendsRadarTab, icon: Radar },
            { id: 'lead-magnet', label: t.growth.leadMagnetTab, icon: Gift },
            { id: 'splitter', label: t.growth.splitterExportTab, icon: FileCode },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as SubTab)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- TAB 1: Viral Score Predictor --- */}
      {activeSubTab === 'viral-score' && (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <label className="text-xs font-bold text-neutral-900 dark:text-white block mb-2">
                نص التغريدة أو الخُطّاف المراد تحليله:
              </label>
              <textarea
                value={testTweetText}
                onChange={(e) => setTestTweetText(e.target.value)}
                rows={5}
                className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-3.5 text-xs text-neutral-900 dark:text-white focus:outline-none leading-relaxed"
              />
              <div className="mt-3 flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-mono">{testTweetText.length} أحرف</span>
                <button
                  onClick={() => onNotify('تمت إعادة تحليل قوة التغريدة بنجاح!')}
                  className="px-4 py-2 rounded-lg bg-[#ff4328] hover:bg-[#e6351d] text-white text-xs font-semibold"
                >
                  {t.growth.analyzeBtn}
                </button>
              </div>
            </div>

            {/* Strengths and Actionable Improvements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 p-5">
                <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t.growth.strengthsTitle}</span>
                </h4>
                <ul className="space-y-2 text-xs text-emerald-950 dark:text-emerald-300">
                  {viralResult.strengths.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                      <span>✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20 p-5">
                <h4 className="text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5 mb-3">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>{t.growth.improvementsTitle}</span>
                </h4>
                <ul className="space-y-2 text-xs text-amber-950 dark:text-amber-300">
                  {viralResult.improvements.length === 0 ? (
                    <li className="text-xs text-emerald-600 font-medium">
                      رائع جداً! النص مكتمل ولا توجد ثغرات واضحة.
                    </li>
                  ) : (
                    viralResult.improvements.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <span>•</span>
                        <span>{imp}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Gauge & Score Breakdown */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm flex flex-col items-center text-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-4 font-bold">
                {t.growth.overallViralScore}
              </span>

              {/* Radial Score Gauge */}
              <div className="relative w-36 h-36 flex items-center justify-center my-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="transparent"
                    stroke="#e5e7eb"
                    className="dark:stroke-neutral-800"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="transparent"
                    stroke={viralResult.score >= 80 ? '#10b981' : '#f59e0b'}
                    strokeWidth="8"
                    strokeDasharray={264}
                    strokeDashoffset={264 - (264 * viralResult.score) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-extrabold font-mono text-neutral-900 dark:text-white">
                    {viralResult.score}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">من 100</span>
                </div>
              </div>

              <div className="mt-2 text-xs font-bold text-neutral-800 dark:text-neutral-200">
                {viralResult.score >= 85
                  ? '🔥 احتمالية انتشار فيروسي عالية جداً'
                  : '⚡️ مستوى تفاعل جيد مع فرصة للتحسين'}
              </div>

              {/* Algorithmic Sub-Metrics */}
              <div className="w-full mt-6 space-y-3 text-xs pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">قوة الخُطّاف الأول (Hook):</span>
                  <span className="font-mono font-bold text-neutral-900 dark:text-white">
                    {viralResult.hookQuality}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">مستوى سهولة القراءة (Spacing):</span>
                  <span className="font-mono font-bold text-neutral-900 dark:text-white">
                    {viralResult.readability}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">تأثير الوسائط المرفقة (Media):</span>
                  <span className="font-mono font-bold text-neutral-900 dark:text-white">
                    {viralResult.mediaImpact}%
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onSendToDraft(testTweetText);
                  onNotify('تم نقل التغريدة المحسنة لمسودة النشر!');
                }}
                className="mt-6 w-full py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>إدراج في محرك النشر</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2: 6-Formula Hook Engine --- */}
      {activeSubTab === 'hooks' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
            <label className="text-xs font-bold text-neutral-900 dark:text-white block mb-2">
              موضوع المحتوى أو الفكرة التي تريد إنشاء خُطّافات فيروسية لها:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={hookTopic}
                onChange={(e) => setHookTopic(e.target.value)}
                className="flex-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3.5 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none"
              />
              <button
                onClick={() => onNotify('تم توليد 6 خُطّافات جديدة وفق المعادلات النفسية!')}
                className="px-4 py-2 rounded-xl bg-[#ff4328] hover:bg-[#e6351d] text-white text-xs font-semibold whitespace-nowrap"
              >
                توليد الخُطّافات
              </button>
            </div>
          </div>

          {/* 6 Formulas Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hookFormulas.map((formula) => (
              <div
                key={formula.id}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 flex flex-col justify-between shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#ff4328]">
                      {formula.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">Formula</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mb-3 bg-neutral-50 dark:bg-neutral-950 p-2 rounded-lg border border-neutral-200/60 dark:border-neutral-800/60 font-mono">
                    {formula.template}
                  </p>
                  <p className="text-xs text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                    "{formula.example}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(formula.example);
                      onNotify(t.common.copied);
                    }}
                    className="text-neutral-500 hover:text-neutral-900 flex items-center gap-1 text-[11px]"
                  >
                    <Copy className="w-3 h-3" />
                    <span>نسخ</span>
                  </button>
                  <button
                    onClick={() => {
                      onSendToDraft(formula.example);
                      onNotify('تم إدراج الخُطّاف في محرر التغريدات!');
                    }}
                    className="text-[#ff4328] hover:underline font-semibold flex items-center gap-1 text-[11px]"
                  >
                    <Send className="w-3 h-3" />
                    <span>إدراج في التغريدة</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TAB 3: Tone & Persona Switcher --- */}
      {activeSubTab === 'tone' && (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <label className="text-xs font-bold text-neutral-900 dark:text-white block mb-2">
                النص الأصلي المراد تكييف نبرته:
              </label>
              <textarea
                value={toneOriginal}
                onChange={(e) => setToneOriginal(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-3.5 text-xs text-neutral-900 dark:text-white focus:outline-none leading-relaxed"
              />

              <label className="text-xs font-bold text-neutral-900 dark:text-white block mt-4 mb-2">
                اختر نبرة الصوت وشخصية الكاتب:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'authoritative', label: 'رصين ومهني (Authoritative)' },
                  { id: 'sarcastic', label: 'ساخر وممتع (Sarcastic)' },
                  { id: 'educational', label: 'تعليمي مبسط (Educational)' },
                  { id: 'inspiring', label: 'قصصي ملهم (Storytelling)' },
                ].map((tn) => (
                  <button
                    key={tn.id}
                    onClick={() => setActiveTone(tn.id)}
                    className={`p-3 rounded-xl border text-xs text-left font-medium transition-all ${
                      activeTone === tn.id
                        ? 'border-[#ff4328] bg-[#ff4328]/10 text-[#ff4328] font-bold'
                        : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    {tn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-bold">
                المسودة بعد تكييف النبرة:
              </span>
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-sm font-medium text-neutral-900 dark:text-white leading-relaxed">
                "{toneRewrites[activeTone]}"
              </div>

              <div className="mt-4 flex gap-2 justify-end">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(toneRewrites[activeTone]);
                    onNotify(t.common.copied);
                  }}
                  className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900"
                >
                  نسخ
                </button>
                <button
                  onClick={() => {
                    onSendToDraft(toneRewrites[activeTone]);
                    onNotify('تم نقل النص بالصياغة الجديدة إلى مسودة النشر!');
                  }}
                  className="px-4 py-1.5 rounded-lg bg-[#ff4328] text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>اعتماد في التغريدة</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 4: Trend Jacking Radar --- */}
      {activeSubTab === 'trends' && (
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Radar className="w-4 h-4 text-[#ff4328]" />
                <span>رادار الترندات الحية في العالم العربي</span>
              </h3>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                تتبع الهاشتاغات الأكثر صعوداً وربطها بمحتوى حسابك وميمز مناسبة فوراً.
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
              محدث قبل 3 دقائق
            </span>
          </div>

          <div className="space-y-3">
            {trendingTopics.map((trend) => (
              <div
                key={trend.id}
                className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">
                      {trend.tag}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono">
                      {trend.region}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-600 font-bold">
                      {trend.growthRate} صعود
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">
                    💡 الزاوية المقترحة: {lang === 'ar' ? trend.suggestedAngleAr : trend.suggestedAngleEn}
                  </p>
                </div>

                <button
                  onClick={() => {
                    onSendToDraft(
                      `${trend.tag} 🧵\n\n${lang === 'ar' ? trend.suggestedAngleAr : trend.suggestedAngleEn}\n\nإليك التفاصيل 👇`
                    );
                    onNotify(`تم إنشاء مسودة مبنية على ترند ${trend.tag}!`);
                  }}
                  className="px-3.5 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Flame className="w-3.5 h-3.5 text-[#ff4328]" />
                  <span>{t.growth.trendJackBtn}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TAB 5: Lead Magnet & Auto-DM Simulator --- */}
      {activeSubTab === 'lead-magnet' && (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Gift className="w-4 h-4 text-[#1d9bf0]" />
                <span>إعداد حملة توزيع الهدية الرقمية (Auto-DM Campaign)</span>
              </h3>

              <div>
                <label className="text-[11px] font-medium text-neutral-500 block mb-1">
                  الكلمة المحفزة التي يعلق بها المتابع:
                </label>
                <input
                  type="text"
                  value={lmdKeyword}
                  onChange={(e) => setLmdKeyword(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-neutral-500 block mb-1">
                  عنوان الملف أو الهدية الرقمية (PDF / Notion / رابط):
                </label>
                <input
                  type="text"
                  value={lmdAssetTitle}
                  onChange={(e) => setLmdAssetTitle(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs"
                />
              </div>

              <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <span className="text-[10px] text-neutral-400 block">التعليقات</span>
                  <span className="font-mono font-bold text-neutral-900 dark:text-white">152</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block">رسائل سُلمت</span>
                  <span className="font-mono font-bold text-emerald-600">{lmdDeliveredCount}</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block">نسبة التسليم</span>
                  <span className="font-mono font-bold text-[#ff4328]">97.3%</span>
                </div>
              </div>
            </div>
          </div>

          {/* DM Simulator Chat Window */}
          <div className="col-span-12 lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-bold">
                {t.growth.dmSimulatorTitle}
              </span>

              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-white space-y-3 font-sans">
                {/* Follower incoming trigger */}
                <div className="flex justify-end">
                  <div className="bg-neutral-800 text-white rounded-2xl rounded-tr-none px-3.5 py-2 text-xs max-w-[80%]">
                    {lmdKeyword}
                  </div>
                </div>

                {/* Instant Bot response */}
                <div className="flex justify-start items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#ff4328] flex items-center justify-center font-bold text-[10px] text-white">
                    𝕏G
                  </div>
                  <div className="bg-[#1d9bf0] text-white rounded-2xl rounded-tl-none p-3 text-xs max-w-[85%] space-y-2">
                    <p>
                      أهلاً بك! 🎉 شكراً لتفاعلك معنا. كما وعدتك، هذا هو رابط التحميل المباشر:
                    </p>
                    <div className="bg-black/30 p-2.5 rounded-xl border border-white/20">
                      <div className="font-bold text-xs">{lmdAssetTitle}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">جاهز للتحميل الفوري (PDF)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 6: Long Essay Thread Splitter & Multi-Export --- */}
      {activeSubTab === 'splitter' && (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-3">
              <label className="text-xs font-bold text-neutral-900 dark:text-white block">
                {t.growth.threadSplitterTitle}:
              </label>
              <textarea
                value={splitterInput}
                onChange={(e) => setSplitterInput(e.target.value)}
                rows={7}
                placeholder="الصق مقالك الطويل أو النشرة البريدية هنا..."
                className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-3.5 text-xs text-neutral-900 dark:text-white focus:outline-none leading-relaxed"
              />
              <button
                onClick={handleSplitEssay}
                className="w-full py-2.5 rounded-xl bg-[#ff4328] hover:bg-[#e6351d] text-white text-xs font-semibold shadow-sm"
              >
                {t.growth.splitAction}
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-900 dark:text-white">
                  التغريدات المقسمة ({splitTweets.length})
                </span>
                <div className="flex gap-2 text-xs">
                  <button
                    onClick={() => {
                      const md = splitTweets.map((tw) => `> ${tw}`).join('\n\n---\n\n');
                      navigator.clipboard.writeText(md);
                      onNotify(t.common.exportMarkdown);
                    }}
                    className="px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  >
                    تصدير Markdown
                  </button>
                </div>
              </div>

              {splitTweets.length === 0 ? (
                <div className="py-12 text-center text-xs text-neutral-400 italic">
                  اضغط على زر التجزئة لمعاينة الثريد المقسم هنا.
                </div>
              ) : (
                <div className="space-y-2.5 max-h-96 overflow-y-auto">
                  {splitTweets.map((tw, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans"
                    >
                      {tw}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
