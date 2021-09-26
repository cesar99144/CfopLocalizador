import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home/Home';

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false
                }}
            >
            </Stack.Screen>
        </Stack.Navigator>
    );
}