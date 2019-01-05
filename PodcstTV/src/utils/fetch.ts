interface HeadersMap {
  [key: string]: any;
}

export interface IFetchOptions {
  body?: any;
  credentials?: string;
  method?: 'get' | 'put' | 'post' | 'delete';
  headers?: HeadersMap;
}

export default function fetch(url: string, options: IFetchOptions = {}): Promise<Response> {
  options = options || {};
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.open(options.method || 'get', url, true);

    for (let i in options.headers) {
      request.setRequestHeader(i, options.headers[i]);
    }

    request.withCredentials = options.credentials=='include';

    request.onload = () => {
      resolve(response() as any as Response);
    };

    request.onerror = reject;

    request.send(options.body || null);

    function response() {
      let keys: string[] = [],
        all: string[][] = [],
        headers: HeadersMap = {},
        header: any;

      request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (_, key, value) => {
        keys.push(key = key.toLowerCase());
        all.push([key, value]);
        header = headers[key];
        headers[key] = header ? `${header},${value}` : value;
        return _;
      });

      return {
        ok: (request.status/100|0) == 2,		// 200-299
        status: request.status,
        statusText: request.statusText,
        url: request.responseURL,
        text: () => Promise.resolve(request.responseText),
        json: () => Promise.resolve(request.responseText).then(JSON.parse),
        blob: () => Promise.resolve(new Blob([request.response])),
        headers: {
          keys: () => keys as any,
          entries: () => all as any,
          get: <T = any>(key: string): T => headers[key.toLowerCase()],
          has: (key: string) => key.toLowerCase() in headers
        } as any
      };
    }
  });
}
