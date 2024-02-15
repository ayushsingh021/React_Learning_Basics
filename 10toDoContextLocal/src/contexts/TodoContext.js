import { createContext } from "react";
import { useContext } from "react";

//created context -- Data and Methods accesible to all compo
export const ToDoContext = createContext ({
    todos :[
        {
            id : 1,
            todo :  "To Do msgs",
            completed : false,
            priority : 0,
        }
    ],
    addToDo : (todo) =>{},
    updateToDo : (todo , id) =>{},
    deleteToDo : (id) =>{},
    toggleComplete : (id) => {}

})

//hook create -- so that in one go we can get all methods and data from context - one by one no need to do for all methods
export const useToDo = ()=>{
    return useContext(ToDoContext);
}

//provider
export  const ToDoProvider = ToDoContext.Provider;