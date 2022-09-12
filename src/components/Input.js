import React, { Fragment, useState } from 'react';

const Input = (props) => {

    const fillInput = (event) =>{
      console.log(event.target.value);
      props.handleInput(event.target.value);
    }
    return (
      <Fragment>
        <label htmlFor={props.id}></label>
        <input
          data-testid="input"
          id={props.id} 
          className="border-gray border-2 h-11 w-96 p-2 rounded-md mr-2"
          value={props.value}
          onChange={(e)=>fillInput(e)}
          placeholder={props.placeholder}
        />
      </Fragment>
        
 );
};

export default Input