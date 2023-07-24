import React from 'react';

const TodoFooter = ({ todos, setTodos, status, setStatus }) => {
  const unCompleted = todos.filter((todo) => todo.completed === false);
  const completed = todos.filter((todo) => todo.completed === true);
  const clearCompleted = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  const todoFilter = (e) => {
    setStatus(e.target.id);
  };
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{unCompleted.length} items left</strong>
        </span>
        <ul className="filters">
          <button
            onClick={todoFilter}
            className={status === 'all' ? 'selected' : ''}
            id="all"
          >
            All
          </button>

          <button
            onClick={todoFilter}
            className={status === 'active' ? 'selected' : ''}
            id="active"
          >
            Active
          </button>
          <button
            onClick={todoFilter}
            className={status === 'completed' ? 'selected' : ''}
            id="completed"
          >
            Completed
          </button>
        </ul>

        <button
          className={completed === 0 ? 'hidden' : 'clear-completed'}
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
};

export default TodoFooter;
