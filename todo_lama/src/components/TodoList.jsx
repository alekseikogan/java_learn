import TodoItem from "./TodoItem";
import { memo } from "react";

const TodoList = (props) => {
    const { 
      tasks = [],
      onDeleteTaskButtonClick,
      onTaskCompleteChange,
      filteredTasks,
      firstIncompleteTaskId,
      firstIncompleteTaskRef
    } = props

    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0;

    if (!hasTasks) {
        return <div className="todo__empty-message">Упс! Задач пока нет...</div>;
    }

    if (hasTasks && isEmptyFilteredTasks) {
        return <div className="todo__empty-message">Задачи не найдены...</div>;
    }

    return (
      <ul className="todo__list">
        {(filteredTasks ?? tasks).map((task) => (
          <TodoItem
            className="todo-item"
            ref={task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
            onDeleteTaskButtonClick={onDeleteTaskButtonClick}
            onTaskCompleteChange={onTaskCompleteChange}
            key={task.id}
            {...task}
          />
        ))}
      </ul>
    )
}

export default memo(TodoList);