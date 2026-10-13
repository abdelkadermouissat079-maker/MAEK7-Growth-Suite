export type Language = 'ar' | 'en' | 'fr';
export type Theme = 'light' | 'dark';
export type ViewMode = 'desktop' | 'mobile';

export type ActiveTab =
  | 'publisher'
  | 'memes'
  | 'visuals'
  | 'intelligence'
  | 'voice'
  | 'calendar'
  | 'growth'
  | 'analytics'
  | 'prd';

export interface ThreadTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  estimatedReach: string;
  tweets: string[];
}

export interface TweetItem {
  id: string;
  text: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'gif';
  pollOptions?: string[];
  pollDurationHours?: number;
  likes: number;
  retweets: number;
  replies: number;
  bookmarks: number;
  views: number;
  createdAt: string;
}

export interface MemeBox {
  x: number;
  y: number;
  w: number;
  h: number;
  rotate?: number;
}

export interface MemeTemplate {
  id: string;
  name: string;
  imgflipId: string;
  imageUrl: string;
  kymUrl: string;
  width: number;
  height: number;
  aliases: string[];
  tags: string[];
  use: string;
  fields: string[];
  boxes: MemeBox[];
}

export interface WeatherCondition {
  city: string;
  country: string;
  tempC: number;
  feelsLikeC: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  suggestedHookAr: string;
  suggestedHookEn: string;
  suggestedHookFr: string;
}

export interface VoiceOption {
  id: string;
  name: string;
  accent: string;
  description: string;
  sampleAudio?: string;
}

export interface ModelUsageMetric {
  provider: string;
  model: string;
  totalCostUSD: number;
  lastUsedDate: string;
  requestsCount: number;
  tokensTotal: number;
}

export interface CalendarPost {
  id: string;
  day: 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
  time: string;
  type: 'thread' | 'meme' | 'quote' | 'stat' | 'poll';
  title: string;
  status: 'scheduled' | 'draft' | 'published';
  targetAudience?: string;
}

export interface ViralScoreResult {
  score: number;
  hookQuality: number; // 0-100
  readability: number; // 0-100
  mediaImpact: number; // 0-100
  ctaPresence: boolean;
  strengths: string[];
  improvements: string[];
}

export interface TrendingTopic {
  id: string;
  tag: string;
  category: string;
  region: string;
  postsVolume: string;
  growthRate: string;
  suggestedAngleAr: string;
  suggestedAngleEn: string;
}

export interface HookFormula {
  id: string;
  name: string;
  category: 'curiosity' | 'blueprint' | 'contrarian' | 'data' | 'story' | 'debate';
  template: string;
  example: string;
}
