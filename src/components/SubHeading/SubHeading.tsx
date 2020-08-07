import React, { Children } from 'react';
import { checkValue } from 'module_name';
import { type } from 'os';

// checkValue('string');

type SubHeadingProps = {
    name?: string,
}

// functional compoent returns only jsx or null

const SubHeading: React.FC<SubHeadingProps> = ({name = 'default',children}) => {
    console.log(children);
    return (
        <p>{name}</p>
    )
}

export default SubHeading;