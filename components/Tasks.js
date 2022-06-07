import { FlatList,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Task from './Task'

const Tasks = ({tasksList,removeTask}) => {
  return (
    <View style={styles.container}>
       {
         tasksList?<FlatList data={tasksList}
         renderItem={({item})=><Task removeTask={removeTask} task={item}/>}
         />:<Text style={styles.notFound}>موردی برای نمایش وجود ندارد</Text>
       }
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 40,
    flex: 1
  },
  notFound:{
    fontSize:18,
    fontWeight:'bold',
    color:'purple' ,
    textAlign:'center'
  }
})