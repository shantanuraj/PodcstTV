import { chunk, drop, take } from 'lodash/fp';
import  { createSelector } from 'reselect';
import { IPodcast } from '../types';
import escape from '../utils/escape';

const escapePodcasts = (podcasts: IPodcast[]) => podcasts.map(podcast => ({
  ...podcast,
  title: escape(podcast.title),
  author: escape(podcast.author),
}));

export const topN = (n: number) => createSelector(
  escapePodcasts,
  take(n)
);

export const dropN = (n: number) => createSelector(
  escapePodcasts,
  drop(n)
);

export const chunkN = (n: number) => createSelector(
  escapePodcasts,
  chunk(n)
);
