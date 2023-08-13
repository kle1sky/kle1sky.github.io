import './App.css';
import react, {useState} from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import List from './components/List'
import Separator from './components/UI/MySeparator/MySeparator'
import Counter from './components/Counter';
import { useLocalStorage } from './hooks/localStorage';

function App() {

  const [items, setItems] = useLocalStorage('items', [])

  const [filteredArray, setFilteredArray] = useLocalStorage('filteredArray', [])

  const createNewItem = (newItem) => {
    setItems([...items, newItem])
  }

  const remove = (post) => {
    setItems(items.filter(p => p.id !== post.id))
    setFilteredArray(items.filter(p => p.id !== post.id))
  }

  const transferItems = (filteredItems) => {
      setFilteredArray(filteredItems)
  }

  return (
    <div className="App">
      <h1>Скока потратили?</h1>
      <Form create={createNewItem} items={items}/>
      <Separator/>
      <Filter items={items} filtered={transferItems}/>
      <Separator/>
      <List remove={remove} items={items} filteredItems={filteredArray}/>
      <Counter items={items}/>
    </div>
  );
}

export default App;
