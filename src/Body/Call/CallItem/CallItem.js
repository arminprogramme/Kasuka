import React from 'react'
import './CallItem.css'

function CallItem({icon , title , desc}) {
  return (
    <div className='flex content-center call-item-container'>
        <i class={icon}></i>
        <div className="call-item-content">
            <h2>{title} :</h2>
            <p className='text-gray-500'>{desc}</p>
        </div>
    </div>
  )
}

export default CallItem