import { useTodos } from '../../hooks/useTodo';
import { Todo } from '../interfaces/interfaces';

interface props {
  todo: Todo
}

const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useTodos();

  const handleDBClick = () => {
    toggleTodo(todo.id);
  }

  return (
    <li style={{ cursor: 'pointer', textDecoration: todo.completed? 'line-through' : '' }} onDoubleClick={ handleDBClick }>
      { todo.desc }
    </li>
  )
}

export default TodoItem;