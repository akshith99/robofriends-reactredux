import React from "react";
import './Scroll.css'

const Scroll = (props) => {
    return (
        <div 
        className="scroll-hidden" 
        style={{border: '5px solid black', height: '500px', paddingBottom:'5px', margin: '5px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;