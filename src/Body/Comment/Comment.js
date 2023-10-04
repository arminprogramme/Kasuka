import React,{useEffect} from 'react'
import './Comment.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Comment() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='px-4 text-center comment-container'>
        <div data-aos="zoom-in" data-aos-duration="1500" className="content-comment">
        <div className="profile-comment w-24 mx-auto">
            <img src="testimonials-1.jpg" alt="" />
        </div>
        <div className="text-white text-comment">
            <h2 className='pt-3 text-gray-300'>جان بولتون</h2>
            <h2 className='py-1 text-xl'>مدیر عامل</h2>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
        </div>

        </div>
       
    </div>
  )
}

export default Comment