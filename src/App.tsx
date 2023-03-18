import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";
import {Input} from "./Components/Input";

export type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>
    ([])
    const [newTitle, setNewTitle] = useState('')

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchFoo()
    }, [])
    const showMeTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    const deleteTodos = () => {
        setTodos([])
    }

    const addNewItem = () => {
        const newItem: TodosType = {
            completed: true,
            id: todos.length+1,
            title: newTitle,
            userId: 43543
        }
        setTodos([newItem, ...todos])
        setNewTitle('')

    }

    return <div>
        <button onClick={showMeTodos}>Show me..</button>
        <button onClick={deleteTodos}>Delete me..</button>
        <div>
            <Button callback={addNewItem}/>
            <Input callback={addNewItem} setNewTitle={setNewTitle} newTitle={newTitle}/>
        </div>
        <ul>
            {todos.map(value => {
                return (
                    <li key={value.id}>
                        <span>{value.id} </span>
                        <span>{value.userId} </span>
                        <span>{value.title} </span>
                        <input type={"checkbox"} checked={value.completed}/>
                    </li>
                )
            })}
        </ul>
    </div>
}


export default App;
