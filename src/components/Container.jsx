import React, { useState } from 'react'
import FormTodo from './FormTodo'
import TaskList from './TaskList'

export default function Container() {

const [list, setList] = useState([]);

const handleAddItem =  addItem => {
    setList([...list, addItem]);
};


  return (
    <div>Container
        <FormTodo handleAddItem={handleAddItem}/>
        <TaskList list={list} setList={setList}/>
    </div>
  )
}
