import React from 'react';
// import {TodoItem} from '../../types'

interface ITodoListItem{
    todos: TodoItem;
    changeHandler(i:number): void
}

const TodoListItem: React.FC<ITodoListItem> = ({todos, changeHandler}) => {
    console.log('props',todos);
    return (
        <label>
            <input type="checkbox" checked={todos.isComplete} onChange={() => changeHandler(todos.id)}></input>
            {todos.title}
        </label>
    )
}

export default TodoListItem;