import React from 'react';
import MenuItem from '../../components/MenuItem/MenuItem'
import Directory from '../../components/Directory/Directory'
import './HomePage.scss'

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <Directory></Directory>
        </div>
    )
}

export default HomePage;