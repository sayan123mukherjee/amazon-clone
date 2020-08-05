import React from 'react';
import {AiFillEye} from 'react-icons/ai';
import './ToggleButton.scss';

const HeaderToggleButton: React.FC = () => {
    const handleToggleButtonClick: React.MouseEventHandler = () => {
        console.log('clicked')
    }
    return (
        <button onClick={(e:React.MouseEvent<HTMLButtonElement>) => handleToggleButtonClick(e)}>
            <AiFillEye className="toggle-btn"></AiFillEye>
        </button>
    )
}

export default HeaderToggleButton;