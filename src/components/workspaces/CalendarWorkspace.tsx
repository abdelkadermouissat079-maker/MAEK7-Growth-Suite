import React, { useState } from 'react';
import { Language, CalendarPost } from '../../types';
import { translations } from '../../i18n/translations';
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  TrendingUp,
  CheckCircle2,
  Trash2,
  Send,
  Zap,
} from 'lucide-react';

interface CalendarWorkspaceProps {
  lang: Language;
  onNotify: (msg: string) => void;
  onLoadPostToComposer: (title: string) => void;
}

export const CalendarWorkspace: React.FC<CalendarWorkspaceProps> = ({
  lang,
  onNotify,
  onLoadPostToComposer,
}) => {
  const t = translations[lang];

  const days: ('Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat')[] = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  const daysMapAr: Record<string, string> = {
    Sun: 'الأحد',
    Mon: 'الإثنين',
    Tue: 'الثلاثاء',
    Wed: 'الأربعاء',
    Thu: 'الخميس',
    Fri: 'الجمعة',
    Sat: 'السبت',
  };

  const [posts, setPosts] = useState<CalendarPost[]>([
    {
      id: 'p1',
      day: 'Sun',
      time: '01:00 PM',
      type: 'thread',
      title: 'ثريد تفصيلي: كيف تضاعف وصولك على X بدون فريق مونتاج',
      status: 'scheduled',
    },
    {
      id: 'p2',
      day: 'Sun',
      time: '08:30 PM',
      type: 'meme',
      title: 'ميم Drake: التشتت بين 6 أدوات مقابل حزمة X Growth',
      status: 'scheduled',
    },
    {
      id: 'p3',
      day: 'Tue',
      time: '01:00 PM',
      type: 'stat',
      title: 'كرت إحصائية: نمو التفاعل +320% عبر المحتوى البصري',
      status: 'scheduled',
    },
    {
      id: 'p4',
      day: 'Tue',
      time: '08:30 PM',
      type: 'poll',
      title: 'استطلاع رأي: ما هي أكبر عقبة تواجهك في النشر اليومي؟',
      status: 'scheduled',
    },
    {
      id: 'p5',
      day: 'Thu',
      time: '08:30 PM',
      type: 'quote',
      title: 'كرت اقتباس فخم: المحتوى بدون توزيع كمتجر في شارع مهجور',
      status: 'scheduled',
    },
    {
      id: 'p6',
      day: 'Fri',
      time: '11:00 PM',
      type: 'thread',
      title: 'ملاحظة صوتية وتأملات أسبوعية حول مستقبل العمل المستقل',
      status: 'draft',
    },
  ]);

  // New post modal form state
  const [newTitle, setNewTitle] = useState('');
  const [newDay, setNewDay] = useState<'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'>('Mon');
  const [newTime, setNewTime] = useState('08:30 PM');
  const [newType, setNewType] = useState<'thread' | 'meme' | 'quote' | 'stat' | 'poll'>('thread');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newPost: CalendarPost = {
      id: String(Date.now()),
      day: newDay,
      time: newTime,
      type: newType,
      title: newTitle,
      status: 'scheduled',
    };
    setPosts([...posts, newPost]);
    setNewTitle('');
    setShowAddForm(false);
    onNotify('تمت إضافة موعد النشر إلى التقويم بنجاح!');
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter((p) => p.id !== id));
    onNotify('تم حذف المنشور المجدول');
  };

  const consistencyRate = Math.min(100, Math.round((posts.length / 10) * 100));

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.calendar.title}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {t.calendar.subtitle}
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-3.5 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{t.calendar.addScheduledSlot}</span>
          </button>
        </div>

        {/* Peak Hours & Best Timing Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-200 mb-1">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{t.calendar.peakHoursTitle}</span>
            </div>
            <p className="text-[11px] text-amber-800 dark:text-amber-300/80 leading-relaxed">
              {t.calendar.peakHoursDesc}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/50 dark:bg-emerald-950/20">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>أفضل الأيام للتفاعل</span>
            </div>
            <p className="text-[11px] text-emerald-800 dark:text-emerald-300/80 leading-relaxed">
              {t.calendar.bestDays}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                {t.calendar.consistencyScore}
              </span>
              <span className="font-mono text-emerald-600 font-bold">{consistencyRate}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden mt-2">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all"
                style={{ width: `${consistencyRate}%` }}
              />
            </div>
            <div className="text-[10px] text-neutral-400 mt-2 font-mono">
              {posts.length} منشورات مجدولة هذا الأسبوع (الهدف: 10 منشورات)
            </div>
          </div>
        </div>

        {/* Add Post Form Modal (Collapsible) */}
        {showAddForm && (
          <form
            onSubmit={handleAddPost}
            className="mt-6 p-5 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 space-y-4"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
              {t.calendar.addScheduledSlot}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="md:col-span-2">
                <label className="text-[11px] font-medium text-neutral-500 block mb-1">
                  {t.calendar.slotTitle}
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="مثال: ثريد 5 ممارسات لكتابة كود نظيف..."
                  className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-neutral-500 block mb-1">
                  {t.calendar.slotDay}
                </label>
                <select
                  value={newDay}
                  onChange={(e) => setNewDay(e.target.value as any)}
                  className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-2 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
                >
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {lang === 'ar' ? daysMapAr[d] : d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-medium text-neutral-500 block mb-1">
                  {t.calendar.slotTime}
                </label>
                <select
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-2 py-1.5 text-xs text-neutral-900 dark:text-white focus:outline-none"
                >
                  <option value="09:00 AM">09:00 AM (صباحي)</option>
                  <option value="01:00 PM">01:00 PM (ذروة منتصف اليوم)</option>
                  <option value="08:30 PM">08:30 PM (ذروة المساء - أفضل وقت)</option>
                  <option value="11:00 PM">11:00 PM (نقاشات الليل)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-2">
                {[
                  { id: 'thread', label: 'ثريد' },
                  { id: 'meme', label: 'ميم' },
                  { id: 'stat', label: 'إحصائية' },
                  { id: 'quote', label: 'اقتباس' },
                  { id: 'poll', label: 'استطلاع' },
                ].map((tp) => (
                  <button
                    key={tp.id}
                    type="button"
                    onClick={() => setNewType(tp.id as any)}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      newType === tp.id
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                        : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {tp.label}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-neutral-500 hover:text-neutral-800"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#ff4328] text-white text-xs font-semibold shadow-sm"
                >
                  حفظ في التقويم
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* 7-Day Weekly Interactive Calendar Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {days.map((day) => {
          const dayPosts = posts.filter((p) => p.day === day);
          const isPeakDay = day === 'Sun' || day === 'Tue' || day === 'Thu';

          return (
            <div
              key={day}
              className={`rounded-2xl border p-4 flex flex-col justify-between min-h-[320px] transition-colors ${
                isPeakDay
                  ? 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/90 shadow-sm'
                  : 'border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/50'
              }`}
            >
              <div>
                {/* Day Header */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-neutral-900 dark:text-white">
                      {lang === 'ar' ? daysMapAr[day] : day}
                    </span>
                    {isPeakDay && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4328]" title="يوم ذروة" />
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {dayPosts.length} منشورات
                  </span>
                </div>

                {/* Posts List in Day */}
                <div className="space-y-2.5">
                  {dayPosts.length === 0 ? (
                    <div className="py-8 text-center text-[11px] text-neutral-400 italic">
                      لا توجد منشورات
                    </div>
                  ) : (
                    dayPosts.map((post) => (
                      <div
                        key={post.id}
                        className="group relative p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all text-xs"
                      >
                        <div className="flex items-center justify-between mb-1 text-[10px] font-mono">
                          <span className="text-[#ff4328] font-bold">{post.time}</span>
                          <span className="px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                            {post.type}
                          </span>
                        </div>
                        <p className="text-[11px] font-medium text-neutral-800 dark:text-neutral-200 line-clamp-2 leading-relaxed">
                          {post.title}
                        </p>

                        <div className="mt-2 pt-1 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between opacity-80 group-hover:opacity-100">
                          <button
                            onClick={() => {
                              onLoadPostToComposer(post.title);
                              onNotify('تم نقل مسودة المنشور إلى محرر التغريدات!');
                            }}
                            className="text-[10px] text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5"
                          >
                            <Send className="w-3 h-3" />
                            <span>فتح للتعديل</span>
                          </button>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="text-neutral-400 hover:text-red-500"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Quick Add Button per day */}
              <button
                onClick={() => {
                  setNewDay(day);
                  setShowAddForm(true);
                }}
                className="mt-3 w-full py-1.5 rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
              >
                + إضافة
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
