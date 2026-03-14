


import { useState } from "react";

function TaskItem({ task, updateTask, deleteTask }) {

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleUpdate = () => {
    updateTask(task.id, { title });
    setEditing(false);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm mb-3">

      {editing ? (

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />

      ) : (

        <h3 className="text-lg font-semibold">
          {task.title}
        </h3>

      )}

      <p className="text-sm text-gray-500 mb-2">
        Priority: {task.priority}
      </p>

      <div className="flex gap-2">

        {editing ? (

          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm cursor-pointer hover:bg-green-600"
          >
            update
          </button>

        ) : (

          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded text-sm cursor-pointer hover:bg-yellow-600"
          >
            Edit
          </button>

        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm cursor-pointer hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;