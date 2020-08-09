import React from 'react'
import './MenuItem.scss'
import { directoryData } from '../../types';
import { withRouter, RouteComponentProps, match} from 'react-router-dom';


const MenuItem: React.FC<directoryData> = ({title,id, imageUrl,size,history,linkUrl,match}) => {
    console.log('historuy in menuu trme',history);
    return (
       <div 
       style={{backgroundImage : `url(${imageUrl})`}} 
       className={size ? 'menu-item large' : 'menu-item'}
       onClick={() => history.push(`${match.url}${linkUrl}`)}
       key={id}>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}

export default MenuItem;