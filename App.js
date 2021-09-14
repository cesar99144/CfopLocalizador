import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './src/pages/CFOP/Home';
import Devolucao from './src/pages/CFOP/Devolucao';


export default function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="home" 
          component={Home}
          options={{
            headerStyle:{
             
            },
            headerShown: false
          }}
          >
        </Stack.Screen>
          <Stack.Screen name="devolucao" component={Devolucao}
            options={{
              headerStyle:{
                backgroundColor: '#34ace0'
              },
              headerShown: false
            }}
          
          >
            
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}