import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useMyContext } from '../MyContext';
import UnAuthStack from './UnAuthStack/UnAuthStack';
import AuthStack from './AuthStack/AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage'

const IntitailScreen = () => {

    const { isAuth, setIsAuth } = useMyContext();

    const getUserInfo = async () => {
        const userInfo = await AsyncStorage.getItem('loginInfo')
        const updated = JSON.parse(userInfo)
        if (updated.username === 'admin' && updated.password === 'admin@123') {
            setIsAuth(true)
        }
        else {
            setIsAuth(false)
        }
    }
    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        !isAuth ? <UnAuthStack /> : <AuthStack />
    )
}

export default IntitailScreen

const styles = StyleSheet.create({})