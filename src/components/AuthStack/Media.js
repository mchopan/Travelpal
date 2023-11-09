import { View, Image, StyleSheet } from 'react-native'
import Video from 'react-native-video';
import ImagePicker from 'react-native-image-crop-picker';
import React, { useState } from 'react'
import CustomButton from '../CustomButton';

const Media = () => {


    const [images, setImages] = useState([])
    const [videos, setVideos] = useState([])

    // Controlls 
    // const [paused, setPaused] = useState(false);
    // const [muted, setMuted] = useState(false);
    // const [repeat, setRepeat] = useState(false);
    // const [volume, setVolume] = useState(1);

    const opencamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImages(image)
            console.log(image);
        });
    }

    const openfiles = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            setImages(images)
            console.log(images);
        });
    }

    const selectVideo = () => {
        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            setVideos(video)
            console.log(video);
        });
    }



    return (
        <View>
            <Video
                source={{ uri: videos?.path }}
                style={{ width: 200, height: 200 }}
                controls={true}
            // allowsExternlPlayback={true}
            // audioOnly={true}
            // paused={paused}
            // muted={muted}
            // repeat={repeat}
            // volume={volume}
            />
            <CustomButton name={'open Camera'} width={100} padding={10} handlebuttonClick={opencamera} />
            <CustomButton name={'open files'} width={100} padding={10} handlebuttonClick={openfiles} />
            <CustomButton name={'select video'} width={100} padding={10} handlebuttonClick={selectVideo} />
            <Image
                key={images?.path}
                source={{ uri: images?.path }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
}

export default Media

const styles = StyleSheet.create({})