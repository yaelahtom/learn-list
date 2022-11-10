import "./App.css";
import { useState } from "react";
import { List } from "./components/List";
import uniqid from "uniqid";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ text: "", id: uniqid() });

  const handleChange = (e) => {
    setNewTask({ text: e.target.value, id: newTask.id });
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks(tasks.concat(newTask));
    setNewTask({ text: "", id: uniqid() });
    console.log([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks !== id));
  };

  return (
    <div className="App">
      <h1>tasks List</h1>
      <li>{newTask.text}</li>

      <div className="addTask">
        <form onSubmit={addTask}>
          <input
            type="text"
            onChange={handleChange}
            value={newTask.text}
            id="taskInput"
          />
          <button onClick={addTask}>Add task</button>
        </form>
      </div>
      <div className="list">
        <ul>
          {tasks.map((data) => {
            return <List key={data.id} data={data.text} delete={deleteTask} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
