import React,{useEffect} from 'react';
import './AdsItem.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const AdsItem = ({icon , title , par}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className='flex items-center ads-items py-8'>
            <i className={icon}></i>
            <div className="text-ads-item px-3">
                <h2 className='text-xl font-bold py-2'>با گارانتی بی نهایت</h2>
                <p>کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند</p>
            </div>
        </div>
    );
}

export default AdsItem;
