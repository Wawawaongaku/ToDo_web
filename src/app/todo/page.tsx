"use client";
import React, { useState } from "react";
import styles from "../../styles/page.module.css";
import Link from "next/link";

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

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTodo();
        }
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
            <div className={styles.page}>
                <h1>ToDo App</h1>
                <input
                    className={styles.form}
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
            <Link href="/">ホームに戻る</Link>
                <div className={styles.input}>
                    <div className={styles.main}>
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
                                        ☓
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoApp;
