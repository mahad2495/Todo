import React, { useState } from "react";
import { useEffect } from "react";
import Create from "./Create";
import "./App.css";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  const [bgColor, setBgColor] = useState("black");
  const [color, setColor] = useState("white");

  useEffect(() => {
    const getTasks = () => {
      axios
        .get("http://localhost:3001/get")
        .then((result) => {
          //   console.log("Res: ", result);
          setTodos(result.data);
        })
        .catch((err) => console.log(err));
    };

    getTasks();
  }, [todos]);
  return (
    <div class="home">
      <h1>Todo List</h1>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Todos</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div
            className="Listing"
            style={{ backgroundColor: bgColor, color: color }}
            onClick={() => {
              if (color === "white") {
                setColor("black");
              }
              if (bgColor === "black") {
                setBgColor("white");
              }
              if (color === "black") {
                setColor("white");
              }
              if (bgColor === "white") {
                setBgColor("black");
              }
            }}
          >
            <p>{todo.task}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
