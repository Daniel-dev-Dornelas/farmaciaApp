import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, OnboardingScreen } from '../../src/pages';

const Stack = createNativeStackNavigator();


export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ title: 'Tela de Onboarding' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
