import React, { useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as Font from 'expo-font';
import Navigate from './Navigate';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'mt-semibold': require('./assets/fonts/MontserratAlternates-SemiBold.ttf'),
          'mt-black': require('./assets/fonts/MontserratAlternates-Black.ttf'),
          'mt-light': require('./assets/fonts/MontserratAlternates-Light.ttf'),
        });
        await Font.loadAsync(Entypo.font);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  return appReady ? <Navigate /> : <></>;
}
