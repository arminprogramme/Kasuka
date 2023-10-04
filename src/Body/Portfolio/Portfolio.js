import React,{useEffect} from 'react'
import ImagePortfolio from './ImagePortfolio/ImagePortfolio.js'
import './Portfolio.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Portfolio() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
        <div className="sp-header px-2">
        <h5 className='py-2'>نمونه کارها</h5>
        <h2 className='text-2xl font-bold'>نمونه کارهارا بررسی کنید</h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="picture-portfolio py-10 px-5">
            <ImagePortfolio/>
        </div>
    </div>
  )
}

export default Portfolio