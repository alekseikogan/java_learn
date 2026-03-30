import { useState, useEffect, use } from "react";

import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";


const Todo = () => {

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

    const deleterAllTasks = () => {
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

    const filterTasks = (query) => {
        console.log(`Поиск задачи: ${query}`);
        // return tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
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
        }
    }

    useEffect(() => {
        // Сохраняем задачи в localStorage при каждом изменении списка задач
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}

            />
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