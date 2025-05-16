// Import styles and all components used in the App
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Filter from './components/Filter'
import { useState } from 'react'

// Main App component
function App() {

  // Define a type (interface) for a task object
  interface Task {
    id: number;         
    title: string;      
    completed: boolean; 
  }

  // State to hold an array of tasks (initially empty)
  const [tasks, setTasks] = useState<Task[]>([
    {id:1, title: "Learn React", completed: true},
    {id:2, title: "Do homework", completed: false},
    {id:3, title: "Write blog", completed: false},
  ]);

  const [filter, setFilter] = useState("all");

  // Function to add a new task
  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),       
      title,                
      completed: false      
    };

    // Add the new task to the existing array of tasks
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  
  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  // Filter the tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if(filter === "completed") return task.completed;
    if(filter === "pending") return !task.completed;
    return true; // Show all tasks
  });

  // JSX returned by the App component
  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm onAdd={handleAddTask} />
      <Filter setFilter={setFilter} currentFilter={filter} />
      <TaskList tasks={filteredTasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
