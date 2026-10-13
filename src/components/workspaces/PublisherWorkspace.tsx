import React, { useState } from 'react';
import { Language, TweetItem } from '../../types';
import { translations } from '../../i18n/translations';
import {
  MessageSquare,
  Repeat,
  Heart,
  Bookmark,
  Share,
  Plus,
  Trash2,
  Image,
  BarChart2,
  Calendar,
  Send,
  Copy,
  Check,
  Search,
  Sparkles,
  UserCheck,
  Mail,
  Sliders,
  BookOpen,
} from 'lucide-react';
import { THREAD_TEMPLATES } from '../../data/threadTemplates';

interface PublisherWorkspaceProps {
  lang: Language;
  onNotify: (msg: string) => void;
  attachedMedia?: string;
}

export const PublisherWorkspace: React.FC<PublisherWorkspaceProps> = ({
  lang,
  onNotify,
  attachedMedia,
}) => {
  const t = translations[lang];

  // Tweets thread state
  const [thread, setThread] = useState<TweetItem[]>([
    {
      id: '1',
      text:
        lang === 'ar'
          ? 'المشكلة الأكبر لصناع المحتوى في X ليست قلة الأفكار، بل التشتت بين 6 أدوات مختلفة.\n\nإليك كيف بنينا حلاً يدمجها في منصة MAEK7-Growth Suite 🧵👇'
          : lang === 'fr'
          ? 'Le plus grand défi des créateurs sur X n’est pas le manque d’idées, mais l’éparpillement entre 6 outils.\n\nVoici comment nous avons unifié ce flux dans MAEK7-Growth Suite 🧵👇'
          : 'The biggest friction for creators on X is fragmentation across 6 different tools.\n\nHere is how we unified it into MAEK7-Growth Suite 🧵👇',
      mediaUrl: attachedMedia || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      mediaType: 'image',
      likes: 428,
      retweets: 92,
      replies: 34,
      bookmarks: 147,
      views: 18400,
      createdAt: '2m',
    },
    {
      id: '2',
      text:
        lang === 'ar'
          ? '1/ النواة مبنية على أداة xurl: نشر، ردود ذكية، رفع وسائط ورسائل خاصة بلمسة زر وبدون دفع $200 شهرياً لـ API.'
          : lang === 'fr'
          ? '1/ Le moteur repose sur xurl : publications, réponses intelligentes, médias et messages directs sans payer 200 $/mois d’API.'
          : '1/ Built on xurl engine: posts, smart replies, media uploads, and DMs without paying $200/mo API fees.',
      likes: 215,
      retweets: 48,
      replies: 12,
      bookmarks: 86,
      views: 9200,
      createdAt: '1m',
    },
  ]);

  const [activeTweetIdx, setActiveTweetIdx] = useState(0);
  const [showPoll, setShowPoll] = useState(false);
  const [pollOptions, setPollOptions] = useState(['نعم بالتأكيد', 'أفضل الطريقة اليدوية']);
  const [pollDuration, setPollDuration] = useState('24');
  const [scheduledDate, setScheduledDate] = useState('2026-10-15T18:00');
  const [isScheduled, setIsScheduled] = useState(false);
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);

  const handleLoadThreadTemplate = (tpl: any) => {
    const loadedTweets: TweetItem[] = tpl.tweets.map((text: string, idx: number) => ({
      id: String(Date.now() + idx),
      text,
      likes: Math.floor(Math.random() * 400 + 100),
      retweets: Math.floor(Math.random() * 100 + 20),
      replies: Math.floor(Math.random() * 50 + 10),
      bookmarks: Math.floor(Math.random() * 150 + 30),
      views: 12000,
      createdAt: `${idx + 1}m`,
    }));
    setThread(loadedTweets);
    setActiveTweetIdx(0);
    setShowTemplatesModal(false);
    onNotify(`تم تحميل قالب "${tpl.title}" في المحرر!`);
  };

  // Search monitor state
  const [searchQuery, setSearchQuery] = useState(lang === 'ar' ? 'صناع المحتوى lang:ar min_faves:50' : '"creator growth" lang:en min_faves:100');
  const [searchResults, setSearchResults] = useState<
    { id: string; user: string; handle: string; text: string; likes: number; replies: number }[]
  >([
    {
      id: '101',
      user: 'خالد التقني',
      handle: '@KhaledTech',
      text: 'ما هي أفضل استراتيجية لمضاعفة التفاعل على ثريدات X هذا الشهر؟ أبحث عن أدوات عربية عملية.',
      likes: 184,
      replies: 42,
    },
    {
      id: '102',
      user: 'سارة أحمد',
      handle: '@SarahGrowth',
      text: 'الثريدات المدعومة بميمز وإنفوجرافيك تحقق وصولاً أعلى بـ 3 أضعاف مقارنة بالنصوص الجافة.',
      likes: 620,
      replies: 88,
    },
  ]);

  // Auto reply rule
  const [autoReplyKeyword, setAutoReplyKeyword] = useState('رابط');
  const [autoReplyText, setAutoReplyText] = useState('تفضل الرابط المباشر للدليل المجاني: https://xgrowth.app/guide');

  // Auto DM rule
  const [autoDmKeyword, setAutoDmKeyword] = useState('دليل');
  const [autoDmText, setAutoDmText] = useState('مرحباً بك! شكراً لتفاعلك. أرسلت لك الدليل الكامل بصيغة PDF.');

  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Add tweet to thread
  const handleAddTweet = () => {
    const newTweet: TweetItem = {
      id: String(Date.now()),
      text: '',
      likes: 0,
      retweets: 0,
      replies: 0,
      bookmarks: 0,
      views: 0,
      createdAt: 'now',
    };
    setThread([...thread, newTweet]);
    setActiveTweetIdx(thread.length);
    onNotify(t.common.save);
  };

  const handleRemoveTweet = (idx: number) => {
    if (thread.length <= 1) return;
    const updated = thread.filter((_, i) => i !== idx);
    setThread(updated);
    setActiveTweetIdx(Math.max(0, idx - 1));
  };

  const handleUpdateText = (text: string) => {
    const updated = [...thread];
    updated[activeTweetIdx].text = text;
    setThread(updated);
  };

  const currentTweet = thread[activeTweetIdx] || thread[0];
  const charCount = currentTweet.text.length;
  const maxChars = 280;
  const isOverLimit = charCount > maxChars;

  // Generate xurl CLI command
  const generatedCliCmd = `xurl post "${thread[0]?.text.replace(/"/g, '\\"').slice(0, 100)}..." ${
    currentTweet.mediaUrl ? '--media-id M_892374' : ''
  }`;

  const copyCliCommand = () => {
    navigator.clipboard.writeText(generatedCliCmd);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
    onNotify(t.common.copied);
  };

  const handleSimulatedPublish = () => {
    onNotify(t.publisher.simulatedSuccess);
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left / Main Column: Thread Composer */}
      <div className="col-span-12 lg:col-span-7 space-y-6">
        {/* Workspace Card Header */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {t.publisher.title}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {t.publisher.subtitle}
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
              xurl v2.4 • authenticated
            </span>
          </div>

          {/* Thread Tweet Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-neutral-200 dark:border-neutral-800">
            {thread.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTweetIdx(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  activeTweetIdx === i
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <span>{t.publisher.tweetNumber} {i + 1}</span>
                {thread.length > 1 && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveTweet(i);
                    }}
                    className="hover:text-red-500 transition-colors"
                  >
                    ×
                  </span>
                )}
              </button>
            ))}
            <button
              onClick={handleAddTweet}
              className="px-2.5 py-1.5 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t.publisher.addTweetToThread}</span>
            </button>

            <button
              onClick={() => setShowTemplatesModal(!showTemplatesModal)}
              className="px-3 py-1.5 rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 text-xs font-semibold flex items-center gap-1.5 transition-colors hover:bg-amber-100"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.templates.browseTemplates}</span>
            </button>
          </div>

          {/* Thread Templates Library Drawer */}
          {showTemplatesModal && (
            <div className="mt-4 p-4 rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/30 dark:bg-amber-950/20 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>{t.templates.templatesLibrary}</span>
                </div>
                <button
                  onClick={() => setShowTemplatesModal(false)}
                  className="text-xs text-neutral-500 hover:text-neutral-800"
                >
                  ✕ إغلاق
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {THREAD_TEMPLATES.map((tpl) => (
                  <div
                    key={tpl.id}
                    className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex flex-col justify-between text-xs space-y-2 hover:border-amber-400 transition-colors"
                  >
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                        <span>{tpl.category}</span>
                        <span className="text-[#ff4328] font-bold">{tpl.estimatedReach}</span>
                      </div>
                      <h4 className="font-bold text-neutral-900 dark:text-white mt-1">
                        {tpl.title}
                      </h4>
                      <p className="text-[11px] text-neutral-500 line-clamp-2 mt-1 leading-snug">
                        {tpl.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleLoadThreadTemplate(tpl)}
                      className="w-full py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-[11px] font-semibold hover:opacity-90"
                    >
                      {t.templates.loadTemplate}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Text Editor Area */}
          <div className="mt-4">
            <textarea
              value={currentTweet.text}
              onChange={(e) => handleUpdateText(e.target.value)}
              placeholder={t.publisher.placeholder}
              rows={5}
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-4 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all resize-y leading-relaxed"
            />

            {/* Character Count & Action Strip */}
            <div className="flex items-center justify-between mt-3 text-xs">
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono tabular-nums font-semibold ${
                    isOverLimit
                      ? 'text-red-500 font-bold'
                      : charCount > 240
                      ? 'text-amber-500'
                      : 'text-neutral-500 dark:text-neutral-400'
                  }`}
                >
                  {charCount} / {maxChars}
                </span>

                {/* Progress bar */}
                <div className="w-16 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      isOverLimit ? 'bg-red-500' : charCount > 240 ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${Math.min(100, (charCount / maxChars) * 100)}%` }}
                  />
                </div>

                {/* Live Viral Score Badge */}
                {charCount > 20 && (
                  <div
                    title="مؤشر احتمالية الانتشار الحي بناءً على الخُطّاف والتنسيق والدعوة للتفاعل"
                    className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-mono text-[11px]"
                  >
                    <span>🔥 Viral Score:</span>
                    <span className="font-bold">
                      {Math.min(
                        98,
                        45 +
                          (/\d+/.test(currentTweet.text) ? 15 : 0) +
                          (currentTweet.text.includes('\n') ? 12 : 0) +
                          (/👇|🧵|تابعني|follow/.test(currentTweet.text) ? 14 : 0) +
                          (currentTweet.mediaUrl ? 14 : 0)
                      )}
                      %
                    </span>
                  </div>
                )}
              </div>

              {/* Media / Poll Toolbar */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPoll(!showPoll)}
                  className={`p-1.5 rounded-md border text-xs flex items-center gap-1 transition-colors ${
                    showPoll
                      ? 'bg-neutral-200 dark:bg-neutral-700 border-neutral-400 text-neutral-900 dark:text-white'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                  title={t.publisher.pollTitle}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>{t.publisher.pollTitle}</span>
                </button>

                <button
                  onClick={() => {
                    const sampleImg = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80';
                    const updated = [...thread];
                    updated[activeTweetIdx].mediaUrl = updated[activeTweetIdx].mediaUrl ? undefined : sampleImg;
                    setThread(updated);
                    onNotify('تم تحديث الوسائط المرفقة');
                  }}
                  className={`p-1.5 rounded-md border text-xs flex items-center gap-1 transition-colors ${
                    currentTweet.mediaUrl
                      ? 'bg-neutral-200 dark:bg-neutral-700 border-neutral-400 text-neutral-900 dark:text-white'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                  title={t.publisher.addMedia}
                >
                  <Image className="w-3.5 h-3.5" />
                  <span>{currentTweet.mediaUrl ? 'حذف الوسائط' : 'إرفاق وسائط'}</span>
                </button>
              </div>
            </div>

            {/* Poll Config Form */}
            {showPoll && (
              <div className="mt-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    {t.publisher.pollTitle}
                  </span>
                  <button
                    onClick={() => setShowPoll(false)}
                    className="text-xs text-red-500 hover:underline"
                  >
                    {t.publisher.removePoll}
                  </button>
                </div>
                {pollOptions.map((opt, optIdx) => (
                  <div key={optIdx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => {
                        const updated = [...pollOptions];
                        updated[optIdx] = e.target.value;
                        setPollOptions(updated);
                      }}
                      className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
                    />
                    {pollOptions.length > 2 && (
                      <button
                        onClick={() => setPollOptions(pollOptions.filter((_, i) => i !== optIdx))}
                        className="text-neutral-400 hover:text-red-500"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
                {pollOptions.length < 4 && (
                  <button
                    onClick={() => setPollOptions([...pollOptions, `خيار ${pollOptions.length + 1}`])}
                    className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium"
                  >
                    {t.publisher.addOption}
                  </button>
                )}
              </div>
            )}

            {/* Schedule & Submit Buttons */}
            <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <input
                  type="datetime-local"
                  value={scheduledDate}
                  onChange={(e) => {
                    setScheduledDate(e.target.value);
                    setIsScheduled(true);
                  }}
                  className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-2.5 py-1 text-xs text-neutral-800 dark:text-neutral-200 focus:outline-none"
                />
                <button
                  onClick={() => setIsScheduled(!isScheduled)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                    isScheduled
                      ? 'bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white'
                      : 'border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t.common.schedule}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSimulatedPublish}
                  className="px-4 py-2 rounded-lg bg-[#ff4328] hover:bg-[#e6351d] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isScheduled ? t.common.schedule : t.common.publishNow}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Hub: Replies & DMs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Smart Reply Card */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold text-xs mb-1">
              <UserCheck className="w-4 h-4 text-[#ff4328]" />
              <span>{t.publisher.autoReplySection}</span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-3">
              {t.publisher.autoReplyDesc}
            </p>
            <div className="space-y-2">
              <div>
                <label className="text-[10px] text-neutral-400 uppercase font-mono block mb-1">
                  {t.publisher.autoReplyTrigger}
                </label>
                <input
                  type="text"
                  value={autoReplyKeyword}
                  onChange={(e) => setAutoReplyKeyword(e.target.value)}
                  className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-2.5 py-1 text-xs text-neutral-900 dark:text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] text-neutral-400 uppercase font-mono block mb-1">
                  {t.publisher.autoReplyResponse}
                </label>
                <textarea
                  value={autoReplyText}
                  onChange={(e) => setAutoReplyText(e.target.value)}
                  rows={2}
                  className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-2.5 py-1 text-xs text-neutral-900 dark:text-white focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Smart DM Card */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold text-xs mb-1">
              <Mail className="w-4 h-4 text-[#1d9bf0]" />
              <span>{t.publisher.autoDmSection}</span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-3">
              {t.publisher.autoDmDesc}
            </p>
            <div className="space-y-2">
              <div>
                <label className="text-[10px] text-neutral-400 uppercase font-mono block mb-1">
                  {t.publisher.autoReplyTrigger}
                </label>
                <input
                  type="text"
                  value={autoDmKeyword}
                  onChange={(e) => setAutoDmKeyword(e.target.value)}
                  className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-2.5 py-1 text-xs text-neutral-900 dark:text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] text-neutral-400 uppercase font-mono block mb-1">
                  {t.publisher.autoReplyResponse}
                </label>
                <textarea
                  value={autoDmText}
                  onChange={(e) => setAutoDmText(e.target.value)}
                  rows={2}
                  className="w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-2.5 py-1 text-xs text-neutral-900 dark:text-white focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyable CLI command bar */}
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-950 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
              {t.publisher.cliSnippetTitle}
            </span>
            <button
              onClick={copyCliCommand}
              className="text-xs text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white flex items-center gap-1 font-mono transition-colors"
            >
              {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSnippet ? t.common.copied : t.common.copyCommand}</span>
            </button>
          </div>
          <code className="text-xs font-mono text-neutral-800 dark:text-neutral-200 block overflow-x-auto whitespace-pre bg-white dark:bg-neutral-900 p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800">
            {generatedCliCmd}
          </code>
        </div>
      </div>

      {/* Right Column: Live X / Twitter Preview & Advanced Search */}
      <div className="col-span-12 lg:col-span-5 space-y-6">
        {/* Live X Post Simulation Preview */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
              {t.common.preview}
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>

          {/* Twitter / X Post Card */}
          <div className="space-y-4">
            {thread.map((tweet, i) => (
              <div key={tweet.id} className="relative group">
                {/* Connecting line for thread */}
                {i < thread.length - 1 && (
                  <div className="absolute top-10 right-4 w-0.5 h-[calc(100%-8px)] bg-neutral-200 dark:bg-neutral-800" />
                )}

                <div className="flex items-start gap-3">
                  {/* Author Avatar */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff4328] to-orange-500 text-white flex items-center justify-center font-bold text-xs shrink-0 ring-2 ring-neutral-100 dark:ring-neutral-800">
                    M7
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Header: Name, Handle, Badge, Time */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-bold text-neutral-900 dark:text-white">
                        {lang === 'ar' ? 'MAEK7 Creator' : 'MAEK7 Creator'}
                      </span>
                      <span className="text-[11px] text-[#1d9bf0]">✓</span>
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                        @maek7_growth
                      </span>
                      <span className="text-neutral-300 dark:text-neutral-600">·</span>
                      <span className="text-[11px] text-neutral-400 font-mono">{tweet.createdAt}</span>
                    </div>

                    {/* Tweet Body */}
                    <p className="mt-1 text-xs text-neutral-800 dark:text-neutral-200 whitespace-pre-line leading-relaxed">
                      {tweet.text || (
                        <span className="italic text-neutral-400">
                          {t.publisher.placeholder}
                        </span>
                      )}
                    </p>

                    {/* Attached Media Preview */}
                    {tweet.mediaUrl && (
                      <div className="mt-3 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950">
                        <img
                          src={tweet.mediaUrl}
                          alt="Media attachment"
                          className="w-full h-44 object-cover"
                        />
                      </div>
                    )}

                    {/* Simulated Poll (if on tweet 0 and active) */}
                    {i === 0 && showPoll && (
                      <div className="mt-3 space-y-1.5">
                        {pollOptions.map((opt, optIdx) => (
                          <div
                            key={optIdx}
                            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs flex justify-between font-medium text-neutral-700 dark:text-neutral-300"
                          >
                            <span>{opt}</span>
                            <span className="text-neutral-400 font-mono">
                              {optIdx === 0 ? '78%' : '22%'}
                            </span>
                          </div>
                        ))}
                        <div className="text-[10px] text-neutral-400 font-mono">
                          {pollDuration} ساعة متبقية • 1,420 صوت
                        </div>
                      </div>
                    )}

                    {/* Engagement Metrics Action Bar */}
                    <div className="flex items-center justify-between text-neutral-500 dark:text-neutral-400 text-[11px] mt-3 pt-2 border-t border-neutral-100 dark:border-neutral-800/60 font-mono">
                      <div className="flex items-center gap-1 hover:text-[#1d9bf0] cursor-pointer">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{tweet.replies}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-emerald-500 cursor-pointer">
                        <Repeat className="w-3.5 h-3.5" />
                        <span>{tweet.retweets}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
                        <Heart className="w-3.5 h-3.5" />
                        <span>{tweet.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-[#1d9bf0] cursor-pointer">
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>{tweet.bookmarks}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-neutral-800 dark:hover:text-white cursor-pointer">
                        <Share className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Competitor Monitor (xurl search) */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
              <Search className="w-4 h-4 text-[#ff4328]" />
              <span>{t.publisher.searchTrackerTitle}</span>
            </h3>
            <span className="text-[10px] font-mono text-neutral-400">Live API</span>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.publisher.searchQueryPlaceholder}
              className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
            />
            <button
              onClick={() => onNotify('تم تحديث نتائج البحث المتقدم')}
              className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-medium"
            >
              {t.publisher.runSearch}
            </button>
          </div>

          {/* Search Result Cards */}
          <div className="space-y-2.5">
            {searchResults.map((res) => (
              <div
                key={res.id}
                className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-1 font-semibold text-neutral-900 dark:text-white">
                    <span>{res.user}</span>
                    <span className="font-mono text-neutral-400 text-[11px]">{res.handle}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                    <span>❤️ {res.likes}</span>
                    <span>💬 {res.replies}</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {res.text}
                </p>
                <div className="mt-2 flex items-center justify-end gap-2">
                  <button
                    onClick={() => {
                      handleUpdateText(`${currentTweet.text}\n\nرد على ${res.handle}: `);
                      onNotify('تم إضافة مرجع التغريدة للمسودة');
                    }}
                    className="text-[11px] text-[#ff4328] hover:underline font-medium"
                  >
                    + استلهام والرد
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
