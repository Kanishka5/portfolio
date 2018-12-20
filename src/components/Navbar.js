import React,{Component} from 'react';

export default class Navbar extends Component{
    render(){
        return(
            <div className="navbar" style={ navstyle }>
                <div className="logo" style= {{ display:'inline-flex'}}>
                    <h1>LOGO </h1>
                </div>
                <div className="tabs" style={ tabsstyle } >
                    <ul style={{ display:'inline-flex' }}>
                        <li style={ liststyle }><a href='/' style={{ textDecoration:'none'}} ><h2>Home</h2></a></li>
                        <li style={ liststyle }><a href='#project' style={{ textDecoration:'none'}} ><h2>Project</h2></a></li>
                        <li style={ liststyle }><a href='#about' style={{ textDecoration:'none'}} ><h2>About</h2></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const navstyle = {
    display: 'block',
    paddingLeft: '20px',
    boxShadow: '5px 5px 10px #888888',
}

const tabsstyle = {
    float:'right',
    display:'inline-flex',
}

const liststyle = {
    display:'block',
    paddingRight:20,
}