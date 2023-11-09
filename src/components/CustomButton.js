import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../colors/colors'

const CustomButton = ({ name, handlebuttonClick, width, padding }) => {
    return (
        <TouchableOpacity onPress={handlebuttonClick} style={[styles.signin, { width, padding }]}>
            <Text style={styles.btnText}>{name}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    signin: {
        borderWidth: 1,
        backgroundColor: colors.light.primary,
        borderColor: "white",
        padding: 15,
        borderRadius: 5,
        borderColor: colors.light.white,
    },
    btnText: {
        textAlign: "center",
        fontWeight: '700'
    }
})