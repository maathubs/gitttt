import React from 'react';
const Textbox=(props)=>{
    return(    
        <input type={props.type}id={props.id} ref={props.ref} onKeyUp={props.onkeyup}onKeyPress={props.onKeyPress} value={props.value} className={props.className} placeholder={props.placeholder}/>
    )
}
export default Textbox