import fetch, { IFetchOptions } from './fetch';
import { App } from '../types';

const BASE_URL = 'https://data.podcst.io';

const api = {
  async request<T = any>(url: string = '/', options: IFetchOptions = {}): Promise<T> {
    return fetch(`${BASE_URL}${url}`, options)
      .then(res => res.json());
  },

  top() {
    return this.request<App.IPodcast[]>('/top?limit=100');
  },
};

export default api;
