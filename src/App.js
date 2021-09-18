import   { useState } from 'react'
import Header from './components/Header'
import Task from './components/Task'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

 const [ showAddTask, setShowAddTask] = useState(false)
    const [ tasks, setTasks] = useState([
            {
                id:1,
                task: 'Doctors Appointment',
                day:'September 15th at 2:30pm',
                reminder: true,
            },
            {
                id:2,
                task: 'Meeting at school',
                day:'September 16th at 2:30pm',
                reminder: true,
            },
            {
                id:3,
                task: 'Food Shopping',
                day:'September 17th at 2:30pm',
                reminder: true,
            },
            {
                id:4,
                task: 'Basketball Training',
                day:'September 18th at 2:30pm',
                reminder: false,
            },
        
        ])

        //add task
        const addTask =(task) =>{
          const id= Math.floor(Math.random() * 10000) + 1
          const newTask = {id, ...task }
          setTasks([ ...tasks, newTask])
          
        }

        //delete task
        const deleteTask = (id) => {
          setTasks(tasks.filter((Task) => Task.id !==id))
        }

       //toggle reminder
       const toggleReminder = (id) => {
         
       }
  
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask
        (!showAddTask)} 
        showAdd={showAddTask}  />
     { showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?(
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No tasks to show'
      )}
    </div>
     
  );
}

export default App;
