import React from 'react'
import ServicesItem from './ServicesItem.js'
import './Services.css'
function Services() {
  let serviceData = [
    {title : 'بهترین مقالات' , icon : 'py-5 px-5 rounded active fa fa-file-text-o'},
    {title : 'اشتراک گذاری محتوا' , icon : 'py-5 px-5 rounded active fa fa-slideshare'},
    {title : 'بیشترین کارایی' , icon : 'py-5 px-5 rounded active fa fa-tachometer'},
    {title : 'خدمات ویژه' , icon : 'py-5 px-5 rounded active fa fa-soccer-ball-o'},
    {title : 'نسخه های جهانی' , icon : 'py-5 px-5 rounded active fa fa-globe'},
    {title : 'پشتیبانی باکیفیت' , icon : 'py-5 px-5 rounded active fa fa-building'},
  ]
  return (
    <div className='px-3 py-5 services'>
        <h5 className='py-2'>خدمات</h5>
        <h2 className='text-2xl font-bold'>خدمات مارا بررسی کنید</h2>

        <div className="py-8 services-box grid mx-auto text-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServicesItem {...serviceData[0]}/>
            <ServicesItem {...serviceData[1]}/>
            <ServicesItem {...serviceData[2]}/>
            <ServicesItem {...serviceData[3]}/>
            <ServicesItem {...serviceData[4]}/>
            <ServicesItem {...serviceData[5]}/>
        </div>
    </div>
  )
}

export default Services