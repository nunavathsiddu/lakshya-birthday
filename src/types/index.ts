export interface TimelineMilestone {
  id: string;
  step: string;
  date: string;
  title: string;
  subtitle: string;
  story: string;
  quote?: string;
  image: string;
  imageAlt: string;
  badge?: string;
}

export interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  date: string;
  tag: "adventures" | "moments" | "candid" | "favorites";
  aspectRatio?: "portrait" | "landscape" | "square";
  note?: string;
}

export interface LoveReason {
  id: number;
  number: string;
  title: string;
  description: string;
  tagline: string;
  category: string;
  accentColor?: string;
}

export interface FavoriteMoment {
  id: string;
  title: string;
  date: string;
  location: string;
  story: string;
  image: string;
  accentQuote: string;
}

export interface OpenWhenLetter {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  iconName: string;
  previewSnippet: string;
  letterContent: string[];
  signature: string;
  postScript?: string;
  accentGlow: string;
}

export interface ConstellationStar {
  id: string;
  x: number; // percentage 0-100 on canvas/sky
  y: number; // percentage 0-100 on canvas/sky
  name: string;
  date: string;
  title: string;
  story: string;
  image?: string;
  brightness: number; // 1-3
  connections?: string[]; // IDs of stars to draw lines to
}

export interface FutureDream {
  id: string;
  number: string;
  title: string;
  description: string;
  wish: string;
  icon: string;
}

export interface BirthdayImages {
  hero: string;
  lakshya: string;
  couple01: string;
  couple02: string;
  couple03: string;
  couple04: string;
  couple05: string;
  memory01: string;
  memory02: string;
  memory03: string;
  memory04: string;
  memory05: string;
  memory06: string;
  memory07: string;
  memory08: string;
  memory09: string;
  memory10: string;
  memory11: string;
  memory12: string;
  memory13: string;
  memory14: string;
  memory15: string;
}

export interface BirthdayConfig {
  images: BirthdayImages;
  recipient: {
    name: string;
    nickname: string;
    birthDate: string; // e.g. "October 23"
    targetMonth: number; // 1-12 (10 for Oct)
    targetDay: number; // 23
    heroGreeting: string;
    meaningOfName: string;
    nameSubtitle: string;
  };
  audio: {
    title: string;
    artist: string;
    src: string; // path in public/audio/
  };
  secretOpening: {
    eyebrow: string;
    teaserTitle: string;
    invitation: string;
    subtext: string;
  };
  firstMemory: {
    date: string;
    location: string;
    title: string;
    story: string;
    quote: string;
    image: string;
  };
  timeline: TimelineMilestone[];
  gallery: GalleryPhoto[];
  reasons: LoveReason[];
  favoriteMoments: FavoriteMoment[];
  openWhen: OpenWhenLetter[];
  letter: {
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    postscript: string;
  };
  constellation: {
    subtitle: string;
    description: string;
    stars: ConstellationStar[];
  };
  futureDreams: FutureDream[];
  promise: {
    eyebrow: string;
    headline: string;
    lines: string[];
    closing: string;
  };
  surpriseReveal: {
    preText: string;
    highlightText: string;
    climaxHeadline: string;
    message: string;
    candlePrompt: string;
    candleBlownMessage: string;
  };
  lastPage: {
    quote: string;
    author: string;
    finalNote: string;
    replayText: string;
  };
  easterEggs: {
    heartTapsNeeded: number;
    hiddenNotes: string[];
  };
}
