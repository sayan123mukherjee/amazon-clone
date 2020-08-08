import React from 'react'

interface apiData{
    userId: number,
    id: number,
    title: string,
    completed: false
}

const PropsExample: React.FC<apiData> = ({userId,id,title,completed}) => {
    return (
        <li>{title}</li>
    )
}

export default PropsExample
