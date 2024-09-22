import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../app/features/todo/todoSlice";
import { FaTrash, FaEdit } from "react-icons/fa";

function Todos({ setIsEditing, setEditId, setInput }) {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const startEdit = (todo) => {
    setIsEditing(true);
    setEditId(todo.id);
    setInput(todo.text);
  };

  return (
    <div className="mt-4">
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center text-light bg-dark"
            key={todo.id}
          >
            {todo.text}
            <div>
              <button
                className="btn btn-warning btn-sm mr-2"
                onClick={() => startEdit(todo)}
              >
                <FaEdit />
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
