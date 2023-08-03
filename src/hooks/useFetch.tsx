import { Octokit } from "octokit";
import { useEffect, useState } from "react";

interface IFetch {
  url: string;
  options: object;
}

export const useFetch = (params: IFetch) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    octokit
      .request(params.url, {
        request: {
          signal: abortController.signal,
        },
        ...params.options,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((data) => {
        setIsLoading(false);
        setData(data.data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setIsLoading(false);
        setError(err);
      });

    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.url, (params.options as any).q]);

  return { data, isLoading, error };
};
