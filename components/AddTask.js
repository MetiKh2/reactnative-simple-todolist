import { StyleSheet, Button, View ,TextInput} from 'react-native'
import React from 'react'

const AddTask = ({addTask,task,setTask}) => {
  return (
    <View style={styles.container}>
      <TextInput onChangeText={setTask} value={task} style={styles.input}
      placeholder='کار خود را وارد کنید'/>
      <Button title='افزودن' color={'lightseagreen'} onPress={addTask}/>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    container:{
        padding: 40
    },
    input:{
        borderBottomColor:"lightseagreen",
        borderBottomWidth:1,
        fontSize:15,
        paddingTop:4,
        paddingBottom:4,
        paddingLeft:8,
        paddingRight:8,
        marginBottom:10
    },
})