import TodoItem from "./TodoItem";

const TodoList = (props) => {

    const { 
      tasks = [],
      onDeleteTaskButtonClick,
      onTaskCompleteChange,
      filteredTasks
    } = props

    const hasTasks = true;

    if (!hasTasks) {
        return <div className="todo__empty-message"></div>;
    }

    return (
      <ul className="todo__list">
        {(filteredTasks ?? tasks).map((task) => (
          <TodoItem
            className="todo-item"
            onDeleteTaskButtonClick={onDeleteTaskButtonClick}
            onTaskCompleteChange={onTaskCompleteChange}
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    )
}

export default TodoList;