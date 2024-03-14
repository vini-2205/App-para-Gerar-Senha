import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export function PasswordItem({ data, removePassword}){
    const [hidePass, setHidePass] = useState(true)

    return(
        <View>
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                <Ionicons name="eye" color="#FFF" size={25}/>
            </TouchableOpacity>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width:"100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        color:'#FFF'
    }
})