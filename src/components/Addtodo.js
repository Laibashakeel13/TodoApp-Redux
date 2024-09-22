import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../app/features/todo/todoSlice";

function AddTodo({ isEditing, setIsEditing, editId, setEditId }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addOrUpdateTodoHandler = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateTodo({ id: editId, text: input }));
      setIsEditing(false);
      setEditId(null);
    } else {
      const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const isDuplicate = existingTodos.some((todo) => todo.text === input);

      if (!isDuplicate) {
        dispatch(addTodo(input));
      } else {
        alert("This todo already exists!");
      }
    }
    setInput("");
  };

  const startEdit = (todo) => {
    setIsEditing(true);
    setEditId(todo.id);
    setInput(todo.text);
  };

  return (
    <form onSubmit={addOrUpdateTodoHandler} className="d-flex">
      <input
        type="text"
        className="form-control form-control-lg"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Your Todo"
        required
      />
      <button type="submit" className="btn btn-primary btn-lg ml-2">
        {isEditing ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
