import{TodoItem} from './TodoItem'
import {ITodo} from '../types'

interface ITodoListProps {
    items: ITodo[]
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> =  (props)  => {
    const {items, toggleTodo, deleteTodo} = props;
    return (
        <div>
               {items.map(todo => 
               (<TodoItem
                key={todo.id}
               toggleTodo={toggleTodo}
               deleteTodo={deleteTodo}

                {...todo} />))}
        </div>
    )
}

export  {TodoList};