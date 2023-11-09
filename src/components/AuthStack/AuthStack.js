import React from 'react'
import Home from './Home'
import AllControls from './AllControls'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FlashLight from './FlashLight'
import Media from './Media'
import Audio from './Audio'
import Card from './Card'
import PostData from './PostData'

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Torch' component={FlashLight} />
            <Stack.Screen name='Location' component={AllControls} />
            <Stack.Screen name='Media' component={Media} />
            <Stack.Screen name='Audio' component={Audio} />
            <Stack.Screen name='Card' component={Card} />
            <Stack.Screen name='PostData' component={PostData} />
        </Stack.Navigator>
    )
}

export default AuthStack