import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['do it', 'f yeah', 'oh buddy']);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
  }
  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }
  const addTodo = (todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos);
  }
  // const deleteTodo = (todo)

  return (
    <div className="App">
     <ul>
       {todos.map((element, index) => 
         <li 
         key={index}>
           {element}
           <button
           onClick={() => deleteTodo(index)}>
             delete</button>
          </li>
       )}
     </ul>
     <form onSubmit={handleSubmit}>
       <input 
       type="text"
       value={value}
       onChange={handleChange}
       />
       <input 
       type="submit"
       value="Submit"
       
       />
     </form>
    </div>
  );
}

export default App;
