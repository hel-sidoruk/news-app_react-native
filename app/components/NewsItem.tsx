import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NewsType } from '../types';

interface Props {
  item: NewsType;
  handlePress: () => void;
}

export default function NewsItem({ item, handlePress }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.box} onPress={handlePress}>
      <Text style={styles.text}>{item.title}</Text>
      <Image style={styles.img} source={{ height: 160, uri: item.urlToImage }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    elevation: 8,
    shadowColor: '#52006A',
    padding: 20,
    margin: 5,
    marginBottom: 20,
    borderRadius: 12,
  },
  text: {
    fontFamily: 'mt-semibold',
    marginBottom: 8,
  },
  img: {
    objectFit: 'contain',
  },
});
