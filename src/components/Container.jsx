import React, { useState } from 'react'
import FormTodo from './FormTodo'
import TaskList from './TaskList'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Container() {

  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };


  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>

          <Typography variant="h5" component="div">
            Ingrese el nombre de la tarea
          </Typography>

          <FormTodo handleAddItem={handleAddItem} />
        </CardContent>
      </Card>

      <TaskList list={list} setList={setList} />
    </div>
  )
}
