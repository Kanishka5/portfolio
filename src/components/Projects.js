import React,{Component} from 'react';

export default class Intro extends Component {
    render(){
        return(
            <div style={{ display:'flex',marginLeft:'18vw',marginRight:'18vw',marginTop:100 }}>
                <div className="ilust1" style={{ paddingTop:100}}>
                    <img style={{ height:500,width:400 }} src= "https://2o34683axl001lupaf2udyvl-wpengine.netdna-ssl.com/wp-content/uploads/SageGray_Edited_2018.jpg"/>
                </div>
                <div style={ introtxtstyle }>
                    <div className="introtxt" >
                        <h1>Project Name</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>

        );
    }
}

const introtxtstyle = {
    paddingLeft:'5vw',
    paddingTop:100,
    fontSize:20,
}