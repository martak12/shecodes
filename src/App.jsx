import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Study React", completed: true },
    { id: 2, text: "Do homework", completed: true },
  ]);

  // Count completed tasks using map()
  const completedList = tasks.map((task) => task.completed);
  const completedCount = completedList.filter((c) => c === true).length;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Tasks</h2>

      {/* Conditions */}
      {tasks.length === 0 && <p>No tasks for today!</p>}
      {tasks.length > 0 && completedCount === tasks.length && (
        <p>Keep up the good work!</p>
      )}

      {/* Display tasks using map() */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} - {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
