import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import Slider from '@react-native-community/slider';
import Geolocation from '@react-native-community/geolocation';

const AllControls = () => {


    const [location, setLocation] = useState()

    const getLocation = () => {
        Geolocation.getCurrentPosition(info => {
            const { longitude, latitude } = info.coords
            setLocation({ longitude, latitude })
        },
            error => alert(error.message))
        openMaps()
    }

    useEffect(() => {
        console.log(location)
    }, [location])

    const openMaps = () => {
        const { latitude, longitude } = location;
        if (latitude, longitude) {
            const url = `https://www.google.com/maps/search/?api=1&query=${longitude},${latitude}`
            Linking.openURL(url)
        }
        else {
            alert('error in location')
        }
    }

    return (
        <>
            <Button title='get location' onPress={getLocation} />
            <Text>{location}</Text>
        </>
    )
}

export default AllControls

const styles = StyleSheet.create({})