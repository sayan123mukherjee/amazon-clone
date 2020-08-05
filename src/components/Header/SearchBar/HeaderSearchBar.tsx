import React, { useState } from 'react'
import './HeaderSearchBar.scss';
// import {dropDownDataItemType,dropDownDataType} from '../../../types'

const HeaderSearchBar: React.FC<dropDownDataType> = ({names}) => {

  const [dropdownState, changeDropdownState] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const dropdownHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    changeDropdownState(!dropdownState)
  }

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  }

  return (
    <div className='header-searchbar'>
      <div className='header-searchbar__dropdown'
        onMouseEnter={() => changeDropdownState(true)}
        onMouseLeave={() => changeDropdownState(false)}>
        <button> Show All</button>
        {dropdownState ?
          <div className="header-searchbar__dropdown__list">
            <ul className='header-searchbar__dropdown__list--wrapper'>
              {names.map(item => (
                <li className='header-searchbar__dropdown__list--item'>{item.name}</li>
              ))}
            </ul>
          </div> : null}
      </div>
      <div className='header-searchbar__input'>
        <input type="text"
          name="header-searchbar-input"
          value={searchValue}
          onChange={(e) => changeInputHandler(e)}></input>
        <button>
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  )
}

export default HeaderSearchBar
