import React, { useState } from 'react';
import { Language, VoiceOption } from '../../types';
import { translations } from '../../i18n/translations';
import {
  Mic,
  Play,
  Pause,
  Volume2,
  Sparkles,
  Send,
  Radio,
  Download,
  Copy,
  Check,
  Activity,
  FileAudio,
} from 'lucide-react';

interface VoiceWorkspaceProps {
  lang: Language;
  onNotify: (msg: string) => void;
  onSendToDraft: (text: string) => void;
}

export const VoiceWorkspace: React.FC<VoiceWorkspaceProps> = ({
  lang,
  onNotify,
  onSendToDraft,
}) => {
  const t = translations[lang];

  // Voices list
  const voices: VoiceOption[] = [
    { id: 'Clawd', name: 'Clawd (افتراضي)', accent: 'عربي معتدل / رصين', description: 'الصوت الرسمي الافتراضي للسرد والشروحات التقنية' },
    { id: 'Roger', name: 'Roger', accent: 'عميق وواثق', description: 'مناسب للثريدات الإخبارية والبيانات الرسمية' },
    { id: 'Sarah', name: 'Sarah', accent: 'حيوي ومتحمس', description: 'مناسب للبودكاست السريع والنصائح اليومية' },
    { id: 'Adam', name: 'Adam', accent: 'دافئ وهادئ', description: 'مناسب لقصص النجاح والثريدات التأملية' },
  ];

  const [selectedVoice, setSelectedVoice] = useState(voices[0]);
  const [ttsInput, setTtsInput] = useState(
    lang === 'ar'
      ? '[whispers] هل تعلم أن 73% من المبدعين العرب لا ينشرون يومياً بسبب تعقيد الأدوات؟ [short pause] [excited] اليوم سنغير ذلك تماماً!'
      : '[whispers] Did you know that 73% of creators fail to post consistently? [short pause] [excited] Today we change that completely!'
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  // Whisper STT state
  const [whisperAudioSnippet, setWhisperAudioSnippet] = useState(
    lang === 'ar'
      ? 'سجلت هذه الملاحظة أثناء قيادتي للسيارة: لاحظت أن معظم الشركات تبحث عن مهندسين يفهمون أتمتة الـ AI Agents وليس فقط كتابة كود تقليدي. يجب أن أكتب ثريداً مفصلاً يوضح الفرق بين الروبوتات والوكلاء المستقلين.'
      : 'Quick voice memo: Notice how companies are shifting focus towards autonomous AI agent workflows rather than conventional monolithic scripts.'
  );

  const emotionTags = [
    { tag: '[whispers]', label: 'همس [whispers]' },
    { tag: '[excited]', label: 'حماس [excited]' },
    { tag: '[curious]', label: 'تساؤل [curious]' },
    { tag: '[sarcastic]', label: 'تهكم [sarcastic]' },
    { tag: '[laughs]', label: 'ضحك [laughs]' },
    { tag: '[sighs]', label: 'تنهد [sighs]' },
    { tag: '[short pause]', label: 'وقفة قصيرة [pause]' },
    { tag: '[shouts]', label: 'صياح [shouts]' },
  ];

  const handleInsertTag = (tag: string) => {
    setTtsInput((prev) => prev + ' ' + tag + ' ');
    onNotify(`تم إدراج الوسم ${tag}`);
  };

  const handleSynthesize = () => {
    setIsSynthesizing(true);
    setTimeout(() => {
      setIsSynthesizing(false);
      setIsPlaying(true);
      onNotify('تم توليد المقطع الصوتي بنجاح عبر ElevenLabs / sag!');
    }, 800);
  };

  const generatedCli = `sag -v "${selectedVoice.id}" -o /tmp/thread-voice.mp3 "${ttsInput.replace(/"/g, '\\"')}"`;

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column: ElevenLabs / sag TTS Controls */}
      <div className="col-span-12 lg:col-span-7 space-y-6">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {t.voice.title}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {t.voice.subtitle}
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
              sag & whisper
            </span>
          </div>

          {/* Voice Selector */}
          <div className="mb-4">
            <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block mb-2">
              {t.voice.voiceSelector}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {voices.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVoice(v)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    selectedVoice.id === v.id
                      ? 'border-[#ff4328] bg-[#ff4328]/10 ring-1 ring-[#ff4328]'
                      : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 hover:border-neutral-300'
                  }`}
                >
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">
                    {v.name}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5 truncate">{v.accent}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Emotion Tags Toolbar */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                {t.voice.insertEmotionTag}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono">ElevenLabs v3 Audio Tags</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {emotionTags.map((et) => (
                <button
                  key={et.tag}
                  onClick={() => handleInsertTag(et.tag)}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-[#ff4328] hover:text-white transition-colors"
                >
                  {et.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Script Text Input */}
          <div className="mt-3">
            <textarea
              value={ttsInput}
              onChange={(e) => setTtsInput(e.target.value)}
              placeholder={t.voice.inputPlaceholder}
              rows={4}
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-3.5 text-xs text-neutral-900 dark:text-white focus:outline-none leading-relaxed font-mono"
            />
          </div>

          {/* Synthesize Button */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-[11px] text-neutral-500">
              التكلفة التقديرية: <span className="font-mono text-emerald-600 font-bold">$0.012</span>
            </div>
            <button
              onClick={handleSynthesize}
              disabled={isSynthesizing}
              className="px-4 py-2 rounded-lg bg-[#ff4328] hover:bg-[#e6351d] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 disabled:opacity-50"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isSynthesizing ? 'جاري المعالجة...' : t.voice.synthesizeBtn}</span>
            </button>
          </div>

          {/* CLI Snippet */}
          <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono text-neutral-400">sag CLI syntax</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedCli);
                  onNotify(t.common.copied);
                }}
                className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>{t.common.copyCommand}</span>
              </button>
            </div>
            <code className="text-[11px] font-mono text-neutral-800 dark:text-neutral-200 block overflow-x-auto whitespace-pre bg-neutral-50 dark:bg-neutral-950 p-2 rounded border border-neutral-200 dark:border-neutral-800">
              {generatedCli}
            </code>
          </div>
        </div>
      </div>

      {/* Right Column: Audio Waveform Preview & Whisper Transcriber */}
      <div className="col-span-12 lg:col-span-5 space-y-6">
        {/* Waveform Player Card */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#ff4328]" />
              <span>{t.voice.playbackTitle}</span>
            </h3>
            <span className="text-[10px] font-mono text-neutral-400">songsee spectrum</span>
          </div>

          {/* Simulated Audio Spectrum Display */}
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 flex flex-col items-center justify-center space-y-4 shadow-inner">
            <div className="flex items-end gap-1 h-16 w-full px-2">
              {Array.from({ length: 32 }).map((_, i) => {
                const heightPercent = isPlaying
                  ? Math.sin(i * 0.4 + Date.now() / 200) * 40 + 50
                  : (i % 5) * 12 + 20;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-full bg-gradient-to-t from-[#ff4328] to-orange-400 transition-all duration-75"
                    style={{ height: `${heightPercent}%` }}
                  />
                );
              })}
            </div>

            {/* Play/Pause Button Strip */}
            <div className="flex items-center gap-4 w-full justify-between text-xs text-neutral-400 font-mono px-2">
              <span>00:{isPlaying ? '08' : '00'}</span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:scale-105 transition-transform shadow-md"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 mr-0.5" />}
              </button>
              <span>00:15</span>
            </div>
          </div>
        </div>

        {/* Whisper Voice Note Transcriber (openai-whisper) */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Mic className="w-4 h-4 text-emerald-500" />
              <span>{t.voice.whisperTitle}</span>
            </h3>
            <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
              STT
            </span>
          </div>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
            {t.voice.whisperDesc}
          </p>

          <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/70 text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans">
            "{whisperAudioSnippet}"
          </div>

          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              onClick={() => {
                onSendToDraft(
                  `💡 ملاحظة صوتية سريعة:\n${whisperAudioSnippet}\n\n1/ الفارق الأساسي بين الروبوتات والوكلاء هو الاستقلالية.\n2/ كيف تبدأ في التعلم اليوم؟ 👇`
                );
                onNotify('تم تحويل الملاحظة الصوتية مباشرة إلى ثريد في محرك النشر!');
              }}
              className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.voice.convertToThread}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
