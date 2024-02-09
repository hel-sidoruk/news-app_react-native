import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export interface ApiResponse {
  status: 'ok' | 'error';
  totalResults: number;
  articles: NewsType[];
}

export interface NewsType {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export type RootStackParamList = {
  main: undefined;
  article: { item: NewsType };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'main'>;
export type ArticleScreenProps = NativeStackScreenProps<RootStackParamList, 'article'>;
