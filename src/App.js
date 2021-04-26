import { useState } from 'react'
import Header from './components/Header';
import MainTasks from './components/MainTasks';
import './App.css';

const App = () => {
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

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
} 

// Toggle Remainder
const toggleRemainder = (id) => {
  console.log(id)
}

  return (
    <div className="container">
      <Header />
      {
      tasks.length > 0 ? (
      <MainTasks tasks = {tasks} onDelete = {deleteTask} onToggle={toggleRemainder} />)
    :('No tasks left')
    }
    </div>
  );
}

export default App;
