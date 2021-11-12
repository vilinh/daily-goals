import React, { useState } from 'react';
import './styles.css';
import Form from './Form';
import List from './List';
import Goal from './Goal';

function App() {
  const [items, setItems] = useState(['Breathe', 'Stretch', 'Drink a glass of water'])

  function addTask(newItem) {
    setItems([...items, newItem]);
  }

  function deleteTask(item) {
    const remaining = items.filter((i) => i !== item);
    setItems(remaining);
  }

  return (
    <div className="App">
      <Goal/>
      <h1>Goals for Today</h1>
      <List deleteTask={deleteTask} items={items}/>
      <Form addTask={addTask}/>
    </div>
  );
}

export default App;
