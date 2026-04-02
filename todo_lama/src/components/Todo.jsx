import { useState, useEffect, useRef, use } from "react";


import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import Button from "./Button";


const Todo = () => {
    console.log('Todo rendered');

    const [tasks, setTasks] = useState( () => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [
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
    });

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const newTaskInputRef = useRef(null);
    const firstIncompleteTaskRef = useRef(null);
    const firstIncompleteTaskId = tasks.find(task => !task.isDone)?.id;

    const deleteAllTasks = () => {
        const isConfirmed = window.confirm('Вы уверены, что хотите удалить все задачи?');
        if (isConfirmed) {
            setTasks([]);
        }
    }

    const deleteTask = (taskId) => {
        const isConfirmed = window.confirm('Вы уверены, что хотите удалить эту задачу?');
        if (isConfirmed) {
            setTasks(tasks.filter(task => task.id !== taskId));
        }
    }

    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isDone };
            }
            return task;
        }));
    }

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: Date.now(),
                title: newTaskTitle.trim(),
                isDone: false
            };
            setTasks([...tasks, newTask]);
            setNewTaskTitle('');
            searchQuery && setSearchQuery(''); // Сброс поискового запроса при добавлении новой задачи, если он был установлен
            newTaskInputRef.current.focus();
        }
    }

    useEffect(() => {
        // Сохраняем задачи в localStorage при каждом изменении списка задач
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        // Фокусируемся на поле ввода новой задачи при загрузке компонента
        newTaskInputRef.current.focus()
    }, []);

    const clearSearchQuery = searchQuery.trim().toLocaleLowerCase();

    const filteredTasks = clearSearchQuery.length > 0 
        ? tasks.filter(task => task.title.toLocaleLowerCase().includes(clearSearchQuery))
        : null;

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                newTaskInputRef={newTaskInputRef}
            />
            <SearchTaskForm 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(task => task.isDone).length}
                // onDeleteAllButtonClick={deleteAllTasks}
            />
            <Button
                onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                > 
                    Show first incomplete task
            </Button>
            <TodoList
                tasks={tasks}
                filteredTasks={filteredTasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
                firstIncompleteTaskId={firstIncompleteTaskId}
                firstIncompleteTaskRef={firstIncompleteTaskRef}
            />
        </div>
    )
}

export default Todo;