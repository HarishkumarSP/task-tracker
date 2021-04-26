import './App.css';
import Header from './components/Header';
import MainTasks from './components/MainTasks';

const App = () => {
  const tasks = [
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
]

  return (
    <div className="container">
      <Header />
      <MainTasks tasks = {tasks} />
    </div>
  );
}

export default App;
