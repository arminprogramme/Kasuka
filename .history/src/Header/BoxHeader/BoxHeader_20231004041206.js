import React from 'react';
import './BoxHeader.css'

const BoxHeader = ({icon = "fa fa-calendar active-text" , title = 'نمونه کارها'}) => {
    return (
        <div className='box-header'>
           <div className="box-icon-header">
           <i class={icon}></i>
           </div>
           <div className="box-content-header">
        <h2 className=' pt-3 text-xl'>{title}</h2>
           </div>
        </div>
    );
}

export default BoxHeader;
