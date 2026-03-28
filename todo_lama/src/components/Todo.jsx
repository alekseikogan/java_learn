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

    const deleterAllTasks = () => {
        console.log('delete all tasks');
    }

    const deleteTask = (taskId) => {
        console.log(`delete task with id ${taskId}`);
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`toggle task with id ${taskId} to ${isDone ? 'done' : 'not done'}`);
    }

    const filterTasks = (query) => {
        console.log(`Поиск задачи: ${query}`);
        // return tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
    }

    const addTask = () => {
        console.log('add task');
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask} />
            <SearchTaskForm onSearchInput={filterTasks} />
            <TodoInfo 
                total={tasks.length}
                done={tasks.filter(task => task.isDone).length}
                onDeleteAllButtonClick={deleterAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo;