import React, { useState } from "react";
import "./ToDo.css";
import swal from 'sweetalert';

export const ToDo = () => {
  const [listName, setListName] = useState("");
  const [list, setList] = useState([]);
  const [valid, setValid] = useState('')
  const [editId, setEditId] = useState(null)

  const submitList = (event) => {
    event.preventDefault();

    if(listName && !(/\s/.test(listName))){
      setList([...list, listName]);
      setListName("");
      setValid('')
      swal({
        title: "List added!",      
        icon: "success",
        
      });
    }else{
      setValid('Enter a list')
    }
    if (editId !== null) {
      const editTodo = list[editId];
      const updateList = list.map((doList) => {
        if (doList === editTodo) {
          return listName;
        } else {
          return doList;
        }
      });
      setList(updateList);
    }
    setEditId(null)
    
   
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
  };

  const editItem = (index) => {
    const editTodo = list.find((doList)=> doList === list[index])
    setListName(editTodo)
    setEditId(index)
  }

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
      <button type="submit" className="btn btn-success text-center">{editId !== null?'Edit':'Save'}</button>
      </div>
      </form>
      <ol>
        {list.map((value, index) => (
          <li key={index}>
            {value}
             <i className="bi bi-trash3-fill" onClick={() => deleteItem(index)}></i>
             <i className="bi bi-pencil-fill" onClick={() => editItem(index)}></i>
          </li>
        ))}
      </ol>
    </div>
  );
};
