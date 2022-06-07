import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>متی کی اچ</Text>
      <Text style={styles.title}>لیست کار های شما</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        padding:40
    },
    title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        borderBottomColor:'lightseagreen',
        borderBottomWidth:1,
        paddingBottom:10
    },
    author:{
        fontSize:10,
        textAlign:'center',
        color: 'gray'
    }
})