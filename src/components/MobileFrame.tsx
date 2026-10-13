import React, { useState } from 'react';
import { Language, ActiveTab } from '../types';
import { translations } from '../i18n/translations';
import {
  Send,
  Calendar,
  Flame,
  Image,
  Sparkles,
  Layers,
  BarChart2,
  Bell,
  Sliders,
  ChevronRight,
  Wifi,
  Battery,
  Share2,
  Check,
  Plus,
  RefreshCw,
  Search,
  MessageSquare,
  Repeat,
  Heart,
  Bookmark,
} from 'lucide-react';
import { THREAD_TEMPLATES } from '../data/threadTemplates';

interface MobileFrameProps {
  lang: Language;
  onNotify: (msg: string) => void;
  onSwitchToDesktop: () => void;
  onOpenPublisherWithText: (text: string) => void;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  lang,
  onNotify,
  onSwitchToDesktop,
  onOpenPublisherWithText,
}) => {
  const t = translations[lang];

  type MobileNav = 'compose' | 'feed' | 'calendar' | 'viral' | 'memes';
  const [mobileTab, setMobileTab] = useState<MobileNav>('compose');

  const [mobileDraft, setMobileDraft] = useState(
    lang === 'ar'
      ? '🚀 نطلق اليوم تطبيق MAEK7-Growth Suite للجوال!\n\nأصبح بإمكانك جدولة الثريدات، تصميم الميمز، وفحص احتمالية الانتشار من هاتفك في أي مكان 📱🧵👇'
      : '🚀 Launching MAEK7-Growth Suite Mobile App today!\n\nSchedule threads, craft memes, and test viral scores straight from your phone on the go 📱🧵👇'
  );

  const [currentTime] = useState('09:41');
  const [selectedMeme, setSelectedMeme] = useState('https://i.imgflip.com/30b1gx.jpg');
  const [hasMedia, setHasMedia] = useState(true);

  const viralScore = Math.min(
    96,
    50 +
      (/\d+/.test(mobileDraft) ? 15 : 0) +
      (mobileDraft.includes('\n') ? 12 : 0) +
      (hasMedia ? 18 : 0)
  );

  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Top Controls Bar above phone */}
      <div className="w-full max-w-[420px] flex items-center justify-between px-3 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-neutral-800 dark:text-neutral-200">
            MAEK7 iOS & Android Mobile PWA
          </span>
        </div>
        <button
          onClick={onSwitchToDesktop}
          className="px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-semibold hover:border-neutral-500 transition-colors shadow-sm"
        >
          {t.viewMode.desktop}
        </button>
      </div>

      {/* Flagship Smartphone Chassis (iPhone 16 Pro Style) */}
      <div className="relative w-full max-w-[390px] h-[810px] rounded-[52px] border-[10px] border-neutral-900 dark:border-neutral-700 bg-neutral-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-neutral-800">
        {/* Dynamic Island / Hardware Speaker */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-neutral-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-blue-950/60" />
        </div>

        {/* Mobile Screen Area */}
        <div className="flex-1 bg-white dark:bg-[#0c0d0e] text-neutral-900 dark:text-white flex flex-col overflow-hidden">
          {/* iOS Status Bar */}
          <div className="pt-3 px-7 pb-2 flex items-center justify-between text-[11px] font-mono text-neutral-900 dark:text-white z-40 select-none">
            <span className="font-bold">{currentTime}</span>
            <div className="flex items-center gap-2">
              <Wifi className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold">5G</span>
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile In-App Header */}
          <div className="px-5 py-2.5 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#ff4328] text-white flex items-center justify-center font-extrabold text-xs shadow-sm">
                M7
              </div>
              <span className="text-xs font-extrabold tracking-tight">MAEK7</span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 font-bold">
                Online
              </span>
              <button
                onClick={() => onNotify('لا توجد إشعارات معلقة')}
                className="w-7 h-7 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300"
              >
                <Bell className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile Screen Content Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* View 1: Quick Mobile Composer */}
            {mobileTab === 'compose' && (
              <div className="space-y-3.5 animate-in fade-in duration-200">
                {/* Viral Score Banner */}
                <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-300/40 dark:border-amber-700/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-300">
                    <Flame className="w-4 h-4 text-[#ff4328]" />
                    <span>Viral Readiness: {viralScore}%</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold bg-white dark:bg-neutral-900 px-2 py-0.5 rounded">
                    ممتاز ✓
                  </span>
                </div>

                {/* Mobile Composer Input Box */}
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-3.5 space-y-2.5">
                  <textarea
                    value={mobileDraft}
                    onChange={(e) => setMobileDraft(e.target.value)}
                    rows={4}
                    placeholder="ما الذي يدور في ذهنك اليوم؟"
                    className="w-full bg-transparent text-xs text-neutral-900 dark:text-white focus:outline-none resize-none leading-relaxed"
                  />

                  {/* Attached Media in Mobile */}
                  {hasMedia && (
                    <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 h-28 bg-neutral-200 dark:bg-neutral-900">
                      <img src={selectedMeme} alt="Meme" className="w-full h-full object-cover" />
                      <button
                        onClick={() => setHasMedia(false)}
                        className="absolute top-1.5 right-1.5 bg-black/60 text-white rounded-full p-1 text-[10px]"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  {/* Character Progress */}
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-neutral-200/60 dark:border-neutral-800">
                    <span className="font-mono text-neutral-400">
                      {mobileDraft.length} / 280
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setHasMedia(!hasMedia)}
                        className="text-[10px] px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
                      >
                        {hasMedia ? 'إلغاء الميم' : '+ إرفاق ميم'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Hook Injectors */}
                <div>
                  <span className="text-[11px] font-bold text-neutral-500 block mb-1.5">
                    خُطّافات سريعة للجوال:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      '🔥 سر لم يخبرك به أحد:',
                      '💡 3 نصائح وفرت علي 10 ساعات:',
                      '🚨 توقف عن فعل هذا الخطأ فوراً:',
                    ].map((hk, i) => (
                      <button
                        key={i}
                        onClick={() => setMobileDraft(hk + '\n\n' + mobileDraft)}
                        className="text-[10px] px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400"
                      >
                        {hk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Publish Button */}
                <button
                  onClick={() => {
                    onNotify('تمت محاكاة النشر الفوري بنجاح عبر xurl Mobile!');
                  }}
                  className="w-full py-3 rounded-2xl bg-[#ff4328] hover:bg-[#e6351d] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-transform"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>نشر فوري عبر xurl Mobile</span>
                </button>
              </div>
            )}

            {/* View 2: Mobile Schedule Calendar */}
            {mobileTab === 'calendar' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>جدول اليوم والأيام القادمة</span>
                  <span className="font-mono text-[#ff4328] text-[11px]">ذروة 08:30م</span>
                </div>

                <div className="space-y-2">
                  {[
                    { time: '01:00 PM', type: 'ثريد', title: 'تحليل أتمتة MAEK7 للمطورين', status: 'مجدول' },
                    { time: '08:30 PM', type: 'ميم', title: 'ميم Drake العربي المقارن', status: 'مجدول' },
                    { time: '11:00 PM', type: 'اقتباس', title: 'كرت الحكمة وتوزيع الأفكار', status: 'مجدول' },
                  ].map((post, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-[#ff4328]">
                            {post.time}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-800">
                            {post.type}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-medium text-neutral-800 dark:text-neutral-200">
                          {post.title}
                        </p>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold">✓</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 3: Mobile Feed & Templates */}
            {mobileTab === 'feed' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <span className="text-xs font-bold block mb-1">
                  قوالب ثريدات فيروسية معربة (1-Click)
                </span>

                <div className="space-y-2.5">
                  {THREAD_TEMPLATES.slice(0, 3).map((tpl) => (
                    <div
                      key={tpl.id}
                      className="p-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 space-y-2 text-xs"
                    >
                      <div className="flex justify-between items-center font-bold">
                        <span>{tpl.title}</span>
                        <span className="text-[10px] text-[#ff4328] font-mono">{tpl.estimatedReach}</span>
                      </div>
                      <p className="text-[11px] text-neutral-500 leading-snug">
                        {tpl.description}
                      </p>
                      <button
                        onClick={() => {
                          setMobileDraft(tpl.tweets[0]);
                          setMobileTab('compose');
                          onNotify(`تم تحميل قالب ${tpl.title} في الجوال!`);
                        }}
                        className="w-full py-1.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-[11px] font-semibold"
                      >
                        استخدام في المحرر
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 4: Mobile Memes Gallery */}
            {mobileTab === 'memes' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <span className="text-xs font-bold block">
                  اختر قالباً سريعاً للتغريدة:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'drake', url: 'https://i.imgflip.com/30b1gx.jpg', name: 'Drake' },
                    { id: 'fine', url: 'https://i.imgflip.com/wxica.jpg', name: 'This Is Fine' },
                    { id: 'two-buttons', url: 'https://i.imgflip.com/1g8my4.jpg', name: 'Two Buttons' },
                    { id: 'uno', url: 'https://i.imgflip.com/3lmzyx.jpg', name: 'UNO 25' },
                  ].map((m) => (
                    <div
                      key={m.id}
                      onClick={() => {
                        setSelectedMeme(m.url);
                        setHasMedia(true);
                        setMobileTab('compose');
                        onNotify(`تم اختيار ميم ${m.name}`);
                      }}
                      className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 cursor-pointer hover:border-neutral-400 p-1 flex flex-col items-center"
                    >
                      <img src={m.url} alt={m.name} className="h-20 w-full object-cover rounded-lg" />
                      <span className="text-[10px] mt-1 font-semibold">{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Native Mobile Tab Bar */}
          <div className="px-3 py-2 border-t border-neutral-100 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 flex items-center justify-around text-neutral-400 z-40 select-none">
            <button
              onClick={() => setMobileTab('compose')}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
                mobileTab === 'compose' ? 'text-[#ff4328] font-bold' : 'hover:text-neutral-700'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>كتابة</span>
            </button>

            <button
              onClick={() => setMobileTab('calendar')}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
                mobileTab === 'calendar' ? 'text-[#ff4328] font-bold' : 'hover:text-neutral-700'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>الجدولة</span>
            </button>

            <button
              onClick={() => setMobileTab('feed')}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
                mobileTab === 'feed' ? 'text-[#ff4328] font-bold' : 'hover:text-neutral-700'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>القوالب</span>
            </button>

            <button
              onClick={() => setMobileTab('memes')}
              className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
                mobileTab === 'memes' ? 'text-[#ff4328] font-bold' : 'hover:text-neutral-700'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>ميمز</span>
            </button>
          </div>

          {/* iPhone Home Indicator Line */}
          <div className="pb-2 flex justify-center bg-white dark:bg-neutral-950">
            <div className="w-32 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
