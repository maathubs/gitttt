import React from 'react';
const Button=(props)=> {
    return(
    
            <button type={props.type} className={props.className}  onSubmit={props.onSubmit} onClick={props.onClick}>{props.value}</button>
        
    )
}
export default Button