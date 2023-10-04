import React,{useEffect} from 'react';
import AdsItem from './AdsItem/AdsItem'


const Ads = () => {

    let adsDetail = [
        {icon : 'active-text fa fa-newspaper-o' , title : 'تبلیغ سختی است' , par : 'نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند'},
        {icon : 'active-text fa fa-cubes' , title : 'کدام یک از اینهاست' , par : 'کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند'},
        {icon : 'active-text fa fa-lock' , title : 'برنده جایزه نوبل' , par : 'یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند '},
        {icon : 'active-text fa fa-image' , title : 'حقیقت مبارک' , par : 'آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند '},
    ]

   
    return (
        <div>
            <div className="grid gap-8 mx-auto py-8 sm:grid-cols-2">
                <div className="ads-items img-ads">
                    <img  src="features.jpg" class="h-full w-full rounded" alt="" />
                </div>
                <div className="ads-items text-ads items-center content-center">
                    <AdsItem {...adsDetail[0]}/>
                    <AdsItem {...adsDetail[1]}/>
                    <AdsItem {...adsDetail[2]}/>
                    <AdsItem {...adsDetail[3]}/>
                </div>
               
            </div>
        </div>
    );
}

export default Ads;
