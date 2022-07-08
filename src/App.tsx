import  { useEffect, useRef, useState } from 'react';
import{ITodo} from'./types';
import { TodoList} from './component/TodoList'


const App :React.FC = ()  =>{
  const [value, setValue]=useState('')
  const[todos, setTodos] = useState<ITodo[]>([])

  const  inputRef = useRef<HTMLInputElement>(null)

  const hendleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => { 
     setValue(e.target.value)
   }

   const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === 'Enter') 
            addTodo()
   }

  const addTodo = () => {
    if(value) {
        setTodos([...todos, { id:Date.now(), title:value, complete: false}])
        setValue('')
  }
  }

const deleteTodo = (id: number): void => {
  setTodos(todos.filter(t => t.id !== id))
}

const toggleTodo =  (id: number): void => {
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;
      return{
        ...todo,
        complete:!todo.complete
      }
    }))
}

useEffect(() => {
if(inputRef.current) inputRef.current.focus();
},[])

  return (
    <div>
      <div>
        <input type="text"
        ref={inputRef}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={hendleChange}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items ={todos}
      deleteTodo = {deleteTodo}
      toggleTodo = {toggleTodo}
       />
    </div>
  );
}

export  {App};
