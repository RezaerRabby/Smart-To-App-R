


import { useState } from "react";
import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";

function TaskItem({ task, updateTask, deleteTask }) {

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleUpdate = () => {
    updateTask(task.id, { title });
    setEditing(false);
  };

  // Priority Color
  const priorityColor = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Low: "text-green-500"
  };

  const priorityDot = {
    High: "🔴",
    Medium: "🟡",
    Low: "🟢"
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm mb-3 flex justify-between items-center">

      {/* Left Side */}
      <div className="flex items-center gap-4 flex-1">

        {editing ? (
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
          />
        ) : (
          <h3
            className={`text-lg font-semibold ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </h3>
        )}

        {/* Priority */}
        <span className={`text-sm font-semibold ${priorityColor[task.priority]}`}>
          {priorityDot[task.priority]} {task.priority}
        </span>

      </div>

      {/* Right Side Icons */}
      <div className="flex gap-4 ml-4">

        {/* Complete */}
        <button
          onClick={() => updateTask(task.id, { completed: !task.completed })}
          className="text-blue-500 text-lg hover:text-blue-700"
        >
          <FaCheck />
        </button>

        {/* Edit / Update */}
        {editing ? (
          <button
            onClick={handleUpdate}
            className="text-green-500 text-lg hover:text-green-700"
          >
            <FaCheck />
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-yellow-500 text-lg hover:text-yellow-700"
          >
            <FaEdit />
          </button>
        )}

        {/* Delete */}
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 text-lg hover:text-red-700"
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default TaskItem;