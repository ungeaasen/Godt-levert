import React, { useState } from 'react'
import '../styles/dropdown.scss'

export const Dropdown = ({ option1, list, selectedItem }) => {
  const [currentItem, setCurrentItem] = useState(selectedItem)
  const [isActive, setActive] = useState("false")
  
  const selectMenu = (item) => {
    setCurrentItem(item)
    handleToggle()
  }

  const handleToggle = () => {
    setActive(!isActive)
  }
  const handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    console.log('enter press here! ')
  }
}

  const renderList = () => {
    {if({list}){
       return list.map((optionList) => { 
          return (
            <div className="optionList">
              <span className="color"></span> <div className="item" onKeyPress={() => selectMenu(`${optionList}`)} onClick={() => selectMenu(`${optionList}`)} value={optionList} tabIndex="0">{optionList}</div>
           </div>
          )
      })
    }}
  } 

  return (
    <div className="container">
      <div className="dropdown">
        <span className="color"></span>
        <button className="button" onClick={handleToggle}>{currentItem}</button>
        <span className="arrow">&#x2193;</span>
      </div>
      <div className={isActive ? "listShow" : "list"}>
        { renderList() }
      </div>
    </div>
  )
}