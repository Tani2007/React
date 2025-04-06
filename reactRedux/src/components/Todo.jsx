import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../store";

export default function Todo() {
  const [task, setTask] = useState("");
  console.log(task);
  const state = useSelector((state) => state.task);
  const dispatch = useDispatch();
  function handleClick() {
    setTask("");
    return dispatch(addTask(task));
  }
  function handleDelete(id) {
    return dispatch(deleteTask(id));
  }
  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center">
      <h1 className="my-10 md:text-7xl sm:text-5xl text-gray-100">TodoList</h1>
      <div className="mb-10">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className="bg-gray-100 rounded-l-2xl px-2 py-1 outline-none"
        />
        <button
          onClick={handleClick}
          className="bg-zinc-500 rounded-r-2xl px-2 py-1"
        >
          ADD
        </button>
      </div>
      {state.length != 0 && (
        <ul className="h-auto mb-4 rounded-2xl w-100 bg-gray-300 ">
          {state.map((curElem, index) => {
            return (
              <li
                key={index}
                className=" my-2 h-10 w-100 flex   items-center justify-between px-10"
              >
                <h2 className="font-bold capitalize ">{curElem}</h2>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-gray-500 border-3 border-red-500 px-2 text-zinc-900 font-bold hover:bg-gray-900 hover:text-gray-100 active:bg-gray-900 active:text-gray-100  rounded-4xl "
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
