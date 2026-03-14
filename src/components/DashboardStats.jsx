



const DashboardStats = ({ tasks }) => {

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

      <div className="p-6 rounded-lg shadow bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h3 className="text-lg font-semibold text-center">Total</h3>
        <p className="text-2xl font-bold text-center">{totalTasks}</p>
      </div>

      <div className="p-6 rounded-lg shadow bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <h3 className="text-lg font-semibold text-center">Completed</h3>
        <p className="text-2xl font-bold text-center">{completedTasks}</p>
      </div>

      <div className="p-6 rounded-lg shadow bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <h3 className="text-lg font-semibold text-center">Pending</h3>
        <p className="text-2xl font-bold text-center">{pendingTasks}</p>
      </div>

      <div className="p-6 rounded-lg shadow bg-gradient-to-r from-red-500 to-pink-600 text-white">
        <h3 className="text-lg font-semibold text-center">High</h3>
        <p className="text-2xl font-bold text-center">{highPriority}</p>
      </div>

    </div>
  );
};

export default DashboardStats;