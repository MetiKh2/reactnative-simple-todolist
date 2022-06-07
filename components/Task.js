import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Task = ({task,removeTask}) => {
  return (
   <TouchableOpacity onPress={()=>removeTask(task.key)}>
      <View style={styles.container}>
      <Text style={styles.name}>{task.name}</Text>
    </View>
   </TouchableOpacity>
  )
}

export default Task

const styles = StyleSheet.create({
    container:{
        padding: 15,
        backgroundColor:'skyblue',
        marginBottom:10
      },
      name:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold'
      }
})