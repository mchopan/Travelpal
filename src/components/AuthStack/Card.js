import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'

const Card = () => {

    let url = 'https://jsonplaceholder.typicode.com/users/'

    const [posts, setPosts] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState()
    const getDataFromJsonPlaceHolder = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
    }

    const deletById = (id) => {
        console.log(`${url}${id}`)
        fetch(`${url}${id}`, {
            method: "DELETE"
        }).then(response => {
            if (response.status === 200 || response.status === 204) {
                alert(`Deleted Successfull Item ${id}`)
            } else if (response.status === 404) {
                alert(`item with ${id} not found`)
            }
            else {
                alert(`DELETE request for ID ${id} failed with status code: ${response.status}`);
            }
        })
    }

    const openModal = (id) => {
        setId(id)
        setModalVisible(true)
        const findUserById = posts.find((user) => user.id == id);
        console.log(findUserById)
        setName(findUserById?.name)
        setEmail(findUserById?.email)
        setUsername(findUserById?.username)
    }

    const updateUser = () => {

        const updatedData = { name, username, email }

        fetch(`${url}${id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedData)
        }).then(response => {
            if (response.status === 200 || response.status === 204) {
                alert(`Updated Successfull Item ${id}`)
            } else if (response.status === 404) {
                alert(`item with ${id} not found`)
            }
            else {
                alert(`Update request for ID ${id} failed with status code: ${response.status}`);
            }
        })
        setModalVisible(false)
    }

    useEffect(() => {
        getDataFromJsonPlaceHolder()
    }, [])

    return (
        <View style={{ flex: 1 }} >
            <Modal visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)} transparent={true}>
                <View style={{ flex: 1, justifyContent: "flex-end" }} >
                    <View style={{ backgroundColor: "black", justifyContent: "flex-end", alignItems: "center" }}>
                        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your name" />
                        <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Enter your userName" />
                        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter your email" />
                        <Button title='Save & Close' color="blue" onPress={updateUser} />
                    </View>
                </View>
            </Modal>
            {
                posts.length > 0 ? (
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => {
                            const { id, name, username, email } = item
                            return (
                                <View style={styles.card}>
                                    <Text style={{ color: "black", fontSize: 12, }}>
                                        Name: {name}
                                    </Text>
                                    <Text style={{ color: "green", fontSize: 16, }}>
                                        usename: {username}
                                    </Text>
                                    <Text style={{ color: "orange", fontWeight: '500' }}>
                                        Email: {email}
                                    </Text>
                                    <Button title='Update User' color="green" onPress={() => openModal(id)} />
                                    <Button title='Delete' color="red" onPress={() => deletById(id)} />
                                </View>
                            )
                        }}
                    />
                ) : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    < ActivityIndicator color='red' size='large' />
                </View>
            }
        </View >
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: "wheat",
        margin: 10,
        padding: 5, gap: 5

    },
    input: {
        borderWidth: 2,
        borderColor: "white",
        margin: 10,
        color: 'white',
        borderRadius: 5,
        width: "100%"
    }
})