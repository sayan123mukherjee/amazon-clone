import React, { ReactElement, ReactNode } from 'react';
import HeaderToggleButton from './ToggleButton/ToggleButton'
import HeaderSearchBar from './SearchBar/HeaderSearchBar'
import MyAccount from './MyAccount/MyAccount'
import Cart from './Cart/Cart'
import './Header.scss';
// import { dropDownDataType } from '../../types';

interface IHeader{
    name: string;
    title: string;
    children?: React.ReactNode
    className?: React.HTMLAttributes<HTMLDivElement>
}

const dropdownData:dropDownDataType  = {
    names: [
    { name: 'Amazon fashion' },
    { name: 'Amalzon pantry' },
    { name: 'Amazon devices' },
    { name: 'Appliances' },
    { name: 'Books' },
    { name: 'clothings' }
  ]}

function ts({name,title,children}:IHeader){
    return(
        {children}
    )

}

const Header: React.FC<IHeader> = ({name,title,className}): ReactElement => {
    return (
        <div className="header">
            {/* <HeaderToggleButton></HeaderToggleButton> */}
            <HeaderSearchBar names={dropdownData.names}></HeaderSearchBar>
            <MyAccount name="sayan"></MyAccount>
            <Cart count={4}></Cart>
        </div>
    )
}

export default Header;
