import React from 'react'
import TeamItem from './TeamItem/TeamItem.js'
function Team() {
  return (
    <div className='Team-container'>
       <div class="sp-header px-8">
        <h5 class="py-2 text-gray-500">تیم</h5>
        <h2 class="text-2xl font-bold">تیم مارا بررسی کنید</h2>
        </div>
        <div className="mx-auto text-center py-10 justify-center gap-6 Team-item grid lg:grid-cols-4">
            <TeamItem/>
            <TeamItem/>
            <TeamItem/>
            <TeamItem/>
        </div>
    </div>
  )
}

export default Team