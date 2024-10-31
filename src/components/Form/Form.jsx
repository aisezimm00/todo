import { useState } from "react";

const Form = ({ data, setData, setStatus }) => {
  const [text, setText] = useState('');

  const addTodo = (text) => {
    if (text.trim() === '') return;  // 
    setData([
      {
        text,
        deleted: false,
        important: false,
        correct: false,
        completed: false,
        id: data.length > 0 ? data[0].id + 1 : 1
      },
      ...data
    ]);
    setText('');
    setStatus('all');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(text);
    }
  };

  return (
    <div className="form">
      <button onClick={() => addTodo(text)}>+</button>
      <input
        type="text"
        placeholder="Create a new todo..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyPress={handleKeyPress} 
      />
    </div>
  );
};

export default Form;
