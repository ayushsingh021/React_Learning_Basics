import React, { useState } from "react";
import { useToDo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addToDo } = useToDo();
  const [prior, setPrior] = useState(0);

  const add = (e) => {
    e.preventDefault;
    if (todo !== "") {
      addToDo({ todo, prior, completed: false });
      setTodo("");
    } else {
      console.log("empty");
    }
  };

  return (
    <>
      <form id="todo" onSubmit={add} className="flex mb-2">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write Your Tasks..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-900 text-white shrink-0"
        >
          Add
        </button>
      </form>

      <div>
        <div className="flex flex-wrap items-center justify-center space-x-10">
          <h1 className=" font-bold bg-gradient-to-r from-teal-50 to-yellow-200 bg-clip-text text-transparent">
            Task Priority:
          </h1>
          <div className="flex space-x-10">
            <button
              onClick={() => setPrior(0)}
              type="button"
              className="flex-1 min-w-[100px] text-center py-2 px-4 border border-transparent rounded-md cursor-pointer bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
            >
              High
            </button>
            <button
              type="button"
              onClick={() => setPrior(1)}
              className="flex-1 min-w-[100px] text-center py-2 px-4 border border-transparent rounded-md cursor-pointer bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
            >
              Medium
            </button>
            <button
              type="button"
              onClick={() => setPrior(2)}
              className="flex-1 min-w-[100px] text-center py-2 px-4 border border-transparent rounded-md cursor-pointer bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
            >
              Low
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoForm;
