import { useState, useEffect, useRef, useCallback, useMemo } from "react";


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

    const deleteAllTasks = useCallback(() => {
        const isConfirmed = window.confirm('Вы уверены, что хотите удалить все задачи?');
        if (isConfirmed) {
            setTasks([]);
        }
    }, []);

    const deleteTask = useCallback((taskId) => {
        const isConfirmed = window.confirm('Вы уверены, что хотите удалить эту задачу?');
        if (isConfirmed) {
            setTasks(tasks.filter(task => task.id !== taskId));
        }
    }, [tasks]);
 
    const toggleTaskComplete = useCallback((taskId, isDone) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isDone };
            }
            return task;
        }));
    }, [tasks]);

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

    const doneTasksCount = useMemo(() => {
        return tasks.filter(task => task.isDone).length
    }, [tasks]
    )

    useEffect(() => {
        // Сохраняем задачи в localStorage при каждом изменении списка задач
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        // Фокусируемся на поле ввода новой задачи при загрузке компонента
        newTaskInputRef.current.focus()
    }, []);

    const filteredTasks = useMemo(() => {
        
        const trimmedSearchQuery = searchQuery.trim().toLocaleLowerCase();

        return trimmedSearchQuery.length > 0 
        ? tasks.filter(task => task.title.toLocaleLowerCase().includes(trimmedSearchQuery))
        : null;
    }, [tasks, searchQuery]);

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
                done={doneTasksCount}
                onDeleteAllButtonClick={deleteAllTasks}
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