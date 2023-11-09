import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import Torch from 'react-native-torch';

const FlashLight = () => {

    const [isTorchOn, setIsTorchOn] = useState(false)

    const handleTorch = () => {
        Torch.switchState(!isTorchOn);
        setIsTorchOn(!isTorchOn);
    }

    return (
        <View>
            <Text>Torch</Text>
            <Button title={isTorchOn ? "On" : "Off"} onPress={handleTorch} />
        </View>
    )
}

export default FlashLight

const styles = StyleSheet.create({})