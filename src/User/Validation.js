import React from 'react';

const Validation = (props)=>{
    return(
        <div>
            {
                props.length<5 ? 
            <p>Too Short</p>:
            <p>Too long!!</p>
            }
            </div>
    )
}
export default Validation;

