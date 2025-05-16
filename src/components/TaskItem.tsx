// === INTERFACE: TASK ===
// Represents a single task object
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// === INTERFACE: TASK ITEM PROPS ===
// Props expected by the TaskItem component
interface TaskItemProps {
  task: Task;                        // The task to display
  onToggle: (id: number) => void;   // Function to toggle task status
  onDelete: (id: number) => void;   // Function to delete task
}

// === COMPONENT: TASK ITEM ===
function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li>
      {/* Checkbox to toggle task completion */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {/* Task title with conditional styling if completed */}
      <span className={task.completed ? "completed" : ""}>
        {task.title}
      </span>

      {/* Visual icon depending on task status */}
      {task.completed ? "✅" : "❌"}

      {/* Button to delete the task */}
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </li>
  );
}

export default TaskItem;
