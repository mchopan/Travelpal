import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../colors/colors'
import CustomButton from './CustomButton'
import { useMyContext } from '../MyContext'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Header = () => {

    const { setIsAuth } = useMyContext()
    const handlebuttonClick = async () => {
        try {
            await AsyncStorage.removeItem('loginInfo')
            setIsAuth(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headertext}>TravelPal</Text>
            <CustomButton name={'Logout'} width={100} padding={10} handlebuttonClick={handlebuttonClick} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#007BFF',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headertext: {
        fontWeight: '600',
        color: colors.light.white_2
    }
})