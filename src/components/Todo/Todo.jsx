import React, { useState } from "react";
import "./todo.scss";

import { useDispatch } from "react-redux";
import { deleteTodo, makeCompleted } from "../../redux/TodoSlice";
import AddToDo from "../search/AddToDo";
import { searchTextChange } from "../../redux/SearchSlice";

const Todo = ({ value }) => {
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const toggleCheckbox = (id) => {
    setChecked(!checked);
    dispatch(makeCompleted(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    console.log("Delete Todo", id);
  };

  const handleDetail = () => {
    setOpenModal(!openModal);
  };

  

  return (
    <>
      <div
        className="todo"
        style={{
          ...(value.complete
            ? { opacity: 0.5, textDecoration: "line-through" }
            : {}),
        }}
      >
        <div className="todo-title" onChange={() => toggleCheckbox()}>
          <input
            type="checkbox"
            checked={value.complete}
            onChange={() => toggleCheckbox(value.id)}
          />
          <div className="title">{value.todo}</div>
        </div>
        <div className="todo-btn">
          <button className="detail" onClick={() => handleDetail()}>
            Detail
          </button>
          <button className="remove" onClick={() => handleDelete(value.id)}>
            Remove
          </button>
        </div>
      </div>
      {openModal && (
        <AddToDo onClose={openModal} value={value} />
      )}
    </>
  );
};

export default Todo;
