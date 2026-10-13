import React from 'react';
import { ActiveTab, Language, Theme, ViewMode } from '../types';
import { translations } from '../i18n/translations';
import { Sun, Moon, Send, Globe, Smartphone, Monitor } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onQuickPublish: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  theme,
  toggleTheme,
  viewMode,
  setViewMode,
  onQuickPublish,
}) => {
  const t = translations[lang];

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'publisher', label: t.nav.publisher },
    { id: 'calendar', label: t.nav.calendar },
    { id: 'growth', label: t.nav.growth },
    { id: 'memes', label: t.nav.memes },
    { id: 'visuals', label: t.nav.visuals },
    { id: 'intelligence', label: t.nav.intelligence },
    { id: 'voice', label: t.nav.voice },
    { id: 'analytics', label: t.nav.analytics },
    { id: 'prd', label: t.nav.prd },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80 bg-[#faf9f6]/90 dark:bg-[#0c0d0e]/90 transition-colors">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('publisher')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff4328] to-orange-500 text-white flex items-center justify-center font-extrabold text-xs tracking-tighter shadow-sm transition-transform group-hover:scale-105">
              M7
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap">
                {t.appName}
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono tracking-wider uppercase">
                {t.badgeVersion}
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Single-line, whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Controls, Mode Switcher & Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile vs Desktop View Mode Toggle */}
          <button
            onClick={() => setViewMode(viewMode === 'desktop' ? 'mobile' : 'desktop')}
            title={viewMode === 'desktop' ? 'معاينة تطبيق الجوال' : 'العودة لسطح المكتب'}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              viewMode === 'mobile'
                ? 'bg-[#ff4328] text-white border-[#ff4328] shadow-sm'
                : 'border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400'
            }`}
          >
            {viewMode === 'mobile' ? (
              <>
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.viewMode.desktop}</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-[#ff4328]" />
                <span className="hidden sm:inline">{t.viewMode.mobile}</span>
              </>
            )}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-0.5 text-xs">
            <Globe className="w-3.5 h-3.5 mx-1.5 text-neutral-400" />
            {(['ar', 'en', 'fr'] as Language[]).map((lng) => (
              <button
                key={lng}
                onClick={() => setLang(lng)}
                className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors uppercase ${
                  lang === lng
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            className="w-8 h-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center justify-center transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onQuickPublish}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ff4328] hover:bg-[#e6351d] text-white text-xs font-semibold shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{t.common.publishNow}</span>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Sub-Navigation Scrollbar */}
      <div className="lg:hidden flex items-center gap-1 overflow-x-auto px-4 py-2 border-t border-neutral-200/50 dark:border-neutral-800/50 bg-[#faf9f6]/95 dark:bg-[#0c0d0e]/95">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              activeTab === item.id
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
