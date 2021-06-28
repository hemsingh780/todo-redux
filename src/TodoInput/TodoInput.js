
import { useState } from "react"
import { Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import classes from './TodoInput.module.css'


const TodoInput = (props) => {

    const [newTodo,setNewTodo] = useState('');

    const handleChange = event =>setNewTodo(event.target.value)
    
    const submitHandler = event => {
     if(newTodo === ''){
          alert('input field is required');
      }
        event.preventDefault();
        props.onAddTodo({
            label:newTodo
        })
        setNewTodo('')
    }

    return(
    <>

    <div className={classes.Div}>
        <Form onSubmit={submitHandler}>
        <Form.Control value={newTodo} 
         onChange={handleChange}
         type='text' 
         className={classes.TodoInput}
        />
        <Button variant='primary' type='submit'>Add TODO</Button>
        </Form>
   </div>
    </>
   )
}

export default TodoInput