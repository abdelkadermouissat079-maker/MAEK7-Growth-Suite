import React, { useState } from 'react';
import { Language, MemeTemplate } from '../../types';
import { translations } from '../../i18n/translations';
import { MEME_TEMPLATES } from '../../data/memeTemplates';
import {
  Sparkles,
  Download,
  Copy,
  Check,
  Send,
  Search,
  Grid,
  Image as ImageIcon,
  RotateCcw,
  Sliders,
} from 'lucide-react';

interface MemeWorkspaceProps {
  lang: Language;
  onNotify: (msg: string) => void;
  onSendToDraft: (mediaUrl: string) => void;
}

export const MemeWorkspace: React.FC<MemeWorkspaceProps> = ({
  lang,
  onNotify,
  onSendToDraft,
}) => {
  const t = translations[lang];

  // Active template
  const [selectedTemplate, setSelectedTemplate] = useState<MemeTemplate>(MEME_TEMPLATES[0]);
  const [templateSearch, setTemplateSearch] = useState('');

  // Texts for template boxes
  const [texts, setTexts] = useState<string[]>([
    lang === 'ar' ? 'الاعتماد على 6 أدوات منفصلة للنشر والميمز' : 'Using 6 separate fragmented tools',
    lang === 'ar' ? 'حزمة X Growth Kit العربية الموحدة' : 'Unified X Growth Kit Arabic',
  ]);

  // Typography controls
  const [fontSizeRatio, setFontSizeRatio] = useState(1);
  const [textColor, setTextColor] = useState('#ffffff');
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [isUppercase, setIsUppercase] = useState(false);

  // Smart suggester
  const [suggestPrompt, setSuggestPrompt] = useState(
    lang === 'ar' ? 'الذكاء الاصطناعي سيأخذ وظائفنا' : 'AI replacing developers'
  );
  const [suggestSuggestions, setSuggestSuggestions] = useState<
    { templateId: string; title: string; lines: string[] }[]
  >([
    {
      templateId: 'drake',
      title: 'رفض وقبول ذكي',
      lines: [
        'قضاء 3 ساعات في تصميم ميم وتعديل خطوطه',
        'توليد ميم عربي مضبوط بضغطة زر واحدة',
      ],
    },
    {
      templateId: 'two-buttons',
      title: 'حيرة المطور',
      lines: [
        'إصلاح كل الـ bugs في الكود',
        'النشر في الإنتاج والدعاء أن يعمل',
        'صانع المحتوى التقني الساعة 2 صباحاً',
      ],
    },
    {
      templateId: 'this-is-fine',
      title: 'الإنكار الهادئ',
      lines: [
        'الخادم توقف والتفاعل وصل 50 ألف زيارة',
        'كل شيء تحت السيطرة تماماً',
      ],
    },
  ]);

  // GIF Grep
  const [gifQuery, setGifQuery] = useState(lang === 'ar' ? 'احتفال نجاح' : 'celebration');
  const [sampleGifs] = useState([
    {
      id: 'g1',
      title: 'Mind Blown',
      url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 'g2',
      title: 'Typing Fast Coding',
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80',
    },
    {
      id: 'g3',
      title: 'Celebration Confetti',
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&auto=format&fit=crop&q=80',
    },
  ]);

  const [copiedCli, setCopiedCli] = useState(false);

  // Filter templates
  const filteredTemplates = MEME_TEMPLATES.filter((tpl) => {
    const q = templateSearch.toLowerCase();
    return (
      tpl.name.toLowerCase().includes(q) ||
      tpl.id.toLowerCase().includes(q) ||
      tpl.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  const handleSelectTemplate = (tpl: MemeTemplate) => {
    setSelectedTemplate(tpl);
    const initialTexts = tpl.fields.map((_, i) =>
      texts[i] !== undefined ? texts[i] : `نص ${i + 1}`
    );
    setTexts(initialTexts);
  };

  const handleApplySuggestion = (sug: { templateId: string; lines: string[] }) => {
    const found = MEME_TEMPLATES.find((t) => t.id === sug.templateId);
    if (found) {
      setSelectedTemplate(found);
      setTexts(sug.lines);
      onNotify('تم تطبيق القالب والنصوص المقترحة بنجاح!');
    }
  };

  // Generate equivalent CLI command
  const cliCommand = `meme-maker render ${selectedTemplate.id} ${texts
    .map((t) => `--text "${t}"`)
    .join(' ')} --out /tmp/meme.svg`;

  const copyCli = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
    onNotify(t.common.copied);
  };

  // Download SVG
  const handleDownloadSvg = () => {
    const svgElem = document.getElementById('meme-svg-preview');
    if (!svgElem) return;
    const svgData = new XMLSerializer().serializeToString(svgElem);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedTemplate.id}-meme.svg`;
    link.click();
    onNotify(t.common.downloadSvg);
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column: Template Gallery & Text Editors */}
      <div className="col-span-12 lg:col-span-7 space-y-6">
        {/* Workspace Card Header */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {t.memes.title}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {t.memes.subtitle}
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
              meme-maker • 20 templates
            </span>
          </div>

          {/* Smart Suggestion Box */}
          <div className="mb-6 p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200 mb-2">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>{t.memes.smartSuggest}</span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={suggestPrompt}
                onChange={(e) => setSuggestPrompt(e.target.value)}
                placeholder={t.memes.smartSuggestPlaceholder}
                className="flex-1 rounded-lg border border-amber-200 dark:border-amber-900/60 bg-white dark:bg-neutral-900 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
              />
              <button
                onClick={() => onNotify('تم توليد 3 اقتراحات جديدة مطابقة لنبرة الفكرة!')}
                className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold whitespace-nowrap transition-colors"
              >
                {t.memes.smartSuggestBtn}
              </button>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              {suggestSuggestions.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleApplySuggestion(sug)}
                  className="px-2.5 py-1 rounded-md text-[11px] bg-white dark:bg-neutral-900 border border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors flex items-center gap-1.5"
                >
                  <span className="font-mono text-[10px] opacity-70">{sug.templateId}</span>
                  <span>•</span>
                  <span>{sug.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Template Search & Grid Selector */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                {t.memes.selectTemplate}
              </span>
              <div className="w-48 relative">
                <Search className="w-3.5 h-3.5 absolute right-2.5 top-2 text-neutral-400" />
                <input
                  type="text"
                  value={templateSearch}
                  onChange={(e) => setTemplateSearch(e.target.value)}
                  placeholder={t.memes.searchTemplates}
                  className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 pl-2 pr-8 py-1 text-xs text-neutral-900 dark:text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 max-h-56 overflow-y-auto p-1 border rounded-xl border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
              {filteredTemplates.map((tpl) => {
                const isSelected = selectedTemplate.id === tpl.id;
                return (
                  <button
                    key={tpl.id}
                    onClick={() => handleSelectTemplate(tpl)}
                    className={`group relative rounded-lg border overflow-hidden p-1 flex flex-col items-center transition-all ${
                      isSelected
                        ? 'border-[#ff4328] bg-[#ff4328]/10 ring-2 ring-[#ff4328]/30'
                        : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-400'
                    }`}
                  >
                    <div className="w-full h-16 rounded overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                      <img
                        src={tpl.imageUrl}
                        alt={tpl.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <span className="mt-1 text-[10px] font-medium text-neutral-800 dark:text-neutral-200 truncate w-full text-center">
                      {tpl.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Text Inputs for Template Boxes */}
          <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
            <span className="text-xs font-bold text-neutral-900 dark:text-white block">
              {t.memes.customizeText}
            </span>

            {selectedTemplate.boxes.map((box, idx) => (
              <div key={idx} className="space-y-1">
                <label className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400 flex items-center justify-between">
                  <span>
                    {selectedTemplate.fields[idx] || `نص الحقل #${idx + 1}`}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400">
                    Box {idx + 1} ({Math.round(box.w * 100)}% عرض)
                  </span>
                </label>
                <input
                  type="text"
                  value={texts[idx] || ''}
                  onChange={(e) => {
                    const updated = [...texts];
                    updated[idx] = e.target.value;
                    setTexts(updated);
                  }}
                  className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-400"
                />
              </div>
            ))}

            {/* Typography Controls */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-neutral-500 text-[11px]">{t.memes.fontSize}:</span>
                <input
                  type="range"
                  min="0.7"
                  max="1.5"
                  step="0.05"
                  value={fontSizeRatio}
                  onChange={(e) => setFontSizeRatio(parseFloat(e.target.value))}
                  className="w-20 accent-neutral-800 dark:accent-neutral-200"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-neutral-500 text-[11px]">{t.memes.textColor}:</span>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-6 h-6 rounded border border-neutral-300 dark:border-neutral-700 cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-neutral-500 text-[11px]">{t.memes.textStroke}:</span>
                <input
                  type="color"
                  value={strokeColor}
                  onChange={(e) => setStrokeColor(e.target.value)}
                  className="w-6 h-6 rounded border border-neutral-300 dark:border-neutral-700 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* GIF Grep Section (gifgrep) */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-[#ff4328]" />
              <span>{t.memes.gifGrepTitle}</span>
            </h3>
            <span className="text-[11px] font-mono text-neutral-400">gifgrep CLI</span>
          </div>

          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={gifQuery}
              onChange={(e) => setGifQuery(e.target.value)}
              placeholder={t.memes.gifSearchPlaceholder}
              className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
            />
            <button
              onClick={() => onNotify('تم البحث في أرشيف GIFs')}
              className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-medium"
            >
              بحث
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {sampleGifs.map((gif) => (
              <div
                key={gif.id}
                className="group relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 cursor-pointer"
                onClick={() => {
                  onSendToDraft(gif.url);
                  onNotify('تم إرفاق الـ GIF بمسودة التغريدة!');
                }}
              >
                <img src={gif.url} alt={gif.title} className="w-full h-24 object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-[10px] text-white font-semibold bg-neutral-900/80 px-2 py-1 rounded">
                    + إدراج في التغريدة
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Live SVG Canvas Render & Export */}
      <div className="col-span-12 lg:col-span-5 space-y-6">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
              {t.common.preview} (SVG Canvas)
            </span>
            <span className="text-[11px] font-mono text-neutral-400">
              {selectedTemplate.width} × {selectedTemplate.height} px
            </span>
          </div>

          {/* The Live Interactive SVG Meme Renderer */}
          <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center shadow-inner">
            <svg
              id="meme-svg-preview"
              viewBox={`0 0 ${selectedTemplate.width} ${selectedTemplate.height}`}
              className="w-full h-auto max-h-[460px] select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Template Background Image */}
              <image
                href={selectedTemplate.imageUrl}
                x="0"
                y="0"
                width={selectedTemplate.width}
                height={selectedTemplate.height}
                preserveAspectRatio="none"
              />

              {/* Meme Text Rendered Inside Exact Coordinates */}
              {selectedTemplate.boxes.map((box, idx) => {
                const text = texts[idx] || '';
                if (!text) return null;

                const bx = box.x * selectedTemplate.width;
                const by = box.y * selectedTemplate.height;
                const bw = box.w * selectedTemplate.width;
                const bh = box.h * selectedTemplate.height;
                const cx = bx + bw / 2;
                const cy = by + bh / 2;

                // Font sizing based on text length and box dimensions
                const calculatedFontSize = Math.max(
                  24,
                  Math.min(bh * 0.35, (bw / Math.max(text.length * 0.45, 1)) * 1.4)
                ) * fontSizeRatio;

                const rotateAttr = box.rotate ? `rotate(${box.rotate} ${cx} ${cy})` : '';

                return (
                  <g key={idx} transform={rotateAttr}>
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={textColor}
                      stroke={strokeColor}
                      strokeWidth={Math.max(3, calculatedFontSize * 0.12)}
                      paintOrder="stroke fill"
                      fontSize={calculatedFontSize}
                      fontWeight="900"
                      fontFamily="Cairo, 'IBM Plex Sans Arabic', Impact, Arial Black, sans-serif"
                      style={{
                        letterSpacing: '0px',
                      }}
                    >
                      {isUppercase ? text.toUpperCase() : text}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Action Buttons: Download SVG & Send to Tweet Draft */}
          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              onClick={handleDownloadSvg}
              className="flex-1 py-2 px-3 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.common.downloadSvg}</span>
            </button>

            <button
              onClick={() => {
                onSendToDraft(selectedTemplate.imageUrl);
                onNotify('تم نقل الميم مباشرة إلى مسودة التغريدة في محرك النشر!');
              }}
              className="flex-1 py-2 px-3 rounded-lg bg-[#ff4328] hover:bg-[#e6351d] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.common.insertToTweet}</span>
            </button>
          </div>

          {/* CLI Snippet */}
          <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono text-neutral-500">
                meme-maker CLI command
              </span>
              <button
                onClick={copyCli}
                className="text-[11px] font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white flex items-center gap-1"
              >
                {copiedCli ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCli ? t.common.copied : t.common.copyCommand}</span>
              </button>
            </div>
            <code className="text-[11px] font-mono text-neutral-800 dark:text-neutral-200 block overflow-x-auto whitespace-pre bg-neutral-50 dark:bg-neutral-950 p-2 rounded border border-neutral-200 dark:border-neutral-800">
              {cliCommand}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
