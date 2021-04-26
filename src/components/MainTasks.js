import Task  from './Task'

const MainTasks = ({ tasks,onDelete,onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task = {task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default MainTasks
