import React, { FunctionComponent } from 'react';

//const Scroll = (props:any) => {
const Scroll: FunctionComponent<any> = (props) => { //usign official typing  
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;