import React from 'react'
import './MenuItem.scss'
import { directoryData } from '../../types';


const MenuItem: React.FC<directoryData> = ({title,id, imageUrl,size}) => {
    return (
       <div style={{backgroundImage : `url(${imageUrl})`}} 
       className={size ? 'menu-item large' : 'menu-item'}
       key={id}>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}

export default MenuItem;