import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";


const Todo = () => {

    const tasks = [
        {
            id: 1,
            title: 'Купить хлеб',
            isDone: false
        },
        {
            id: 2,
            title: 'Купить молоко',
            isDone: true
        },
        {
            id: 3,
            title: 'Купить яйца',
            isDone: false
        }
    ];

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <TodoInfo 
                total={tasks.length} done={tasks.filter(task => task.isDone).length}/>
            <TodoList tasks={tasks} />
        </div>
    )
}

export default Todo;