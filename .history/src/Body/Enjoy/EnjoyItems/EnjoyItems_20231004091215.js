import React from 'react'
import './EnjoyItem.css'
function EnjoyItems({number , par}) {
  return (
    <div className='py-5 enjoy-item flex items-center'>
        <i class="fa fa-smile-o active-text"></i>
        <div className="enjoy-item-center">
            <h2 className='font-bold text-lg'>{number}</h2>
            <p>لورم ایپسوم متن و با استفاده از طراحان گرافیک است</p>
        </div>
    </div>
  )
}

export default EnjoyItems