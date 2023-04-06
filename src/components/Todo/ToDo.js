import React, { useState } from "react";
import "./ToDo.css";
import swal from 'sweetalert';

export const ToDo = () => {
  const [listName, setListName] = useState("");
  const [list, setList] = useState([]);
  const [valid, setValid] = useState('')

  const submitList = (event) => {
    event.preventDefault();
    console.log(!/\s/.test(listName));

    if(listName && !(/\s/.test(listName))){
      setList([...list, listName]);
      setListName("");
      setValid('')
      swal({
        title: "List added!",      
        icon: "success",
        
      });
    }else{
      console.log('elseee');
      setValid('Enter a list')
    }
   
  };

  const handleChange = (event) => {
    setListName(event.target.value);
  };

  const deleteItem = (index) => {
    
    setList(list.filter((_values, key) => key !== index));
    swal({
      title: "List Deleted!",      
      icon: "error",
      
    });
    console.log(list);
  };

  return (
    <div className="mainDiv">
      <form onSubmit={submitList}>
        <h3 className="text-center text-white">Todo App</h3>
      <p className="text-danger">{valid}</p>
      <div className="inputDiv">
        <label className="text-white" htmlFor="">Enter your list here</label>
      <input
          className="input text-center form-control input-contrast input-block mb-3 js-filterable-field js-your-repositories-search"
          type="text"
          value={listName}
          onChange={handleChange}
          
        />
      </div>
     
  
      <div className="buttonDiv">
      <button type="submit" className="btn btn-success text-center">Save</button>
      </div>
      </form>
      <ol>
        {list.map((value, index) => (
          <li key={index}>
            {value} <i className="bi bi-trash3-fill" onClick={() => deleteItem(index)}></i>
          </li>
        ))}
      </ol>
    </div>
  );
};
