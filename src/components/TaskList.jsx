





import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask }) {

  return (
    <div>

      {tasks.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No tasks found...
        </p>
      )}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}

    </div>
  );
}

export default TaskList;