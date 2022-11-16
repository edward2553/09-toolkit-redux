import React from "react";
import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  //   const {isLoading, data: todos = []} = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTQ Query</h1>
      <hr />
      <h4>isLoading... {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
      {/* <ul>
        {todos.map(todo => (
            <li key={todo.title}>
                <strong> {todo.completed ? 'DONE' : 'Pending'} </strong>
                {todo.title}
            </li>
        ))}
      </ul>
      <button>Next Todo</button> */}
    </>
  );
};
