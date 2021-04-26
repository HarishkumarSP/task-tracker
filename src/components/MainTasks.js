import Task  from './Task'

const MainTasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task = {task} />
            ))}
        </>
    )
}

export default MainTasks
