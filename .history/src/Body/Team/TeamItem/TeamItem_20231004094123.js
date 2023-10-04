import React,{useEffect} from 'react'
import './TeamItem.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
function TeamItem({Name , image , role}) {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className='team-card text-center'>
        
<div class="max-w-sm text-center rounded-lg shadow  text-black">
    <a href="#">
        <div className="team-img-container">
        <img class="rounded-t-lg" src={image}alt="" />
        <div className="overlay-team">
            <div className="text-team">
                <div className="flex text-center justify-between icon-team">
                    <i className=' fa fa-github'></i>
                    <i className=' fa fa-instagram'></i>
                    <i className=' fa fa-telegram'></i>
                    <i className=' fa fa-twitter'></i>
                </div>
            </div>
        </div>
        </div>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">پیتر هاریسون</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">طراح</p>
      
    </div>
</div>

    </div>
  )
}

export default TeamItem