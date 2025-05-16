import { useState } from "react";

// === INTERFACE ===
// Defines the shape of props expected by TaskForm component
interface TaskFormProps {
    onAdd: (task: string) => void;  // Function to handle adding a new task
}

// === COMPONENT: TASK FORM ===
const TaskForm = ({ onAdd }: TaskFormProps) => {

    // === STATE: INPUT VALUE ===
    // Manages the current text entered into the input field
    const [input, setInput] = useState<string>("");

    // === FUNCTION: HANDLE SUBMIT ===
    // Prevents default form submission behavior and triggers onAdd
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();              // Prevents page reload
        if (!input.trim()) return;      // Avoid adding empty tasks
        onAdd(input);                   // Calls parent function to add task
        setInput("");                   // Resets input field
    };

    // === JSX: RENDER FORM ===
    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input 
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}  // Updates state on typing
                placeholder='Add a task...'
                className='task-input'
            />
            <button 
                type="submit" 
                className="task-button"
            >
                Add
            </button>
        </form>
    );
};

export default TaskForm;
