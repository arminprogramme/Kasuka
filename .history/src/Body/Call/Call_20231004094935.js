import React,{useEffect} from 'react'
import  CallItem from './CallItem/CallItem.js'
import './Call.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Call() {

  let calData = [
    {icon : 'active fa fa-map-marker' , title : 'مکان' , desc : 'تهران خیابان آزادی'},
    {icon : 'active fa fa-envelope' , title : 'ایمیل' , desc : 'info@example.com'},
    {icon : 'active fa fa-mobile-phone' , title : 'تماس' , desc : "0123456789"},
  ]

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
        <div class="sp-header px-5 py-8">
            <h5 class="py-2 text-gray-500">تماس باما</h5>
            <h2 class="text-2xl font-bold">باما تماس بگیرید</h2>
            <div className="form-data-call grid lg:grid-cols-3 gap-6">
              <div  data-aos="fade-right" data-aos-duration="1500" className="data-call grid grid-cols-1">
                <CallItem />
                <CallItem />
                <CallItem />
              </div>
              <div data-aos="zoom-in" data-aos-duration="1500" className="form col-span-2">
                <div className="grid gap-6 mb-2 md:grid-cols-2">
                <div>
            <label for="first_name" class="block mb-2 text-sm font-medium">نام کاربری</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="@John" required />
                 </div>
                <div>
            <label for="first_name" class="block mb-2 text-sm font-medium ">ایمیل</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@gmail.com" required />
                 </div>
                </div>
                <div className="big-input">
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="پیامتو بنویس"></textarea>
                </div>
                <div className="submit-form w-full text-center pt-5">
                  <button className='sub-form active'>ارسال پیام</button>
                </div>
              </div>
            </div>
            </div>
    </div>
  )
}

export default Call