export class GenericFetch {
  getJSON = async <T>(config: { url: string }): Promise<T> => {
    const fetchConfig = { method: "GET" };
    const response = await fetch(config.url, fetchConfig);
    const result: T = await response.json();
    return result;
  };
}
