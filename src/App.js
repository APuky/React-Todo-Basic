import './App.css';
import {useState} from 'react';
import dayjs from 'dayjs';

import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';


import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import 'dayjs/locale/de';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const [todo, setTodo] = useState('');
  const [date, setDate] = useState(dayjs(new Date()));
  const [todos, setTodos] = useState([]);
  const [validation, setValidation] = useState();
  function handleSubmitClick(e){
    e.preventDefault();
    if (!todo) {
      setValidation("Please enter a task.")
      return ;
    }

    if (!date) {
      setValidation("Please choose a due date.")
      return ;
    }

    setTodos([
      ...todos, {id:todos.length, task:todo, date:new Date(date)}
    ]);

    setTodo("");
    setDate(dayjs(new Date()));
    setValidation("");


  }

  function handleRemoveClick(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }



  return (<>
    <Stack 
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}>

    <Typography variant='h3'>
      Your TODO list
    </Typography>
    <div className='Validation App'>
      {validation}
    </div>

      <form onSubmit={handleSubmitClick} id="task-form">
        <TextField required id="task" label="Task:" variant="outlined" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de" >
          <DateTimePicker sx={{ ml: 1 }} required label="Due Date:" value={date} onChange={(e) => setDate(e)} />
        </LocalizationProvider>
      </form>
      <Button size="small" variant="contained" type='submit' form="task-form">Update</Button>

    <Container>
      {todos.map(Todo =>
        <Card sx={{ minWidth:40, m:2 }}>
          <CardContent>
            <Typography sx={{fontSize:14}} color="text.secondary">
              Task
            </Typography>
            <Typography variant='h3' component="div">
              {Todo.task}
            </Typography>
            <Typography variant='h6' component="div">
              {Todo.date.toDateString()}
            </Typography>
            <Typography component="div">
              Due: {Todo.date.getHours()}:{(Todo.date.getMinutes() < 10) ? `0${Todo.date.getMinutes()}` : Todo.date.getMinutes()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant='contained' onClick={() => handleRemoveClick(Todo.id)}>Remove task</Button>
          </CardActions>
        </Card>
      )}
    </Container>
  </Stack>
  </>
  );
}

export default App;
