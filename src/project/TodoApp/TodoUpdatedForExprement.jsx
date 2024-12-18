import { useState, useEffect } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./ToDo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [Task, setTask] = useState([]);
  const [DateTime, setDateTime] = useState("");

  // Function to handle input change
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (Task.some((task) => task.text === inputValue)) {
      setInputValue("");
      return alert(`"${inputValue}" is already present in your Todo list`);
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    const timestamp = `${formattedDate} - ${formattedTime}`;

    setTask((prevData) => [...prevData, { text: inputValue, timestamp }]);
    setInputValue("");
  };

  // Update date and time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <h2 className="date-time">{DateTime}</h2>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {Task.map((task, index) => (
            <li key={index} className="todo-item">
              <span>{task.text}</span>
              <span>{task.timestamp}</span>
              <button className="check-btn">
                <MdCheck />
              </button>
              <button className="delete-btn">
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
