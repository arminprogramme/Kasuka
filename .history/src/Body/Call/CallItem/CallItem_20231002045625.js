import React from 'react'
import './CallItem.css'

function CallItem() {
  return (
    <div className='flex content-center call-item-container'>
        <i class="fa fa-map-marker active"></i>
        <div className="call-item-content">
            <h2>مکان :</h2>
            <p className='text-gray-500'>تهران خیابان آزادی</p>
        </div>
    </div>
  )
}

export default CallItem