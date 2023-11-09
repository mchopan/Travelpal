import { Button, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../Header'

const Home = ({ navigation }) => {

    return (
        <View style={{ gap: 5, margin: 10 }}>
            <Header />
            <Button title='Media' onPress={() => { navigation.navigate('Media') }} />
            <Button title='Location' onPress={() => { navigation.navigate('Location') }} />
            <Button title='Torch' onPress={() => { navigation.navigate('Torch') }} />
            <Button title='Audio' onPress={() => { navigation.navigate('Audio') }} />
            <Button title='Card' onPress={() => { navigation.navigate('Card') }} />
            <Button title='PostData' onPress={() => { navigation.navigate('PostData') }} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})