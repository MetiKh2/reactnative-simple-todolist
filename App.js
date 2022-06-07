import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import Header from './components/Header';
import {useState} from 'react'
import Tasks from './components/Tasks';

export default function App() {
  const [task, setTask] = useState('')
  const [tasksList, setTasksList] = useState([
    {name:'1',key:"1"},
    {name:'2',key:'2'},
    {name:'3',key:'3'},
    {name:'4',key:'4'},
    {name:'5',key:'5'},
    {name:'6',key:'6'},
    {name:'7',key:'7'},
    {name:'8',key:'8'},
    {name:'9',key:'9'},
    {name:'10',key:'10'},
    {name:'11',key:'11'},

  ])
  const addTask=()=>{
    setTasksList(prev=>[...prev,{key:Math.floor(Math.random()*10000000).toString(),name:task}]);
    setTask('');
  }  
  const removeTask=(key)=>{
    setTasksList(prev=>prev.filter(task=>task.key!=key));
  }
  return (
    <View style={styles.container}>
        <Header/>
        <AddTask addTask={addTask} task={task} setTask={setTask}/>
        <Tasks removeTask={removeTask} tasksList={tasksList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'floralwhite',
  },
  headerContainer:{ 
    height:80,
    padding: 20
  },
});
