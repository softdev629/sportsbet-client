import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Article {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
}

interface ArticleState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state, action: PayloadAction<Array<Article>>) => {
      state.articles = [...action.payload];
      state.loading = false;
    },
    failedLoading: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, finishLoading, failedLoading } =
  articlesSlice.actions;

export default articlesSlice.reducer;
