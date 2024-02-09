import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/style';
import { ArticleScreenProps } from '../types';
import { OpenURLButton } from './OpenUrlButton';

export default function NewsPage({ route }: ArticleScreenProps) {
  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}>{route.params.item.title}</Text>
      <Image style={styles.img} source={{ height: 200, uri: route.params.item.urlToImage }} />
      <OpenURLButton title="Читать полностью" url={route.params.item.url} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    objectFit: 'contain',
  },
});
