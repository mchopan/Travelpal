import React from 'react'
import Login from './Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from './Signup';

const Stack = createNativeStackNavigator();

const UnAuthStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    )
}

export default UnAuthStack

