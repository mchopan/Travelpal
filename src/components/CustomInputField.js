import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../colors/colors'

const CustomInputField = ({ placeholder, keyboardType, onChange, value, icon }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.symbols]}>{icon}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default CustomInputField

const styles = StyleSheet.create({
    inputContainer: {
        padding: 0,
        flexDirection: "row",
        width: '90%',
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.light.primary,
        marginVertical: 2,
        marginHorizontal: 0,
        borderRadius: 5,
    },
    input: {
        fontSize: 18,
        width: '100%'
    },
    symbols: {
        padding: 2,
        alignItems: "center",
        fontSize: 30,
        fontWeight: '700'
    },
})