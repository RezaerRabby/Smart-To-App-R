




import './App.css'
import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import DashboardStats from './components/DashboardStats'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'

function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [SortType, setSortType] = useState("date")


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }


//   const addTask = (task) => {

//   if (editTask) {

//     const updatedTasks = tasks.map((t) =>
//       t.id === editTask.id ? { ...t, ...task } : t
//     )

//     setTasks(updatedTasks)
//     setEditTask(null)

//   } else {

//     setTasks([...tasks, task])

//   }
// }




  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, ...updatedTask } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  let filteredTasks = tasks.filter((task) => {

    if (
      search &&
      !task.title.toLowerCase().includes(search.toLowerCase())
    ) {
      return false
    }

    if (filter === "Completed") return task.completed
    if (filter === "Pending") return !task.completed
    if (filter === "High") return task.priority === "High"
    if (filter === "Medium") return task.priority === "Medium"
    if (filter === "Low") return task.priority === "Low"

    return true
  })
  console.log(tasks);

  return (
    <div className="min-h-screen p-4 flex justify-center">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          Smart To-Do App
        </h1>

        <DashboardStats tasks={tasks} />

        <TaskForm addTask={addTask} />

   

        <SearchBar search={search} setSearch={setSearch} />

        <FilterBar setFilter={setFilter} setSortType={setSortType} />

        <TaskList
          tasks={filteredTasks}
          updateTask={updateTask}
          deleteTask={deleteTask}

        />

      </div>
    </div>
  )
}

export default App