import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './app/screens/Auth/Auth';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen name='Auth' component={Auth} options={ { headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}