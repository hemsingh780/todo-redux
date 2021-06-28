
import './App.css';
import TodoInput from './TodoInput/TodoInput';
import Todos from './Todos/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react'

function App() {

const dispatch   =  useDispatch()


  useEffect(()=>{
    fetch('https://todo-react-redux-2ad8b-default-rtdb.firebaseio.com/Todos.json')
      .then(response => response.json())
      .then(responseData => {
      console.log(responseData)
      const loadTodo = []
        if(responseData === null){
           console.log('data is not here')
          }else{
            for(let key in responseData){
            loadTodo.push({
            id:key,
            label:responseData[key].label
            })
          }
        }
      dispatch({
      type:'GET_DATA',
      payload:loadTodo
      })
    })
  },[])




 const onAddTodo = (Todos) => {
     const requestOptions = {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(Todos)
        }
     fetch('https://todo-react-redux-2ad8b-default-rtdb.firebaseio.com/Todos.json',requestOptions)
      .then(response  => response.json())
      .then(data => {
          dispatch({
              type:'ADD_TODO',
              payload:{
                 id:data.name,...Todos
              }
         })
      })
 }


 const remove = todoId =>{
  fetch(` https://todo-react-redux-2ad8b-default-rtdb.firebaseio.com/Todos/${todoId}.json`,{
    method:'DELETE'
  }).then(response => dispatch({
        type:'DELETE_TODOS',
        payload:todoId
     })
  )
}


  return (
    <div className="App">
      <p className='p'>Todo app with redux</p>
      <TodoInput 
      onAddTodo={onAddTodo}
      />
      <Todos 
      remove = {remove}
      />
    </div>
  );
}

export default App;
