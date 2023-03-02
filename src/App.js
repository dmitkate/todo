import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "./components/addTodo/form";
import { List } from "./components/listTodo/list";




const TODO = [
  { id: 1, name: 'start Work1', desc: 'hard work', status: false },
  { id: 2, name: 'start Work2', desc: 'hard work', status: false },
  { id: 3, name: 'start Work3', desc: 'hard work', status: false },
]
const App = () => {
  const [todos, setTodos] = useState(TODO);
  
  const onSubmit = evt => {   
    const newTask = {
      id: nanoid(4),
      name: evt.name,
      desc: evt.desc,
      status: false
    };
     setTodos([...todos, newTask]);
    
    return true;
   };
  const delate = id => {
    setTodos(todos.filter(todo => todo.id!== id));
  };
  const toggle = id => {
    setTodos(todos.map((todo => {
      if (todo.id === id) {
        return {
          ...todo, status: !todo.status
        }
      } return todo;
    })))
  };

  return (
    <>
      <Form data={onSubmit} />
      <List toggle={toggle} list={todos} delate={delate} />
      
    </>
  );
}

export default App;
