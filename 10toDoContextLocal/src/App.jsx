import { useEffect, useState } from "react";
import "./App.css";
import { ToDoProvider } from "./contexts";
import TodoForm from "./components/TodoFrom";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]); //all todos stores

  const addToDo = (todo) => {
    //each todo is a object as defined in context
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateToDo = (todo, id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //Local Storage -- local stores value in {key , val} and return string so we need to convert into JSON.parse
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //storing to local storage whenever todos is changes -- always remember localstorage takes and returns in string
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl  font-bold text-center mb-8 mt-2">
            🧠 Set Your Daily Goals 🎯
          </h1>
          <h1 className="text-1xl bg-gradient-to-r from-zinc-400 to-lime-400 bg-clip-text text-transparent text-center  mb-1 mt-1">
            Developed By Ayush
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
