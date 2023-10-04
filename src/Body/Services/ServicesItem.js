import React,{useEffect} from 'react';
import './ServicesItem.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function ServicesItem({title , icon}) {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className='py-8 px-5 box-services rounded'>
        <div className="icon-box-services">
        <i class={icon}></i>
        </div>
        <div className="py-3 content-box-services">
            <h2 className='py-3 text-2xl font-bold'>{title}</h2>
            <p>آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند</p>
        </div>
    </div>
  )
}

export default ServicesItem