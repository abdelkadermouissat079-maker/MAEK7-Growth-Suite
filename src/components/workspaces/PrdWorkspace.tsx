import React, { useState } from 'react';
import { Language } from '../../types';
import { translations } from '../../i18n/translations';
import {
  CheckCircle2,
  TrendingUp,
  Target,
  Shield,
  Layers,
  ArrowRight,
  Zap,
  Users,
  Compass,
} from 'lucide-react';

interface PrdWorkspaceProps {
  lang: Language;
  onNotify: (msg: string) => void;
}

export const PrdWorkspace: React.FC<PrdWorkspaceProps> = ({ lang, onNotify }) => {
  const t = translations[lang];

  const [activePersonaIdx, setActivePersonaIdx] = useState(0);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const personas = [
    {
      name: lang === 'ar' ? 'صانع محتوى تقني' : 'Tech Creator',
      role: 'عمر، 27 سنة • 85K متابع',
      color: '#0a84ff',
      quote:
        lang === 'ar'
          ? 'أريد أن أكتب الفكرة فقط، والأداة تتكفل بتنسيق الثريد، الميمز والصوت في دقائق.'
          : 'I want to write the idea, and have the tool handle threads, memes, and voice in minutes.',
      goals: [
        'مضاعفة الوصول بدون الحاجة لفريق مونتاج أو مصممين',
        'تحويل المقالات والشروحات التقنية لثريدات بصرية تفاعلية',
        'نشر يومي مؤتمت بجودة عالية وثابتة',
      ],
      pains: [
        'تكلفة اشتراك X API الباهظة ($200 شهرياً)',
        'صناعة الميمز اليدوية تأخذ ساعات طويلة يومياً',
        'ندرة أدوات التعليق الصوتي والتلخيص الداعمة للعربية الفصحى',
      ],
    },
    {
      name: lang === 'ar' ? 'مسوقة لشركة SaaS B2B' : 'SaaS Marketer',
      role: 'سارة، 31 سنة • مديرة نمو',
      color: '#ff4328',
      quote:
        lang === 'ar'
          ? 'أحتاج لوحة تحكم واحدة لإدارة صوت علامتنا على X وتوليد Leads عبر الخاص تلقائياً.'
          : 'I need one dashboard to manage our brand voice on X and deliver lead magnets automatically.',
      goals: [
        'جدولة حملات محتوى مخصصة لثلاثة أسواق عربية كبرى',
        'تتبع تغريدات المنافسين وتلخيصها واستخراج الزوايا الفائزة',
        'تقارير نمو دورية وتتبع تكاليف الذكاء الاصطناعي',
      ],
      pains: [
        'صعوبة البحث العربي المتقدم في أدوات الجدولة الأجنبية',
        'التشتت بين اشتراكات برمجية متعددة ومكلفة',
        'عدم وجود نظام أتمتة ردود ورسائل خاصة موثوق',
      ],
    },
    {
      name: lang === 'ar' ? 'كاتب نشرة بريدية ومدون' : 'Newsletter Writer',
      role: 'ياسين، 24 سنة • صانع محتوى مستقل',
      color: '#0a7a42',
      quote:
        lang === 'ar'
          ? 'المحتوى العميق موجود عندي، أحتاج فقط من يغلّفه بأسلوب بصري وفيروسي يجذب القراء.'
          : 'The deep insights exist in my drafts; I just need intelligent packaging to make them viral.',
      goals: [
        'تحويل كل عدد من النشرة البريدية لثريد متكامل وكروت اقتباس',
        'إضافة تعليق صوتي فخم للمقالات لزيادة التفاعل',
        'أتمتة تسليم ملفات الـ PDF للمتابعين الذين يعلقون بكلمة محددة',
      ],
      pains: [
        'معاناة تنسيق النصوص العربية في أدوات التصميم العالمية',
        'ضعف أدوات الرسوم البيانية البسيطة',
        'محدودية الوقت للترويج والنشر المتواصل',
      ],
    },
  ];

  const currentPersona = personas[activePersonaIdx];

  const journeySteps = [
    { step: '01', title: 'التقاط الفكرة', desc: 'رابط مقال، يوتيوب، أو فكرة مسجلة بالصوت', tool: 'summarize + whisper', time: '20 ث' },
    { step: '02', title: 'فهم السياق', desc: 'تحليل المحتوى وربطه بحالة الطقس والوقت', tool: 'weather context', time: '10 ث' },
    { step: '03', title: 'صياغة الزوايا', desc: '3 خُطّافات فيروسية وهيكل ثريد متكامل', tool: 'LLM Engine', time: '20 ث' },
    { step: '04', title: 'إنتاج المرئيات', desc: 'ميم عربي بالخط المناسب + إنفوجرافيك', tool: 'meme-maker + visualize', time: '40 ث' },
    { step: '05', title: 'إضافة الصوت', desc: 'تعليق صوتي مع وسوم المشاعر [whispers]', tool: 'sag / ElevenLabs', time: '15 ث' },
    { step: '06', title: 'النشر المؤتمت', desc: 'نشر فوري أو جدولة مع استطلاع رأي', tool: 'xurl post / media', time: '5 ث' },
    { step: '07', title: 'المتابعة والتكلفة', desc: 'ردود ذكية وتتبع ميزانية النماذج', tool: 'model-usage + xurl reply', time: 'مستمر' },
  ];

  const pricingTiers = [
    {
      name: t.prd.planFree,
      price: '$0',
      period: 'مجاناً دائماً',
      posts: '20 تغريدة / شهرياً',
      features: ['محرك xurl للنشر المباشر', 'قوالب الميمز الأساسية (1 ميم يومياً)', 'تلخيص 5 روابط شهرياً', 'علامة مائية خفيفة'],
      cta: 'ابدأ مجاناً',
      popular: false,
    },
    {
      name: t.prd.planPro,
      price: billingCycle === 'annual' ? '$15' : '$19',
      period: billingCycle === 'annual' ? '/ شهرياً (تدفع سنوياً)' : '/ شهرياً',
      posts: '300 تغريدة / شهرياً',
      features: [
        'جميع محركات النشر والميمز بلا حدود',
        '60 دقيقة تعليق صوتي عالي الجودة عبر ElevenLabs',
        'كروت اقتباس ومخططات تقنية غير محدودة',
        'أتمتة الردود والرسائل الخاصة (DM Automations)',
        'بدون علامة مائية + حماية الميزانية بـ Guardrail',
      ],
      cta: 'اختر باقة المحترف',
      popular: true,
    },
    {
      name: t.prd.planTeam,
      price: billingCycle === 'annual' ? '$39' : '$49',
      period: billingCycle === 'annual' ? '/ شهرياً (تدفع سنوياً)' : '/ شهرياً',
      posts: '1,000 تغريدة + 3 مقاعد عمل',
      features: [
        'كل مزايا باقة المحترف',
        'مساحات عمل مشتركة للفِرق والوكالات',
        'تفريغ ملاحظات صوتية غير محدود عبر Whisper',
        'أتمتة مهام التطوير عبر GitHub Issues',
        'دعم فني خاص على مدار الساعة',
      ],
      cta: 'اختر باقة الوكالات',
      popular: false,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#ff4328]/10 text-[#ff4328] font-bold">
            PRD V1.0 • APPROVED ARCHITECTURE
          </span>
          <span className="text-xs font-mono text-neutral-400">
            MENA FIRST • CREATOR ECONOMY
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
          {t.prd.title}
        </h1>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          {t.prd.subtitle}
        </p>

        {/* Executive Summary 2-Column Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-bold">
              {t.prd.problem}
            </span>
            <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              صانع المحتوى العربي يواجه حاجز تكلفة X API الباهظ ($200 شهرياً)، غياب أدوات الميمز المعربة، والتشتت المرهق بين 6 أدوات أجنبية لا تفهم لغة وثقافة المنطقة.
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 font-bold block mb-2">
              {t.prd.solution}
            </span>
            <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              واجهة موحدة مدعومة بـ 6 محركات: نشر ذكي عبر xurl، استوديو ميمز معرب، رسوم بيانية، صوت عاطفي بـ ElevenLabs، وتتبع تكلفة صارم يضمن عدم تجاوز $0.08 للتغريدة.
            </p>
          </div>
        </div>
      </div>

      {/* Target Personas Section */}
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#ff4328]" />
          <span>{t.prd.personasTitle}</span>
        </h2>

        {/* Persona Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-neutral-100 dark:border-neutral-800">
          {personas.map((p, i) => (
            <button
              key={i}
              onClick={() => setActivePersonaIdx(i)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
                activePersonaIdx === i
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
              <span>{p.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Persona Detail */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 space-y-3">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              {currentPersona.role}
            </span>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              {currentPersona.name}
            </h3>
            <p className="text-xs italic text-neutral-600 dark:text-neutral-400 border-r-2 pr-3 leading-relaxed border-[#ff4328]">
              "{currentPersona.quote}"
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <span className="text-xs font-bold text-emerald-600 mb-2 block">
                الأهداف الأساسية:
              </span>
              <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300">
                {currentPersona.goals.map((g, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <span className="text-xs font-bold text-red-500 mb-2 block">
                التحديات والآلام الحالية:
              </span>
              <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300">
                {currentPersona.pains.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Journey Pipeline */}
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#ff4328]" />
          <span>{t.prd.userJourneyTitle}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {journeySteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-col justify-between h-44 transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                  <span>{step.step}</span>
                  <span className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-bold">
                    {step.time}
                  </span>
                </div>
                <div className="mt-2 text-xs font-bold text-neutral-900 dark:text-white">
                  {step.title}
                </div>
                <div className="mt-1 text-[11px] text-neutral-500 leading-snug">
                  {step.desc}
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60">
                <span className="inline-block text-[10px] font-mono text-[#ff4328] font-semibold truncate w-full">
                  {step.tool}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing & Monetization Calculator */}
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.prd.monetizationTitle}
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              تسعير شفاف يغطي تكاليف الاستهلاك الذكي ويوفر أكثر من 85% على صناع المحتوى.
            </p>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 p-1 text-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-500'
              }`}
            >
              شهرياً
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 ${
                billingCycle === 'annual'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-500'
              }`}
            >
              <span>سنوياً</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500 text-white font-mono">
                وفر 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 flex flex-col justify-between border transition-all ${
                tier.popular
                  ? 'border-neutral-900 dark:border-white bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-xl scale-102'
                  : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 text-neutral-900 dark:text-white'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-sm">{tier.name}</h3>
                  {tier.popular && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#ff4328] text-white font-bold">
                      الأكثر طلباً
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 my-3 font-mono">
                  <span className="text-3xl font-extrabold">{tier.price}</span>
                  <span className="text-xs opacity-70">{tier.period}</span>
                </div>

                <div className="text-xs font-semibold mb-4 opacity-80 font-mono">
                  {tier.posts}
                </div>

                <ul className="space-y-2 text-xs opacity-90 my-5">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onNotify(`تم اختيار باقة ${tier.name}`)}
                className={`mt-6 w-full py-2.5 rounded-xl text-xs font-bold transition-transform active:scale-95 ${
                  tier.popular
                    ? 'bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white shadow-md'
                    : 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
