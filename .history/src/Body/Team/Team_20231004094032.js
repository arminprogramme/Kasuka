import React from 'react'
import TeamItem from './TeamItem/TeamItem.js'
function Team() {
  let teamData =[
    {image : 'team-1.jpg' , Name : 'سام جکسون' , role : 'حسابدار'},
    {image : 'team-2.jpg' , Name : 'رزا پارکر' , role : 'CTO'},
    {image : 'team-3.jpg' , Name : 'پیتر هاریسون' , role : 'مدیرتولید'},
    {image : 'team-4.jpg' , Name : 'والتر وایت' , role : 'مدیر ارشد'},
  ]
  return (
    <div className='Team-container'>
       <div class="sp-header px-8">
        <h5 class="py-2 text-gray-500">تیم</h5>
        <h2 class="text-2xl font-bold">تیم مارا بررسی کنید</h2>
        </div>
        <div className="mx-auto text-center py-10 justify-center gap-6 Team-item grid lg:grid-cols-4">
            <TeamItem {...teamData[0]}/>
            <TeamItem {...teamData[1]}/>
            <TeamItem {...teamData[2]}/>
            <TeamItem {...teamData[3]}/>
        </div>
    </div>
  )
}

export default Team