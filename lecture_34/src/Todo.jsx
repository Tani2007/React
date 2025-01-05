import { useState } from "react";
import "./Todo.css";

import { TodoForm } from "./TodoForm.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoDate } from "./TodoDate.jsx";
const todoKey = "reactTodo"
export const Todo = () => {
    
    const [task,setTask] = useState(() => {
        const rawTodos = localStorage.getItem(todoKey);
        if(!rawTodos) return [];
        return JSON.parse(rawTodos)
    })

    const handleFromSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;

        if(!content) return;
        // if(task.includes(content))return;
        const ifTodoContentMatched = task.find(
            (curTask)=> curTask.content === content);
        if(ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask, {id,content,checked }])
    }

    localStorage.setItem(todoKey,JSON.stringify(task))

    const handleDeleteTodo = (value) => {
        console.log(value)
        const updatedTask = task.filter((curTask) => curTask.content !== value)
        setTask(updatedTask)
    }
    const clearAll = () => {
        setTask([])
    }

    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) =>{
            if(curTask.content === content){
                return{...curTask, checked: !curTask.checked}
            }
            else{
                return curTask;
            }
        })
        setTask(updatedTask)
    }

    return (
    <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFromSubmit}/>
        <section className="myUnOrdList">
            <ul>
                {
                    task.map((curTask) => {
                        return(
                          <TodoList key={curTask.id} data ={curTask.content} 
                          checked = {curTask.checked}
                          handleDeleteTodo={handleDeleteTodo}
                          handleCheckedTodo={handleCheckedTodo}
                          />  
                        )
                    })
                }
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={() => clearAll()}>Clear All</button>
        </section>
    </section>
    )
}