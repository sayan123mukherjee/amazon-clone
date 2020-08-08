import React,{useState} from 'react';
import {TodoItem} from '../../types';
import TodoListItem from '../TodoList/TodoListItem'

const todoData: Array<TodoItem> = [
    {id: 1,title: 'wash todays clothes', isComplete: true},
    {id: 2,title: 'complete the ltodo app', isComplete: true}
]

interface john extends React.InputHTMLAttributes<HTMLInputElement> {
    foo: string,
    bar: number
}

const TodoList: React.FC<john> = ({foo,lang}) => {

    console.log(foo,lang);

    const [todoState, setTodoState] = useState(todoData);

    const selectUnselectTodo = (index:number) => {
       const newState = todoData.map(item => {
           if(item.id === index){
               return {
                   ...item,
                   isComplete: !item.isComplete
               }
           }
           return item;
       })
    //    setTodoState(newState);
    console.log(newState);
    }


    return (
        <React.Fragment>
            {todoData.map((item) => {
                return <TodoListItem todos={item} changeHandler={(index:number) => selectUnselectTodo(index)}></TodoListItem>
            })}
        </React.Fragment>
    )
}

export default TodoList;