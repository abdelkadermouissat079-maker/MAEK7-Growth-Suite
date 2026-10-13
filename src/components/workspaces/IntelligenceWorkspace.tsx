import React, { useState } from 'react';
import { Language, WeatherCondition } from '../../types';
import { translations } from '../../i18n/translations';
import { FileText, CloudSun, Sparkles, Copy, Check, Send, ExternalLink, RefreshCw } from 'lucide-react';

interface IntelligenceWorkspaceProps {
  lang: Language;
  onNotify: (msg: string) => void;
  onSendToDraft: (text: string) => void;
}

export const IntelligenceWorkspace: React.FC<IntelligenceWorkspaceProps> = ({
  lang,
  onNotify,
  onSendToDraft,
}) => {
  const t = translations[lang];

  const [activeSubTab, setActiveSubTab] = useState<'summarize' | 'weather'>('summarize');

  // Summarize input & output state
  const [summarizeUrl, setSummarizeUrl] = useState(
    'https://openai.com/index/introducing-operator'
  );
  const [isProcessing, setIsProcessing] = useState(false);

  const [viralHooks, setViralHooks] = useState<string[]>([
    '🔥 90% من الشركات تستعد لتبني وكلاء الذكاء الاصطناعي (AI Agents) خلال 6 أشهر.. لكن هل نحن مستعدون كمهندسين؟ إليك ما يغير اللعبة:',
    '💡 قبل عام، كان الذكاء الاصطناعي يجيبك بنص، اليوم ينفذ مهامك كاملة داخل المتصفح. هذا الملخص يختصر لك مستقبل العمل الرقمي 👇',
    '🚨 كيف تختصر 4 ساعات عمل يومياً باستخدام المتصفح الآلي؟ تحليل لأهم تحديث أطلقته OpenAI هذا الأسبوع 🧵',
  ]);

  const [threadOutline, setThreadOutline] = useState<string[]>([
    '1/ المفهوم: ما هو Operator وكيف يختلف عن النماذج التقليدية.',
    '2/ القدرات: تصفح الويب، حجز التذاكر، ملء الاستمارات المعقدة وتنفيذ الكود.',
    '3/ الأمان: كيف تضمن عدم سرقة البيانات وحسابات الدخول.',
    '4/ خلاصة لصناع المحتوى والمهندسين: أين تبدأ اليوم لتكون في المقدمة.',
  ]);

  // Weather context data
  const weatherPresets: WeatherCondition[] = [
    {
      city: 'الرياض',
      country: 'SA',
      tempC: 28,
      feelsLikeC: 27,
      condition: 'صحو معتدل',
      humidity: 18,
      windSpeed: 14,
      suggestedHookAr: 'أجواء الرياض المسائية معتدلة اليوم.. أنسب وقت لاحتساء قهوتك وقراءة هذا الثريد عن أتمتة مهامك ☕️🌃',
      suggestedHookEn: 'Pleasant evening in Riyadh today—perfect time to sip your coffee and dive into this productivity thread ☕️',
      suggestedHookFr: 'Soirée agréable à Riyad aujourd’hui—le moment idéal pour un café et ce fil de productivité ☕️',
    },
    {
      city: 'دبي',
      country: 'AE',
      tempC: 31,
      feelsLikeC: 34,
      condition: 'مشمس رطب',
      humidity: 52,
      windSpeed: 18,
      suggestedHookAr: 'مع وتيرة دبي المتسارعة وأجوائها الحارة، الأتمتة ليست رفاهية بل ضرورة لإنقاذ ساعات عملك اليومية ⚡️',
      suggestedHookEn: 'With Dubai’s rapid pace, automation is not a luxury but a necessity to reclaim your daily hours ⚡️',
      suggestedHookFr: 'Avec le rythme accéléré de Dubaï, l’automatisation est essentielle pour sauver votre temps ⚡️',
    },
    {
      city: 'القاهرة',
      country: 'EG',
      tempC: 25,
      feelsLikeC: 24,
      condition: 'غائم جزئياً',
      humidity: 45,
      windSpeed: 12,
      suggestedHookAr: 'مساء هادئ في القاهرة.. جمعت لك في هذا الثريد أفضل 5 ممارسات لمضاعفة وصولك في X بدون ميزانية إعلانية 🇪🇬📈',
      suggestedHookEn: 'Calm evening in Cairo.. here are the top 5 proven practices to boost your organic reach on X 🇪🇬📈',
      suggestedHookFr: 'Douce soirée au Caire.. voici les 5 meilleures pratiques pour booster votre portée sur X 🇪🇬📈',
    },
    {
      city: 'الدار البيضاء',
      country: 'MA',
      tempC: 22,
      feelsLikeC: 21,
      condition: 'نسيم ساحلي منعش',
      humidity: 65,
      windSpeed: 20,
      suggestedHookAr: 'أجواء ساحلية مميزة في كازابلانكا.. فرصة مثالية لتخطيط استراتيجية المحتوى للشهر القادم 🌊🇲🇦',
      suggestedHookEn: 'Refreshing coastal breeze in Casablanca—a great moment to blueprint your upcoming content calendar 🌊🇲🇦',
      suggestedHookFr: 'Brise côtière revigorante à Casablanca—l’occasion parfaite de planifier votre stratégie de contenu 🌊🇲🇦',
    },
  ];

  const [selectedWeather, setSelectedWeather] = useState<WeatherCondition>(weatherPresets[0]);

  const handleSimulateSummarize = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onNotify('تم استخراج زوايا الثريد والهيكل من الرابط بنجاح!');
    }, 700);
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column: Input and Engine selector */}
      <div className="col-span-12 lg:col-span-6 space-y-6">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {t.intelligence.title}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {t.intelligence.subtitle}
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
              summarize & weather
            </span>
          </div>

          {/* Sub-Tabs */}
          <div className="flex rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 p-1 mb-5">
            <button
              onClick={() => setActiveSubTab('summarize')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5 ${
                activeSubTab === 'summarize'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.intelligence.summarizeTab}</span>
            </button>
            <button
              onClick={() => setActiveSubTab('weather')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5 ${
                activeSubTab === 'weather'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
              }`}
            >
              <CloudSun className="w-3.5 h-3.5" />
              <span>{t.intelligence.weatherTab}</span>
            </button>
          </div>

          {/* Summarize Controls */}
          {activeSubTab === 'summarize' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-1">
                  رابط المصدر (مقال، فيديو YouTube، أو ملف PDF)
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={summarizeUrl}
                    onChange={(e) => setSummarizeUrl(e.target.value)}
                    placeholder={t.intelligence.summarizeInputPlaceholder}
                    className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-2 text-xs text-neutral-900 dark:text-white focus:outline-none"
                  />
                  <button
                    onClick={handleSimulateSummarize}
                    disabled={isProcessing}
                    className="px-4 py-2 rounded-lg bg-[#ff4328] hover:bg-[#e6351d] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 disabled:opacity-50"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isProcessing ? t.common.loading : t.intelligence.summarizeAction}</span>
                  </button>
                </div>
              </div>

              {/* Sample Quick Links */}
              <div className="flex flex-wrap gap-2 text-[11px] text-neutral-500">
                <span>أو جرب روابط جاهزة:</span>
                {[
                  { title: 'OpenAI Operator', url: 'https://openai.com/index/introducing-operator' },
                  { title: 'Anthropic Claude 3.5', url: 'https://anthropic.com/news/claude-3-5-sonnet' },
                  { title: 'ElevenLabs GenFM', url: 'https://elevenlabs.io/blog/genfm' },
                ].map((s, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSummarizeUrl(s.url);
                      handleSimulateSummarize();
                    }}
                    className="underline hover:text-neutral-900 dark:hover:text-white"
                  >
                    {s.title}
                  </button>
                ))}
              </div>

              {/* CLI Command snippet */}
              <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">
                  summarize CLI command
                </span>
                <code className="text-xs font-mono text-neutral-700 dark:text-neutral-300">
                  summarize "{summarizeUrl}" --youtube auto --length medium
                </code>
              </div>
            </div>
          )}

          {/* Weather Context Controls */}
          {activeSubTab === 'weather' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-2">
                  {t.intelligence.selectCity}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {weatherPresets.map((wp) => (
                    <button
                      key={wp.city}
                      onClick={() => setSelectedWeather(wp)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedWeather.city === wp.city
                          ? 'border-[#ff4328] bg-[#ff4328]/10'
                          : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 hover:border-neutral-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-white">
                        <span>{wp.city} ({wp.country})</span>
                        <span className="font-mono text-[#ff4328]">{wp.tempC}°C</span>
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-1">
                        {wp.condition} • {wp.humidity}% رطوبة
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weather API snippet */}
              <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">
                  weather CLI / wttr.in format
                </span>
                <code className="text-xs font-mono text-neutral-700 dark:text-neutral-300">
                  curl -s "https://wttr.in/{selectedWeather.city}?format=j2"
                </code>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Generated Hooks & Insights */}
      <div className="col-span-12 lg:col-span-6 space-y-6">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-5">
          {activeSubTab === 'summarize' ? (
            <>
              {/* Viral Hooks Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
                    {t.intelligence.viralHooksResult}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                    3 زوايا جاهزة
                  </span>
                </div>

                <div className="space-y-2.5">
                  {viralHooks.map((hook, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                    >
                      <p className="text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed">
                        {hook}
                      </p>
                      <div className="mt-2.5 flex items-center justify-end gap-2 text-xs">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(hook);
                            onNotify(t.common.copied);
                          }}
                          className="text-neutral-500 hover:text-neutral-800 flex items-center gap-1 text-[11px]"
                        >
                          <Copy className="w-3 h-3" />
                          <span>نسخ</span>
                        </button>
                        <button
                          onClick={() => {
                            onSendToDraft(hook);
                            onNotify('تم نقل الخُطّاف إلى مسودة التغريدة!');
                          }}
                          className="text-[#ff4328] hover:underline flex items-center gap-1 text-[11px] font-semibold"
                        >
                          <Send className="w-3 h-3" />
                          <span>إدراج في التغريدة</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thread Outline Section */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono mb-3">
                  {t.intelligence.threadOutlineResult}
                </h3>
                <div className="space-y-1.5">
                  {threadOutline.map((step, idx) => (
                    <div
                      key={idx}
                      className="text-xs p-2 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Weather Hook Section */
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
                  {t.intelligence.suggestedHook}
                </h3>
                <span className="text-[10px] font-mono text-[#ff4328] bg-[#ff4328]/10 px-2 py-0.5 rounded">
                  سياق حي: {selectedWeather.city}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 space-y-3">
                <p className="text-sm font-medium text-neutral-900 dark:text-white leading-relaxed">
                  {lang === 'ar'
                    ? selectedWeather.suggestedHookAr
                    : lang === 'fr'
                    ? selectedWeather.suggestedHookFr
                    : selectedWeather.suggestedHookEn}
                </p>

                <div className="pt-2 flex items-center justify-end gap-2 text-xs">
                  <button
                    onClick={() => {
                      const text = lang === 'ar' ? selectedWeather.suggestedHookAr : selectedWeather.suggestedHookEn;
                      navigator.clipboard.writeText(text);
                      onNotify(t.common.copied);
                    }}
                    className="text-neutral-500 hover:text-neutral-800 flex items-center gap-1 text-[11px]"
                  >
                    <Copy className="w-3 h-3" />
                    <span>نسخ</span>
                  </button>
                  <button
                    onClick={() => {
                      const text = lang === 'ar' ? selectedWeather.suggestedHookAr : selectedWeather.suggestedHookEn;
                      onSendToDraft(text);
                      onNotify('تم نقل السطر السياقي لمسودة التغريدة!');
                    }}
                    className="text-[#ff4328] hover:underline flex items-center gap-1 text-[11px] font-semibold"
                  >
                    <Send className="w-3 h-3" />
                    <span>إدراج في التغريدة</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
