import React, { useEffect } from 'react';
import './AdsItem.css'

const AdsItem = ({ icon, title, par }) => {

    return ( <
        div className = 'flex items-center ads-items py-8' >
        <
        i className = { icon } > < /i> <
        div className = "text-ads-item px-3" >
        <
        h2 className = 'text-xl font-bold py-2' > { title } < /h2> <
        p > { par } < /p> <
        /div> <
        /div>
    );
}

export default AdsItem;