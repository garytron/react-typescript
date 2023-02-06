import { useTodos } from '../hooks/useTodo';

const Title = () => {
  const { pendingTodos } = useTodos();

  return (
    <h1>
      Todos: { pendingTodos }
    </h1>
  )
}

export default Title;