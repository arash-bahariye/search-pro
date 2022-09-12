import React from 'react'

function Button(props) {
  return (
    <button 
    className={props.css}
    onClick={()=>props.onClick()}
    type="submit"
    role={props.role}
    >
    Go!
    </button>
  )
}

export default Button