import { View, Text, FlatList } from 'react-native';
import { globalStyle } from '../styles/style';
// import Entypo from '@expo/vector-icons/Entypo';
import { useEffect, useState } from 'react';
import { ApiResponse, HomeScreenProps, NewsType } from '../types';
import NewsItem from './NewsItem';

export default function Main({ navigation }: HomeScreenProps) {
  const [news, setNews] = useState<NewsType[]>([]);

  const navigate = (item: NewsType) => navigation.navigate('article', { item });

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=science&pageSize=10&language=ru&apiKey=${process.env.EXPO_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((response: ApiResponse) => {
        if (response.status === 'ok') {
          setNews(response.articles);
        }
      });
  }, []);
  return (
    <View style={globalStyle.main}>
      {/* <Entypo name="news" size={50} /> */}
      <Text style={globalStyle.title}>Главная</Text>
      <FlatList
        style={globalStyle.list}
        data={news}
        renderItem={({ item }) => <NewsItem handlePress={() => navigate(item)} item={item} />}
      />
    </View>
  );
}
