import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import 'dayjs/locale/de';
import dayjs from 'dayjs';

export default function EditTaskForm(props) {

    function handleSubmitClick(e) {
        e.preventDefault();
        const updatedObject = { id: props.id, task: props.updatedTask, date: new Date(props.updatedDate) }
        const updatedList = props.todos.map((todo) => todo.id === props.id ? updatedObject : todo)
        props.setTodos(updatedList)
        props.setEditTask('')
        props.setUpdatedTask('')
        props.setUpdatedDate(dayjs(new Date()))

    }

    return <CardActions>
        <form onSubmit={handleSubmitClick} id="update-form">
            <TextField key={props.id} sx={{ m: 1 }} required id="task-update" label="Task:" variant="outlined" value={props.updatedTask} onChange={(e) => props.setUpdatedTask(e.target.value)} />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de" >
                <DateTimePicker key={props.id} sx={{ m: 1 }} required label="Due Date:" value={props.updatedDate} onChange={(e) => props.setUpdatedDate(e)} />
            </LocalizationProvider>
        </form>
        <Button size="small" variant="contained" type='submit' form="update-form" sx={{ m: 1 }}>Update</Button>
    </CardActions>;
}