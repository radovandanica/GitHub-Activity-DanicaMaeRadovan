import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from './SignInScreen';
import SubjectsScreen from './SubjectsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ title: 'Student Sign-In' }} 
        />
        <Stack.Screen 
          name="Subjects" 
          component={SubjectsScreen} 
          options={{ title: 'My Enrolled Subjects' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
