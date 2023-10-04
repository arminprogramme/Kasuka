import React,{useEffect} from 'react';
import AdsItem from './AdsItem/AdsItem'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ads = () => {

    let adsDetail = [
        {icon : 'active-text fa fa-newspaper-o' , title : '' , par : ''}
        {icon : 'active-text fa fa-cubes' , title : '' , par : ''}
        {icon : 'active-text fa fa-image' , title : '' , par : ''}
        {icon : 'active-text fa fa-' , title : '' , par : ''}
    ]

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className="grid gap-8 mx-auto py-8 sm:grid-cols-2">
                <div className="ads-items img-ads">
                    <img data-aos="fade-left" data-aos-duration="1500" src="features.jpg" class="h-full w-full rounded" alt="" />
                </div>
                <div className="ads-items text-ads">
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                    <AdsItem/>
                </div>
               
            </div>
        </div>
    );
}

export default Ads;
