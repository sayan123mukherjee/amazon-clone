import React from 'react';
import MenuItem from '../../components/MenuItem/MenuItem'
import Directory from '../../components/Directory/Directory'
import './HomePage.scss'
import { RouteComponentProps } from 'react-router-dom';
interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const HomePage: React.FC<ChildComponentProps> = ({history, match}) => {
    console.log(match);
    return (
        <div className="homepage">
            <Directory hisProps={history} match={match}></Directory>
        </div>
    )
}

export default HomePage;