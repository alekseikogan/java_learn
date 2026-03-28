import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const hasTasks = true; // заглушка для проверки наличия задач

    const { 
      tasks = [] 
    } = props;

    if (!hasTasks) {
        return <div className="todo__empty-message"></div>;
    }

    return (
      <ul className="todo__list">
        {tasks.map((task) => (
          <TodoItem
            className="todo-item"
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    )
}

export default TodoList;