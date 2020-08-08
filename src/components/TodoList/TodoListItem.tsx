import React from 'react';
import {TodoItem} from '../../types'

interface ITodoListItem{
    todos: TodoItem;
    changeHandler(i:number): void
}

// const TodoListItem: React.FC<ITodoListItem> = ({todos, changeHandler}) => {
//     console.log('props',todos);
//     return (
//         <label>
//             <input type="checkbox" checked={todos.isComplete} onChange={() => changeHandler(todos.id)}></input>
//             {todos.title}
//         </label>
//     )
// }

class TodoListItem extends React.Component<ITodoListItem,{}>{

    componentDidMount(){
        console.log('cdm')
    }

    render(){
        return (
        <label>
            <input type="checkbox" checked={this.props.todos.isComplete} onChange={() => this.props.changeHandler(this.props.todos.id)}></input>
            {this.props.todos.title}
        </label>
    )
}
}



export default TodoListItem;