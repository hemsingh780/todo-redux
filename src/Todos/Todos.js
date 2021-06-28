
import { ListGroup } from "react-bootstrap";
import {  useSelector } from "react-redux"
import classes from './Todos.module.css'

const Todos = (props) => {
 
    const todos = useSelector((state) => {
        return state.reducer.todos
    })
  
    if(!todos || !todos.length){
       return <p className={classes.p}>No Todos</p>
    }

    return(
        <ListGroup as="ul" 
        className={classes.Todo}
        >
           {todos.map((value,i)  => <ListGroup.Item as="li"
            key={i}
            onClick={props.remove.bind(this, value.id)}
            className={classes.li}
           >{value.label}</ListGroup.Item>)}

        </ListGroup>
    )
}


export default Todos