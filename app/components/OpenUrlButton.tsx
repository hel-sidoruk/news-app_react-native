import { useCallback } from 'react';
import { Alert, Button, Linking } from 'react-native';

type OpenURLButtonProps = {
  url: string;
  title: string;
};

export function OpenURLButton({ url, title }: OpenURLButtonProps) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={title} onPress={handlePress} />;
}
