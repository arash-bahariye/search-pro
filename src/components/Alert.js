import React from 'react'

function Alert(props) {
  return (
    <div role='alert' className='flex justify-center my-4'>
        <p className=' text-red-600'>
            {props.text}
        </p>
    </div>
  )
}

export default Alert