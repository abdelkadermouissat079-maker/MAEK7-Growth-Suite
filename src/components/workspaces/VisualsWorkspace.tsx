import React, { useState } from 'react';
import { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { Download, Sparkles, Send, Palette, Layers, GitCommit } from 'lucide-react';

interface VisualsWorkspaceProps {
  lang: Language;
  onNotify: (msg: string) => void;
  onSendToDraft: (mediaUrl: string) => void;
}

export const VisualsWorkspace: React.FC<VisualsWorkspaceProps> = ({
  lang,
  onNotify,
  onSendToDraft,
}) => {
  const t = translations[lang];

  const [activeType, setActiveType] = useState<'quote' | 'stat' | 'flowchart'>('quote');
  const [theme, setTheme] = useState<'dark' | 'gradient' | 'light'>('gradient');

  // Quote Card State
  const [quoteText, setQuoteText] = useState(
    lang === 'ar'
      ? 'المحتوى الجيد بدون توزيع ذكي مثل متجر فاخر في شارع مهجور. الأتمتة تضمن وصول صوتك لكل مهتم.'
      : lang === 'fr'
      ? 'Un contenu exceptionnel sans distribution intelligente est comme une boutique de luxe dans une rue déserte.'
      : 'Great content without intelligent distribution is like a luxury boutique in a deserted alley.'
  );
  const [authorName, setAuthorName] = useState(lang === 'ar' ? 'عمر التميمي' : 'Omar Altamimi');
  const [authorRole, setAuthorRole] = useState(lang === 'ar' ? 'مؤسس تقني وكاتب محتوى' : 'Tech Founder & Creator');

  // Stat Card State
  const [statMetric, setStatMetric] = useState('+320%');
  const [statHeadline, setStatHeadline] = useState(
    lang === 'ar' ? 'معدل نمو التفاعل على الثريدات المصحوبة بميمز وكروت بصرية' : 'Engagement increase on visual threads'
  );
  const [statBefore, setStatBefore] = useState('1,200 زيارة / أسبوعياً');
  const [statAfter, setStatAfter] = useState('5,040 زيارة / أسبوعياً');

  // Flowchart steps
  const [flowSteps, setFlowSteps] = useState([
    { title: 'المدخل', sub: 'رابط مقال أو فكرة صوتية', tool: 'summarize' },
    { title: 'الصياغة', sub: '3 زوايا ثريد فيروسية', tool: 'LLM Engine' },
    { title: 'الإنتاج', sub: 'ميم عربي + تعليق صوتي', tool: 'meme + sag' },
    { title: 'النشر', sub: 'جدولة ورفع عبر xurl', tool: 'xurl post' },
    { title: 'التحليل', sub: 'تتبع التكلفة والنمو', tool: 'model-usage' },
  ]);

  const handleDownloadSvg = () => {
    const svgElem = document.getElementById('visual-svg-canvas');
    if (!svgElem) return;
    const svgData = new XMLSerializer().serializeToString(svgElem);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `visual-${activeType}.svg`;
    link.click();
    onNotify(t.common.downloadSvg);
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column: Card Designer Controls */}
      <div className="col-span-12 lg:col-span-6 space-y-6">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {t.visuals.title}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {t.visuals.subtitle}
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
              visualize & diagram-maker
            </span>
          </div>

          {/* Type Selector (Segmented buttons) */}
          <div className="mb-5">
            <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-2">
              {t.visuals.cardType}
            </label>
            <div className="flex rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 p-1">
              {[
                { id: 'quote', label: t.visuals.quoteCard },
                { id: 'stat', label: t.visuals.statCard },
                { id: 'flowchart', label: t.visuals.flowchart },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveType(opt.id as any)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    activeType === opt.id
                      ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Selector */}
          <div className="mb-5">
            <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-2">
              {t.visuals.themeSelector}
            </label>
            <div className="flex gap-2">
              {[
                { id: 'gradient', label: t.visuals.gradientTheme, bg: 'bg-gradient-to-r from-orange-500 to-rose-600 text-white' },
                { id: 'dark', label: t.visuals.darkTheme, bg: 'bg-neutral-900 text-white border border-neutral-700' },
                { id: 'light', label: t.visuals.lightTheme, bg: 'bg-neutral-100 text-neutral-900 border border-neutral-300' },
              ].map((th) => (
                <button
                  key={th.id}
                  onClick={() => setTheme(th.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${th.bg} ${
                    theme === th.id ? 'ring-2 ring-neutral-400 dark:ring-neutral-200 scale-102' : 'opacity-80'
                  }`}
                >
                  {th.label}
                </button>
              ))}
            </div>
          </div>

          {/* Inputs based on type */}
          {activeType === 'quote' && (
            <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div>
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-1">
                  {t.visuals.quoteText}
                </label>
                <textarea
                  value={quoteText}
                  onChange={(e) => setQuoteText(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-3 text-xs text-neutral-900 dark:text-white focus:outline-none leading-relaxed"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-1">
                    {t.visuals.quoteAuthor}
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-1">
                    {t.visuals.quoteRole}
                  </label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeType === 'stat' && (
            <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-1">
                    {t.visuals.statMetric}
                  </label>
                  <input
                    type="text"
                    value={statMetric}
                    onChange={(e) => setStatMetric(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs font-bold font-mono text-neutral-900 dark:text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-1">
                    {t.visuals.statLabel}
                  </label>
                  <input
                    type="text"
                    value={statHeadline}
                    onChange={(e) => setStatHeadline(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-1">
                    قبل التحسين
                  </label>
                  <input
                    type="text"
                    value={statBefore}
                    onChange={(e) => setStatBefore(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-1">
                    بعد تطبيق الأداة
                  </label>
                  <input
                    type="text"
                    value={statAfter}
                    onChange={(e) => setStatAfter(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeType === 'flowchart' && (
            <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block">
                {t.visuals.flowchartSteps} (مراحل المخطط التقني)
              </span>
              {flowSteps.map((step, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <span className="w-5 text-center font-mono text-[11px] text-neutral-400">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => {
                      const updated = [...flowSteps];
                      updated[idx].title = e.target.value;
                      setFlowSteps(updated);
                    }}
                    className="w-28 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-2 py-1 text-xs"
                  />
                  <input
                    type="text"
                    value={step.sub}
                    onChange={(e) => {
                      const updated = [...flowSteps];
                      updated[idx].sub = e.target.value;
                      setFlowSteps(updated);
                    }}
                    className="flex-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-2 py-1 text-xs"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Live SVG Render Canvas */}
      <div className="col-span-12 lg:col-span-6 space-y-6">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
              {t.common.preview} (1200 × 675 px)
            </span>
            <span className="text-[11px] font-mono text-neutral-400">SVG Generator</span>
          </div>

          {/* SVG Canvas */}
          <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center shadow-sm">
            <svg
              id="visual-svg-canvas"
              viewBox="0 0 1200 675"
              className="w-full h-auto select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="vis-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff4d2e" />
                  <stop offset="100%" stopColor="#111827" />
                </linearGradient>
                <filter id="vis-shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Background Rect according to selected theme */}
              <rect
                x="0"
                y="0"
                width="1200"
                height="675"
                fill={
                  theme === 'gradient'
                    ? 'url(#vis-grad)'
                    : theme === 'dark'
                    ? '#111315'
                    : '#faf9f6'
                }
              />

              {/* Subtle grid pattern */}
              <g opacity={theme === 'light' ? '0.04' : '0.08'}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={`x-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="675" stroke="#ffffff" strokeWidth="1" />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={`y-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} stroke="#ffffff" strokeWidth="1" />
                ))}
              </g>

              {/* Brand watermark badge top right */}
              <g transform="translate(1045, 40)">
                <rect x="0" y="0" width="115" height="34" rx="8" fill={theme === 'light' ? '#000' : '#fff'} opacity="0.15" />
                <text
                  x="57"
                  y="22"
                  textAnchor="middle"
                  fill={theme === 'light' ? '#111' : '#fff'}
                  fontSize="14"
                  fontWeight="bold"
                  fontFamily="system-ui"
                >
                  MAEK7
                </text>
              </g>

              {/* Content Render based on active card type */}
              {activeType === 'quote' && (
                <g transform="translate(120, 160)">
                  {/* Decorative quote mark */}
                  <text
                    x="0"
                    y="60"
                    fill={theme === 'light' ? '#ff4d2e' : '#ff7a5c'}
                    fontSize="110"
                    fontWeight="bold"
                    fontFamily="serif"
                    opacity="0.8"
                  >
                    “
                  </text>

                  {/* Main Quote Text */}
                  <text
                    x="60"
                    y="110"
                    fill={theme === 'light' ? '#111' : '#ffffff'}
                    fontSize="36"
                    fontWeight="700"
                    fontFamily="'IBM Plex Sans Arabic', Cairo, sans-serif"
                    style={{ lineHeight: 1.5 }}
                  >
                    {quoteText.slice(0, 52)}
                  </text>
                  {quoteText.length > 52 && (
                    <text
                      x="60"
                      y="165"
                      fill={theme === 'light' ? '#111' : '#ffffff'}
                      fontSize="36"
                      fontWeight="700"
                      fontFamily="'IBM Plex Sans Arabic', Cairo, sans-serif"
                    >
                      {quoteText.slice(52, 110)}
                    </text>
                  )}
                  {quoteText.length > 110 && (
                    <text
                      x="60"
                      y="220"
                      fill={theme === 'light' ? '#111' : '#ffffff'}
                      fontSize="36"
                      fontWeight="700"
                      fontFamily="'IBM Plex Sans Arabic', Cairo, sans-serif"
                    >
                      {quoteText.slice(110, 170)}...
                    </text>
                  )}

                  {/* Author Line */}
                  <g transform="translate(60, 310)">
                    <circle cx="28" cy="28" r="28" fill="#ff4d2e" />
                    <text x="28" y="36" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold">
                      {authorName.charAt(0)}
                    </text>
                    <text
                      x="74"
                      y="24"
                      fill={theme === 'light' ? '#111' : '#fff'}
                      fontSize="22"
                      fontWeight="bold"
                      fontFamily="'IBM Plex Sans Arabic', Cairo, sans-serif"
                    >
                      {authorName}
                    </text>
                    <text
                      x="74"
                      y="48"
                      fill={theme === 'light' ? '#666' : '#9ca3af'}
                      fontSize="16"
                      fontFamily="'IBM Plex Sans Arabic', sans-serif"
                    >
                      {authorRole}
                    </text>
                  </g>
                </g>
              )}

              {activeType === 'stat' && (
                <g transform="translate(140, 140)">
                  {/* Big Metric Display */}
                  <text
                    x="0"
                    y="110"
                    fill={theme === 'light' ? '#ff4d2e' : '#ff6b4d'}
                    fontSize="110"
                    fontWeight="900"
                    fontFamily="'JetBrains Mono', monospace"
                  >
                    {statMetric}
                  </text>

                  {/* Headline */}
                  <text
                    x="0"
                    y="180"
                    fill={theme === 'light' ? '#111' : '#ffffff'}
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="'IBM Plex Sans Arabic', Cairo, sans-serif"
                  >
                    {statHeadline.slice(0, 60)}
                  </text>
                  {statHeadline.length > 60 && (
                    <text
                      x="0"
                      y="225"
                      fill={theme === 'light' ? '#111' : '#ffffff'}
                      fontSize="32"
                      fontWeight="700"
                      fontFamily="'IBM Plex Sans Arabic', Cairo, sans-serif"
                    >
                      {statHeadline.slice(60, 120)}
                    </text>
                  )}

                  {/* Before vs After comparison card */}
                  <g transform="translate(0, 270)">
                    <rect
                      x="0"
                      y="0"
                      width="420"
                      height="90"
                      rx="14"
                      fill={theme === 'light' ? '#ffffff' : '#1f2937'}
                      opacity="0.9"
                    />
                    <text x="24" y="36" fill={theme === 'light' ? '#6b7280' : '#9ca3af'} fontSize="14" fontFamily="sans-serif">
                      قبل: {statBefore}
                    </text>
                    <text x="24" y="68" fill="#10b981" fontSize="18" fontWeight="bold" fontFamily="sans-serif">
                      الآن: {statAfter} (✓ مثبت)
                    </text>
                  </g>
                </g>
              )}

              {activeType === 'flowchart' && (
                <g transform="translate(80, 220)">
                  {flowSteps.map((step, i) => {
                    const x = i * 210;
                    return (
                      <g key={i} transform={`translate(${x}, 0)`}>
                        {/* Node Card */}
                        <rect
                          x="0"
                          y="0"
                          width="180"
                          height="130"
                          rx="14"
                          fill={theme === 'light' ? '#ffffff' : '#1f2937'}
                          stroke={theme === 'light' ? '#e5e7eb' : '#374151'}
                          strokeWidth="2"
                        />
                        <circle cx="28" cy="28" r="14" fill="#ff4d2e" />
                        <text x="28" y="34" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">
                          {i + 1}
                        </text>
                        <text
                          x="20"
                          y="72"
                          fill={theme === 'light' ? '#111827' : '#f9fafb'}
                          fontSize="18"
                          fontWeight="bold"
                          fontFamily="'IBM Plex Sans Arabic', sans-serif"
                        >
                          {step.title}
                        </text>
                        <text
                          x="20"
                          y="98"
                          fill={theme === 'light' ? '#6b7280' : '#9ca3af'}
                          fontSize="12"
                          fontFamily="'IBM Plex Sans Arabic', sans-serif"
                        >
                          {step.sub.slice(0, 18)}
                        </text>

                        {/* Arrow connector */}
                        {i < flowSteps.length - 1 && (
                          <g transform="translate(185, 65)">
                            <line x1="0" y1="0" x2="20" y2="0" stroke="#ff4d2e" strokeWidth="3" />
                            <polygon points="16,-5 25,0 16,5" fill="#ff4d2e" />
                          </g>
                        )}
                      </g>
                    );
                  })}
                </g>
              )}
            </svg>
          </div>

          {/* Export Action Strip */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={handleDownloadSvg}
              className="flex-1 py-2 px-4 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.visuals.exportCard}</span>
            </button>
            <button
              onClick={() => onNotify('تم تجهيز الكرت وجاهز للإدراج في النشر')}
              className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {t.common.insertToTweet}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
