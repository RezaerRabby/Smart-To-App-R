








// import { WindowIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";

// const TaskForm = ({ addTask }) => {

//   const [title, setTitle] = useState('');
//   const [priority, setPriority] = useState('Low');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title) return;

//     const newTask = {
      
//       id: Date.now(),
//       title,
//       priority,
//       completed: false,
//       createdAt: new Date().toISOString(),
//     };
    

//     addTask(newTask);

//     setTitle('');
//     setPriority('Low');

//     window.localStorage.setItem('tasks', JSON.stringify(newTask));
//   }

//   return (

//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col md:flex-row gap-3 mb-4 mt-5"
//     >

//       <input
//         className="flex-1 border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Enter task..."
//       />

//       <select
//         className="border p-2 rounded-lg"
//         value={priority}
//         onChange={(e) => setPriority(e.target.value)}
//       >
//         <option>Low</option>
//         <option>Medium</option>
//         <option>High</option>
//       </select>

//       <button type="submit"
//       className="bg-indigo-500 text-white px-4 rounded-lg hover:bg-indigo-600 transition">
//         Add
//       </button>

//     </form>
//   );
// };

// export default TaskForm;




import { useState } from "react";

const TaskForm = ({ addTask , tasks }) => {

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    const newTask = {
      // id: Date.now(),
        id: tasks.length + 1,

      title,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    console.log(newTask);

    addTask(newTask);

    setTitle('');
    setPriority('Low');
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 mb-4 mt-5"
    >

      <input
        className="flex-1 border p-2 rounded-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task..."
      />

      <select
        className="border p-2 rounded-lg"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 rounded-lg"
      >
        Add
      </button>

    </form>
  );
};

export default TaskForm;