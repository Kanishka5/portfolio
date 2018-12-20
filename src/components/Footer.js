import React,{Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
            <div style={ footerstyle }>
                <div style={ footercomp }>
                    <ul>
                        <li>Name </li>
                        <li>mail</li>
                        <li>phone</li>
                    </ul>
                </div>

                <div style={ footercomp }>
                    <ul>
                        <li>Name </li>
                        <li>mail</li>
                        <li>phone</li>
                        <li>phone</li>
                    </ul>
                </div>
                <div style={ footercomp }>
                    <p>All projects ....</p>
                </div>
            </div>
        );
    }
}

const footerstyle = {
    display:'flex',
    position:'absolute',
    right:0,
    left:0,
    paddingTop:50,
    marginTop:50,
    boxShadow: '5px 5px 10px 5px #888888',
}

const footercomp = {
    paddingLeft:'20vw',
}