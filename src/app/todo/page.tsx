"use client";
import React, { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        const newTodoItem: Todo = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo("");
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <div>
                <h1>ToDo App</h1>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>Add Todo</button>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span
                                style={{
                                    textDecoration: todo.completed
                                        ? "line-through"
                                        : "none",
                                }}
                                onClick={() => toggleTodo(todo.id)}
                            >
                                {todo.text}
                            </span>
                            <button onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TodoApp;
