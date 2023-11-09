import { StyleSheet, View, KeyboardAvoidingView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import CustomInputField from '../CustomInputField'
import { useMyContext } from '../../MyContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors } from '../../colors/colors'
const loginPng = require('../../assets/login_png.png')

const Signup = ({ navigation }) => {


    const { setIsAuth } = useMyContext();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async () => {
        if (username === 'admin') {
            if (password === 'admin@123') {
                const LoginObj = { username: "admin", password: "admin@123" }
                const Stored = AsyncStorage.setItem('loginInfo', JSON.stringify(LoginObj))
                console.log(Stored)
                Alert.alert('Login Successful')
                setIsAuth(true)

            }
            else {
                Alert.alert("Wrong Password")
            }
        }
        else {
            Alert.alert("User not found")
        }
        setUsername('')
        setPassword('')
    }

    const handleNavigateLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.loginContainer}>
            {/* <Image source={loginPng} style={styles.loginPngContainer} /> */}
            <CustomInputField
                keyboardType={'default'}
                placeholder={"Name"}
                icon={'N'}
                onChange={setName}
                value={name}
            />
            <CustomInputField
                keyboardType={'default'}
                placeholder={"Email"}
                icon={'E'}
                onChange={setEmail}
                value={email}
            />
            <CustomInputField
                keyboardType={'default'}
                placeholder={"username"}
                icon={'U'}
                onChange={setUsername}
                value={username}
            />
            <CustomInputField
                keyboardType={'default'}
                placeholder={"password"}
                icon={'P'}
                onChange={setPassword}
                value={password}
            />
            <CustomButton
                handlebuttonClick={handleClick}
                name={'Sign in'}
                width={'90%'}
                padding={15}
            />
            <CustomButton
                handlebuttonClick={handleNavigateLogin}
                name={'Already Have an Account, Login'}
                width={'90%'}
                padding={15}
            />
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: colors.light.russianviolet,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 20
    },
    loginPngContainer: {
        width: 400,
        height: 400
    },
})