import React from 'react'

function TypeHead(props) {
  return (
    <div className='mr-0 mt-2 md:mr-16 md:mt-4 shadow-md bg-gray-200 rounded-md'>
        {props.content.length > 0 && props.content.slice(0,5).map((item,index)=>{
            return(
                <p className=' hover:bg-gray-400 p-3 cursor-pointer' key={index} onClick={()=>props.handleSelectTypeHead(item)}>{item.word}</p>
            )
        })}
    </div>
  )
}

export default TypeHead