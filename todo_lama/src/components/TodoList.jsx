import TodoItem from "./TodoItem";

const TodoList = () => {
    const hasTasks = true; // заглушка для проверки наличия задач

    if (!hasTasks) {
        return <div className="todo__empty-message"></div>;
    }

    return (
      <ul className="todo__list">
        {/* задача 1 */}
        <TodoItem 
          className="todo__item"
          isDone={false}
          id="task-1"
          title="Убраться в комнате"

        />
        {/* задача 2 */}
        <TodoItem 
          className="todo__item"
          isDone={false}
          id="task-2"
          title="Пойти в магазин"
        />
        {/* задача 3 */}
        <TodoItem 
          className="todo__item"
          isDone={true}
          id="task-3"
          title="Купить продукты"
        />
      </ul>
    )
}

export default TodoList;