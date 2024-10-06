import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import Details from './pages/details';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'Rick and Morty API',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#ffca28',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            title: 'Pagina de Registo',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#ffca28',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: 'Rick and Morty API',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#ffca28',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            title: 'DETAILS',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#ffca28',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
