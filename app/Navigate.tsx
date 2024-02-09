import Main from './components/Main';
import NewsPage from './components/NewsPage';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} options={{ title: 'Главная' }} />
        <Stack.Screen name="article" component={NewsPage} options={{ title: 'Статья' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
