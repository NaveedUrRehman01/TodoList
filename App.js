import React, { useState } from 'react';
import ToDolist from './ToDolist';

function App() {

  const [listName,setListItem] = useState();

const [items,setItems] = useState([]); 
  const InputEvents = (event) =>{
    setListItem(event.target.value) ;
  }

  const addItems = () =>{
    setItems((oldvalue) =>{
      return [...oldvalue,listName]
    });
    setListItem('');
  }
  const deleteItems = (id) =>{
    


setItems((oldvalue)=>{
  return oldvalue.filter((arrEle,index)=>{
    return index !== id;
  })
})
  }
  return (
    <div className="Main-div">
      
      <div className='todo-div'>
        <h2>TodoList</h2>
        <input type='text'
        value={listName}
         placeholder='Enter the item'
        onChange={InputEvents}
        //  value={value}
         ></input>
        <button onClick={addItems}> + </button>
        <ul style={{listStyle:'none'}}>

  {/* <li><i className="far fa-close"></i>{listName}</li> */}
       {   items.map((itemvalue,index ) => {  
            return <ToDolist text={itemvalue}
            id={index}
            key={index}
            onSelect={deleteItems}/>; 

       })}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
