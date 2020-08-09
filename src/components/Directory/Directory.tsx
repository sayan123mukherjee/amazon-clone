import React from 'react';
import {getDirectoryData} from './DirectoryData'
import {directoryData} from '../../types';
import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem';
import { RouteComponentProps } from 'react-router-dom';

interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

class Directory extends React.Component<{hisProps:any,match:any},{sections:Array<directoryData>}>{
    state = {
        sections : []
    }
    componentDidMount(){
        console.log('history in directory',this.props.hisProps)
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
                    size={size}
                    match={this.props.match}
                    history={this.props.hisProps}></MenuItem>
                })}
            </div>
        )
    }
}

export default Directory;