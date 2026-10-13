import React, { useState } from 'react';
import { Language, ModelUsageMetric } from '../../types';
import { translations } from '../../i18n/translations';
import {
  DollarSign,
  ShieldAlert,
  Cpu,
  GitPullRequest,
  CheckCircle2,
  Clock,
  Terminal,
  RefreshCw,
  AlertTriangle,
} from 'lucide-react';

interface AnalyticsWorkspaceProps {
  lang: Language;
  onNotify: (msg: string) => void;
}

export const AnalyticsWorkspace: React.FC<AnalyticsWorkspaceProps> = ({
  lang,
  onNotify,
}) => {
  const t = translations[lang];

  // Model cost metrics
  const [metrics] = useState<ModelUsageMetric[]>([
    {
      provider: 'anthropic',
      model: 'claude-3-5-sonnet-20241022',
      totalCostUSD: 6.84,
      lastUsedDate: '2026-10-13',
      requestsCount: 215,
      tokensTotal: 184000,
    },
    {
      provider: 'openai',
      model: 'gpt-4o',
      totalCostUSD: 4.22,
      lastUsedDate: '2026-10-13',
      requestsCount: 140,
      tokensTotal: 120500,
    },
    {
      provider: 'elevenlabs',
      model: 'eleven_v3_turbo',
      totalCostUSD: 2.45,
      lastUsedDate: '2026-10-12',
      requestsCount: 42,
      tokensTotal: 34000,
    },
    {
      provider: 'google',
      model: 'gemini-1.5-flash',
      totalCostUSD: 0.77,
      lastUsedDate: '2026-10-13',
      requestsCount: 310,
      tokensTotal: 420000,
    },
  ]);

  const totalCost = metrics.reduce((acc, curr) => acc + curr.totalCostUSD, 0);
  const budgetCap = 50.0;
  const safeThreshold = budgetCap * 0.8; // 80% guardrail limit
  const percentageOfBudget = (totalCost / budgetCap) * 100;

  // Active GitHub issue automation tasks (gh-issues skill)
  const [issues] = useState([
    {
      id: 42,
      title: 'feat(memes): add custom Arabic typography font weight slider',
      branch: 'fix/issue-42',
      status: 'PR Opened',
      prUrl: 'https://github.com/xgrowth/arabic-kit/pull/58',
      worker: 'coding-agent-01',
    },
    {
      id: 43,
      title: 'perf(xurl): cache bearer token to prevent 429 rate limit retries',
      branch: 'fix/issue-43',
      status: 'In Progress',
      worker: 'coding-agent-02',
    },
    {
      id: 44,
      title: 'feat(voice): support whisper diarization for multi-speaker podcasts',
      branch: 'fix/issue-44',
      status: 'Merged',
      prUrl: 'https://github.com/xgrowth/arabic-kit/pull/55',
      worker: 'coding-agent-01',
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Top Banner & KPI Stat Cards */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {t.analytics.title}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              {t.analytics.subtitle}
            </p>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
            model-usage CLI • CodexBar Log
          </span>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Total Spend */}
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              {t.analytics.totalSpend}
            </span>
            <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
              ${totalCost.toFixed(2)}
            </div>
            <div className="mt-2 text-[11px] text-neutral-500">
              من أصل سقف ${budgetCap.toFixed(2)}
            </div>
          </div>

          {/* Card 2: Cost per post */}
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              {t.analytics.costPerPost}
            </span>
            <div className="text-2xl font-bold font-mono text-emerald-600 tabular-nums">
              $0.038
            </div>
            <div className="mt-2 text-[11px] text-neutral-500">
              المستهدف: أقل من $0.08 ✓
            </div>
          </div>

          {/* Card 3: Safe Threshold */}
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              {t.analytics.safeThreshold}
            </span>
            <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
              ${safeThreshold.toFixed(2)}
            </div>
            <div className="mt-2 text-[11px] text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>ضمن الحدود الآمنة ({percentageOfBudget.toFixed(1)}%)</span>
            </div>
          </div>

          {/* Card 4: Monthly Burn */}
          <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              {t.analytics.monthlyBurn}
            </span>
            <div className="text-2xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
              $24.50
            </div>
            <div className="mt-2 text-[11px] text-neutral-500">
              توفير 85% مقارنة بفرق المونتاج
            </div>
          </div>
        </div>

        {/* Progress Guardrail Bar */}
        <div className="mt-6 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              نسبة استهلاك الميزانية الشهرية
            </span>
            <span className="font-mono text-neutral-500">
              ${totalCost.toFixed(2)} / ${budgetCap.toFixed(2)} (إغلاق تلقائي عند 80%)
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
            <div
              className={`h-full transition-all ${
                totalCost > safeThreshold ? 'bg-red-500' : 'bg-[#ff4328]'
              }`}
              style={{ width: `${Math.min(100, percentageOfBudget)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Model Breakdown Table */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
        <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#ff4328]" />
          <span>{t.analytics.modelBreakdown}</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-400 font-mono text-[11px]">
                <th className="py-2.5 px-3 font-medium">{t.analytics.provider}</th>
                <th className="py-2.5 px-3 font-medium">{t.analytics.model}</th>
                <th className="py-2.5 px-3 font-medium">الطلبات</th>
                <th className="py-2.5 px-3 font-medium">{t.analytics.tokens}</th>
                <th className="py-2.5 px-3 font-medium">{t.analytics.costUsd}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/60 font-mono">
              {metrics.map((m) => (
                <tr key={m.model} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-950/50">
                  <td className="py-3 px-3 text-neutral-600 dark:text-neutral-400">{m.provider}</td>
                  <td className="py-3 px-3 font-semibold text-neutral-900 dark:text-white">
                    {m.model}
                  </td>
                  <td className="py-3 px-3 text-neutral-600 dark:text-neutral-400 tabular-nums">
                    {m.requestsCount}
                  </td>
                  <td className="py-3 px-3 text-neutral-600 dark:text-neutral-400 tabular-nums">
                    {m.tokensTotal.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 font-bold text-emerald-600 tabular-nums">
                    ${m.totalCostUSD.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* DevOps & GitHub Worker Automation (gh-issues skill) */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <GitPullRequest className="w-4 h-4 text-[#ff4328]" />
              <span>{t.analytics.ghIssuesTitle}</span>
            </h3>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              {t.analytics.ghIssuesDesc}
            </p>
          </div>
          <button
            onClick={() => onNotify('تم فحص مستودع GitHub وتحديث قائمة وكلاء الأتمتة!')}
            className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 font-medium"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>تحديث المهام</span>
          </button>
        </div>

        <div className="space-y-3">
          {issues.map((iss) => (
            <div
              key={iss.id}
              className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/60 flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[#ff4328] font-bold">#{iss.id}</span>
                <span className="font-medium text-neutral-900 dark:text-white">{iss.title}</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <span className="text-neutral-400">{iss.worker}</span>
                <span
                  className={`px-2 py-0.5 rounded font-semibold ${
                    iss.status === 'Merged'
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300'
                      : iss.status === 'PR Opened'
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
                  }`}
                >
                  {iss.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
