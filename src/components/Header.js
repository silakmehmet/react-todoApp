import React from 'react';

const Header = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === '') {
      alert('Please enter a todo');
      return;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText(''); // inputu temizliyoruz.
  };
  return (
    <div>
      <header className="header">
        <h1>Todos</h1>
        <form onSubmit={submitTodoHandler}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={inputText}
            onChange={inputTextHandler}
          />
        </form>
      </header>
    </div>
  );
};

export default Header;
