import React from 'react'

function TypeHead(props) {
  return (
    <div className='mr-16 mt-4 md:mt-0 shadow-md bg-gray-200 p-2 rounded-md'>
        {props.content.length > 0 && props.content.slice(0,5).map((item,index)=>{
            return(
                <p className=' hover:bg-gray-400 p-2 cursor-pointer' key={index} onClick={()=>props.handleSelectTypeHead(item)}>{item.word}</p>
            )
        })}
    </div>
  )
}

export default TypeHead