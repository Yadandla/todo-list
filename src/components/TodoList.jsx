import { useSelector, useDispatch } from "react-redux"
import { addTodo, toggleTodo, removeTodo } from './todoSlice';
import { useState } from "react";

export const TodoList = () => {

    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            dispatch(addTodo(newTodo));
            setNewTodo("");
        }
    }

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    }

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    }
    return (
        <div className="todo-container">
            <div className="todolist">
                <h1>Things I need to do</h1>

                <div>
                    <input type="text" placeholder="Add Your Todo" onChange={(event) => setNewTodo(event.target.value)} />
                    <button className="add-btn" onClick={handleAddTodo}>Add</button>
                </div>

                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} className="lists">
                            <div>
                                <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                                <span className={todo.completed ? "completed" : " "} >{todo.content}</span>
                            </div>
                            <button className="remove-btn" onClick={() => handleRemoveTodo(todo.id)} >Remove</button>
                        </li>
                    ))
                    }

                </ul>
            </div>
        </div>
    )
}
