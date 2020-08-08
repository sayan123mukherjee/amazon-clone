import React from 'react';
import PropsExample from './PropsExample'

interface apiData{
    userId: number,
    id: number,
    title: string,
    completed: false
}

class SuperExample extends React.Component<{},{array:Array<apiData>}>{
    constructor(){
        super({});
        this.state = {
            array: []
        }
    }
    UNSAFE_componentWillMount(){
        console.log('will mount')
        setTimeout(()=> {
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                this.setState(prevState => ({array: data}));
                console.log(this.state.array);
            })
        },4000)
    }
    render(){
        console.log('render')
        return (
            <ul>
                {this.state.array.map(item => {
                    return <PropsExample 
                    id={item.id}
                    userId={item.userId}
                    title={item.title}
                    completed={item.completed}
                    ></PropsExample>
                })}
            </ul>
        )
    }
}


export default SuperExample;