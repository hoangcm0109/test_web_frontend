/* eslint-disable array-callback-return */
import './App.scss'
import AddToDo from './components/search/AddToDo';
import Todo from './components/Todo/Todo';

import { useDispatch, useSelector } from 'react-redux'
import HandleComplete from './components/todo-footer/HandleComplete';
import { useState } from 'react';
import { todoFinal } from './redux/selector';
import { searchTextChange } from './redux/SearchSlice';

function App() {

  const listTodo = useSelector(todoFinal)
  const [searchText, setSearchText] = useState('')

  const dispatch = useDispatch();


  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    dispatch(searchTextChange(e.target.value))
  }

  return (
    <div className="App">
      <h1>Todo List Test</h1>
      <input
          value={searchText}
          type="text"
          onChange={handleSearchText}
          className="input-search"
          placeholder="Search..."
      />
      
      <AddToDo value={listTodo} />
      {
        listTodo?.map((item, index) => (
          <Todo value={item} key={index} />
        ))
      }
      {
        listTodo.some(item => item.complete === true) && <HandleComplete />
      }
    </div>
  );
}

export default App;
