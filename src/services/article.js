import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidapikey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '4'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '39a4f5a5cbmsh4651d56f15db3b8p1ae099jsnb21a7125cb1d',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidapikey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=4`
        })
    })
});

export const {useLazyGetSummaryQuery} = articleApi;