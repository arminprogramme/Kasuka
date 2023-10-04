import React,{useEffect} from 'react'
import EnjoyItems from './EnjoyItems/EnjoyItems.js'
import './Enjoy.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Enjoy() {

  let enjoyData = [
    {number : 65, par : 'مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم '},
    {number : 22, par : 'پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد'},
    {number : 78, par : 'سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد'},
    {number : 49, par : 'جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند'},
  ]

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="enjoy-container px-1 py-24">
       <div className="grid lg:grid-cols-2 ">
        <div data-aos="fade-right" data-aos-duration="1500" className="enjoy-img-container px-2">
          <img src="counts-img.jpg" className='w-full  h-full rounded' alt="" />
        </div>
    <div  data-aos="fade-left" data-aos-duration="1500" className="enjoy-content-container py-12 px-2">
      <h2 className="font-bold ">شایسته ترین لذت را به هر حال ارائه می دهد</h2>
      <p className='py-4 text-lg text-gray-600'>خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
      <div className="enjoy-item-container grid gap-8 md:grid-cols-2 pt-10">
        <EnjoyItems {...enjoyData[0]}/>
        <EnjoyItems {...enjoyData[1]}/>
        <EnjoyItems {...enjoyData[2]}/>
        <EnjoyItems {...enjoyData[3]}/>
      </div>
    </div>
       </div>
      </div>
    </div>
  )
}

export default Enjoy