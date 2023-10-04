import React,{useEffect} from "react";
import Nav from './Nav/Nav.js'
import './Header.css'
import BoxHeader from './BoxHeader/BoxHeader';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {

    let HeaderDetail = [
        {icon : 'active-text fa fa-database' , title : 'اطلاعات ذخیره شده'},
        {icon : 'active-text fa fa-paint-brush' , title : 'عملکرد های پایانی'},
        {icon : 'active-text fa fa-bar-chart' , title : 'نمونه کار کیفی'},
        {icon : 'active-text fa fa-store' , title : 'متن نمایشی'},
    ]


    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>

            <section  class="bg-center bg-cover w-full bg-no-repeat bg-[url('https://hivalearn.ir/templates/kasuka/assets/img/hero-bg.jpg')] bg-gray-500 bg-blend-multiply">
           <Nav/>
           <div className="header-kasuka-container px-4 mx-auto  text-center py-22 lg:py-52">
    <div class="px-4 mx-auto  text-center">
        <h1 data-aos="fade-up" data-aos-duration="1500"  class="mb-4 text-header text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">راه حل های قدرتمند دیجیتال با <div className="active-text">Kasuka</div></h1>
        <p  data-aos="fade-up" data-aos-duration="1500" class="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">ما تیمی از بازاریابان با استعداد دیجیتال هستیم
</p>
<div data-aos="zoom-in" data-aos-duration="1500" className="gap-3 pt-6 pb-12 px-10 box-container-header mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        <BoxHeader {...HeaderDetail[0]} />
        <BoxHeader {...HeaderDetail[1]} />
        <BoxHeader {...HeaderDetail[2]} />
        <BoxHeader {...HeaderDetail[3]} />
        <BoxHeader />
    </div>
        
    </div>
           </div>

    
</section>


        </div>
    );
}

export default Header;
