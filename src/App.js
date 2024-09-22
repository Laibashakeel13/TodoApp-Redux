import React, { useState } from "react";
import AddTodo from "./components/Addtodo";
import Todos from "./components/todos";
import "./App.css";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  return (
    <div className="App">
      <div className="container mt-4">
        <div className="bg-dark text-light p-4 rounded">
          <h1 className="text-center">Todo App</h1>
          <AddTodo
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            editId={editId}
            setEditId={setEditId}
          />
          <Todos setIsEditing={setIsEditing} setEditId={setEditId} />
        </div>
      </div>
    </div>
  );
}

export default App;
