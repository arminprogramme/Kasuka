import React, { useEffect } from 'react'
import EnjoyItems from './EnjoyItems/EnjoyItems.js'
import './Enjoy.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Enjoy() {
    useEffect(() => {
        AOS.init();
    }, [])
    return ( <
        div >
        <
        div className = "enjoy-container px-1 py-24" >
        <
        div className = "grid lg:grid-cols-2 " >
        <
        div data - aos = "fade-right"
        data - aos - duration = "1500"
        className = "enjoy-img-container px-2" >
        <
        img src = "counts-img.jpg"
        className = 'w-full  h-full rounded'
        alt = "" / >
        <
        /div> <
        div data - aos = "fade-left"
        data - aos - duration = "1500"
        className = "enjoy-content-container py-12 px-2" >
        <
        h2 className = "font-bold " > شایسته ترین لذت را به هر حال ارائه می دهد < /h2> <
        p className = 'py-4 text-lg text-gray-600' > خود درد ممکن است درد زیادی باشد، اما دلیل اصلی آن درد است، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود.درد مقصر است < /p> <
        div className = "enjoy-item-container grid gap-8 md:grid-cols-2 pt-10" >
        <
        EnjoyItems / >
        <
        EnjoyItems / >
        <
        EnjoyItems / >
        <
        EnjoyItems / >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    )
}

export default Enjoy