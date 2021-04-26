import { useState } from 'react'
import Header from './components/Header';
import MainTasks from './components/MainTasks';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Food appointment',
        day:'feb 02 at 3pm',
        reminder:true
    },
    {
        id:2,
        text:'doctor apppoinment',
        day:'jan 03 at 4pm',
        reminder: true
    },
    {
        id:3,
        text:'Dummy appointment',
        day:'Dec 06 at 5am',
        reminder: true
    },
    {
        id:4,
        text:'ABC appoint',
        day:'Mar 09 at 5',
        reminder: true
    }
])

//Add task

const addTask = (task) => {
  const id  = Math.floor(Math.random()*10000)+1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
} 

// Toggle Remainder
const toggleRemainder = (id) => {
  setTasks(tasks.map((task) =>
   (task.id === id) ? {...task,reminder: !task.reminder} : task  ))
}

  return (
    <div className="container">
      <Header onAdd = { () => setShowAddTask(!showAddTask)} showAdd={!showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask} />}
      {
      tasks.length > 0 ? (
      <MainTasks tasks = {tasks} onDelete = {deleteTask} onToggle={toggleRemainder} />)
    :('No tasks left')
    }
    </div>
  );
}

export default App;
