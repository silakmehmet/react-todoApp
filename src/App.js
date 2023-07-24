import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'active':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filterHandler();
  }, [todos, status]);
  return (
    <div>
      <section className="todoapp">
        <Header
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
        />
      </section>
    </div>
  );
}

export default App;
