import React from 'react';
import './MyAccount.scss'

interface MyAccountProps{
    name: string;
}

const MyAccount: React.FC<MyAccountProps> = ({name}) => {
    return (
        <div className="header__my-account">
            <span>Hello, <span className="header__my-account__name">{name}</span></span>
            <div className="header__my-account__options">
                <span>Account and Lists</span>
                <i className="material-icons">navigate_next</i>
            </div>
        </div>
    )
}

export default MyAccount;