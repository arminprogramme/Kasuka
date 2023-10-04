import React,{useEffect} from 'react'
import './Sponsor.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Sponsor() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
        <div dir='rtl' className="w-full text-center mx-auto grid gap-9 items-center py-10 justify-center my-16 px-5 bg-gray-100 grid-cols-1 sm:grid-cols-3 lg:grid-cols-6">
            <div data-aos="zoom-in" data-aos-duration="1500"  className="sponsor-img-div">
                <img src="client-4.png" className='w-52 text-center' alt="" />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500"  className="sponsor-img-div">
                <img src="client-1.png" alt="" />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500"  className="sponsor-img-div">
                <img src="client-2.png" alt="" />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500"  className="sponsor-img-div">
                <img src="client-3.png" alt="" />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500"  className="sponsor-img-div">
                <img src="client-8.png" alt="" />
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500"  className="sponsor-img-div">
                <img src="client-5.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Sponsor