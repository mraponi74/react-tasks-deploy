import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

// nombre del contexto
export const TaskContext = createContext()

// componente que va a englobar todos
export function TaskContextProvider(props) {
    // estado de las tareas
    const [tasks, setTasks] = useState([])

    // Agrega un elemento al arreglo
    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }

    //  Quita un elemento del arreglo
    function deleteTask(taskId) {
        // console.log(tasks)
        // console.log(taskId)
        // setTasks([...tasks, {
        //   title: task.title,
        //   id: tasks.length,
        //   description: task.description
        // }])

        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => { setTasks(data) }, [])

    return (
        // creo el componente naranja
        <TaskContext.Provider value={{
            // le paso un objeto {}
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>

    )
}

