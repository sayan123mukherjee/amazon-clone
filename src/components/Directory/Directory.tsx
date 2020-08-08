import React from 'react';
import {getDirectoryData} from './DirectoryData'
import {directoryData} from '../../types';
import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem';

class Directory extends React.Component<{},{sections:Array<directoryData>}>{
    constructor({}){
        super({});
        this.state = {
            sections: []
        }
    }
    componentDidMount(){
        getDirectoryData().then((data: Array<directoryData>) => {
            this.setState({sections: data});
            console.log('sections', this.state.sections);
        })
    }
    render(){
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, id, imageUrl,linkUrl, size}) => {
                    return <MenuItem title={title} 
                    id={id} 
                    imageUrl={imageUrl} 
                    linkUrl={linkUrl}
                    size={size}></MenuItem>
                })}
            </div>
        )
    }
}

export default Directory;