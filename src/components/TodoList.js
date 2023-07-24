import React from 'react';
import Todo from './Todo';
import TodoFooter from './TodoFooter';

const TodoList = ({ todos, setTodos, status, setStatus, filteredTodos }) => {
  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />

        <ul className="todo-list">
          <li>
            {filteredTodos.map((todo) => (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
          </li>
        </ul>
      </section>
      <TodoFooter
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
};

export default TodoList;
