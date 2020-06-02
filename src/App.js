import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['do it', 'f yeah', 'oh buddy']);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  

  return (
    <div className="App">
     <ul>
       {todos.map((element, index) => 
         <li key={index}>{element}</li>
       )}
     </ul>
     <form>
       <input 
       type="text"
       value={value}
       onChange={handleChange}
       />
     </form>
    </div>
  );
}

export default App;
