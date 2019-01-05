/**
 * Renderable view
 */
export type TView<T = {}> = (options: T) => Document;

/**
 * Shared Explicit state type
 */
export type ExplicitState = 'explicit' | 'cleaned' | 'notExplicit';

export type FeedType = 'top';

/**
 * Adapted Podcast interface
 */
export interface IPodcast {
  /**
   * iTunes id of the podcast
   */
  id: number;
  /**
   * Podcast author
   */
  author: string;
  /**
   * Podcast rss feed
   */
  feed: string;
  /**
   * Podcast title
   */
  title: string;
  /**
   * Podcast large cover art
   */
  cover: string;
  /**
   * Podcast small cover art
   */
  thumbnail: string;
  /**
   * List of categories podcast appears in
   */
  categories: number[];
  /**
   * Podcast's explicitness
   */
  explicit: ExplicitState;
  /**
   * Podcast's episode count
   */
  count: number;
}

/**
 * Adapted Episode interface
 */
export interface IEpisode {
  title: string;
  summary: string | null;
  published: number | null;
  cover: string;
  explicit: boolean;
  duration: number | null;
  link: string | null;
  file: IFileInfo;
  author: string | null;
  episodeArt: string | null;
  showNotes: string;
}

/**
 * Adapted Episode with feed info
 */
export interface IEpisodeInfo extends IEpisode {
  feed: string;
}

/**
 * Episode listing
 */
export interface IEpisodeListing {
  title: string;
  link: string;
  published: number | null;
  description: string;
  author: string;
  cover: string;
  keywords: string[];
  explicit: boolean;
  episodes: IEpisode[];
}

/**
 * Episode info listing
 */
export interface IPodcastEpisodesInfo extends IEpisodeListing {
  episodes: IEpisodeInfo[];
  feed: string;
}

export type RenderablePodcast = IPodcast | IPodcastEpisodesInfo;

/**
 * Podcasts Search result interface
 */
export interface IPodcastSearchResult {
  id: number;
  author: string;
  feed: string;
  thumbnail: string;
  title: string;
}

export interface ISubscriptionsMap {
  [feed: string]: IPodcastEpisodesInfo;
}

export interface IFileInfo {
  url: string;
  length: string;
  type: string;
}

export interface IOPMLFeed {
  title: string;
  feed: string;
}

export interface IOPMLJson {
  feeds: IOPMLFeed[];
}

export type EpisodePlayerState = 'playing' | 'paused' | 'stopped';

export type KeyboardShortcuts =
  | 'play'
  | 'next'
  | 'prev'
  | 'seek-back'
  | 'seek-forward'
  | 'dismiss'
  | 'focus'
  | 'up'
  | 'down'
  | 'change-theme'
  | 'episode-info'
  | 'settings'
  | 'toggle-drawer'
  | 'select';

export interface IKeyboardShortcutsMap {
  [keyCode: number]: KeyboardShortcuts;
}

export interface IPodcastWebpackModule {
  hot?: {
    accept: (val?: string, cb?: () => void) => void;
  };
}
