import React,{useEffect} from 'react'
import './Cta.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Cta() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div  className="my-8 py-16 cta-container bg-cover w-full bg-no-repeat  text-center text-white">
      <div data-aos="zoom-in" data-aos-duration="1500" className="content-cta">
      <h2 className='text-2xl'>برو که بریم</h2>
        <p className='py-5'>اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.</p>
    <button className="cta-btn mt-5">
        شروع کن
    </button>
      </div>
    </div>
  )
}

export default Cta