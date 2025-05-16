import TaskItem from "./TaskItem";

// === INTERFACE: TASK ===
// Describes the structure of a single task object
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// === INTERFACE: TASK LIST PROPS ===
// Props expected by the TaskList component
interface TaskListProps {
  tasks: Task[];                    // Array of task objects
  onToggle: (id: number) => void;   // Function to toggle task completion
  onDelete: (id: number) => void;   // Function to delete a task
}

// === COMPONENT: TASK LIST ===
function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <ul>
      {/* Map through each task and render a TaskItem for it */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}          // Unique key for React rendering
          task={task}            // Pass the entire task object
          onToggle={onToggle}    // Toggle completion handler
          onDelete={onDelete}    // Delete handler
        />
      ))}
    </ul>
  );
}

export default TaskList;
