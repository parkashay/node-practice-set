import React, { useState } from 'react'
import Items from './Items'


function Home() {
  
  const [inputValue, setInputValue] = useState("")

  const [items, setItems] = useState(['try', 'searching', 'any', 'of', 'these', 'words']);
  const [filteredItems, setFilteredItems] = useState([...items]);

  function addInputChange(e){
    setInputValue(e.target.value);
  }

  function handleAdd(){
    setItems([...items, inputValue])
    setFilteredItems([...items, inputValue])
    setInputValue("");
    console.log(items)
  }

  const handleSearch = (e) => {
      console.log(e.target.value);
      setFilteredItems(items.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  
  return (
  <>
  <div className="inputField">
      <div>
      <input type="text" onChange={addInputChange} value={inputValue}/>
      <button type='button' onClick={handleAdd}>Add to List</button>
      </div>
      <br />
      <div>
        search : <input type="search" onChange={handleSearch}/>
      </div>
    </div>

    <Items items={filteredItems}/>

  </>
    
  )
}

export default Home