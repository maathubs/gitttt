import React from 'react';
import classes from './ErrorMsg.module.css';
const Errormsg=(props)=> {
    return(
        <div id={props.id} className={classes.errorMsg}>{props.msg}</div>
    )
}
export default Errormsg