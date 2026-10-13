import React, { useState, useEffect } from 'react';
import { ActiveTab, Language, Theme, ViewMode } from './types';
import { translations } from './i18n/translations';
import { Header } from './components/Header';
import { PublisherWorkspace } from './components/workspaces/PublisherWorkspace';
import { MemeWorkspace } from './components/workspaces/MemeWorkspace';
import { VisualsWorkspace } from './components/workspaces/VisualsWorkspace';
import { IntelligenceWorkspace } from './components/workspaces/IntelligenceWorkspace';
import { VoiceWorkspace } from './components/workspaces/VoiceWorkspace';
import { CalendarWorkspace } from './components/workspaces/CalendarWorkspace';
import { GrowthWorkspace } from './components/workspaces/GrowthWorkspace';
import { AnalyticsWorkspace } from './components/workspaces/AnalyticsWorkspace';
import { PrdWorkspace } from './components/workspaces/PrdWorkspace';
import { MobileFrame } from './components/MobileFrame';
import { Check } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('light');
  const [activeTab, setActiveTab] = useState<ActiveTab>('publisher');
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');
  const [attachedMedia, setAttachedMedia] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = translations[lang];

  // Sync RTL and lang attribute
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Sync dark class on html
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSendMediaToDraft = (mediaUrl: string) => {
    setAttachedMedia(mediaUrl);
    setActiveTab('publisher');
    setViewMode('desktop');
    showNotification(t.common.insertToTweet);
  };

  const handleSendTextToDraft = (text: string) => {
    setActiveTab('publisher');
    setViewMode('desktop');
    showNotification(t.common.insertToTweet);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] dark:bg-[#0c0d0e] text-[#1a1a1c] dark:text-[#f3f4f6] transition-colors duration-200">
      {/* Top Bar Contract Compliant Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onQuickPublish={() => {
          setActiveTab('publisher');
          showNotification(t.publisher.simulatedSuccess);
        }}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold shadow-xl border border-neutral-700 dark:border-neutral-200 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Workspace Container or Mobile App Mode */}
      <main className="flex-1 mx-auto max-w-[1440px] w-full px-4 md:px-8 py-8">
        {viewMode === 'mobile' ? (
          <MobileFrame
            lang={lang}
            onNotify={showNotification}
            onSwitchToDesktop={() => setViewMode('desktop')}
            onOpenPublisherWithText={handleSendTextToDraft}
          />
        ) : (
          <>
            {activeTab === 'publisher' && (
              <PublisherWorkspace
                lang={lang}
                onNotify={showNotification}
                attachedMedia={attachedMedia}
              />
            )}

            {activeTab === 'calendar' && (
              <CalendarWorkspace
                lang={lang}
                onNotify={showNotification}
                onLoadPostToComposer={(topic) => {
                  setActiveTab('publisher');
                  showNotification(`تم تجهيز موعد النشر في المحرر: ${topic}`);
                }}
              />
            )}

            {activeTab === 'growth' && (
              <GrowthWorkspace
                lang={lang}
                onNotify={showNotification}
                onSendToDraft={handleSendTextToDraft}
              />
            )}

            {activeTab === 'memes' && (
              <MemeWorkspace
                lang={lang}
                onNotify={showNotification}
                onSendToDraft={handleSendMediaToDraft}
              />
            )}

            {activeTab === 'visuals' && (
              <VisualsWorkspace
                lang={lang}
                onNotify={showNotification}
                onSendToDraft={handleSendMediaToDraft}
              />
            )}

            {activeTab === 'intelligence' && (
              <IntelligenceWorkspace
                lang={lang}
                onNotify={showNotification}
                onSendToDraft={handleSendTextToDraft}
              />
            )}

            {activeTab === 'voice' && (
              <VoiceWorkspace
                lang={lang}
                onNotify={showNotification}
                onSendToDraft={handleSendTextToDraft}
              />
            )}

            {activeTab === 'analytics' && (
              <AnalyticsWorkspace
                lang={lang}
                onNotify={showNotification}
              />
            )}

            {activeTab === 'prd' && (
              <PrdWorkspace
                lang={lang}
                onNotify={showNotification}
              />
            )}
          </>
        )}
      </main>

      {/* Clean Footer with Engine Telemetry & Credit */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/50 py-6 px-4 md:px-8 transition-colors">
        <div className="mx-auto max-w-[1440px] flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              {t.appName}
            </span>
            <span>•</span>
            <span>تطبيق الويب وتطبيق الجوال متصلان بالكامل</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>xurl</span>
            <span>•</span>
            <span>templates-lib</span>
            <span>•</span>
            <span>viral-score</span>
            <span>•</span>
            <span>mobile-pwa</span>
            <span>•</span>
            <span>meme-maker</span>
            <span>•</span>
            <span>sag (TTS)</span>
            <span>•</span>
            <span>whisper</span>
            <span>•</span>
            <span>model-usage</span>
          </div>

          <div className="text-[11px]">
            {lang === 'ar'
              ? 'MAEK7-Growth Suite: تمكين المبدعين العرب بأحدث محركات النشر الذكي'
              : 'MAEK7-Growth Suite: Empowering Creators with Autonomous Growth Engines'}
          </div>
        </div>
      </footer>
    </div>
  );
}
