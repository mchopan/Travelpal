import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const PostData = () => {

    let url = 'https://jsonplaceholder.typicode.com/posts'

    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const postDataToJsonPlaceholder = () => {
        const data = { userId, title, body }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <ScrollView style={{ flex: 1, margin: 5, backgroundColor: 'black' }} >
            <Text>User Details</Text>
            <TextInput
                style={styles.input}
                placeholder='user id'
                keyboardType='default'
                value={userId}
                onChangeText={setUserId}
            />
            <TextInput
                style={styles.input}
                placeholder='title'
                keyboardType='default'
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder='body'
                keyboardType='default'
                value={body}
                onChangeText={setBody}
            />

            <Button title='Sumbit' onPress={postDataToJsonPlaceholder} />
        </ScrollView >
    )
}

export default PostData

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: "white",
        margin: 10,
        color: 'white',
        borderRadius: 5
    }
})

{/* <TextInput
                style={styles.input}
                placeholder='phone'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder='website'
                keyboardType='default'
            />
            <Text>Address</Text>
            <TextInput
                style={styles.input}
                placeholder='street'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder='suite'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder='city'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder='zipcode'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder='lat'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder='lng'
                keyboardType='default'
            />

            <Text>Company Details</Text>
            <TextInput
                style={styles.input}
                placeholder='name'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder='catchPhrase'
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder='bs'
                keyboardType='default'
            /> */}