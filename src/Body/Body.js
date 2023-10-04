import React from 'react';
import About from './About/About';
import Sponsor from './Sponsor/Sponsor.js'
import Ads from './ads/ads.js'
import Services from './Services/Services'
import Cta from './Cta/Cta.js'
import Portfolio from './Portfolio/Portfolio.js'
import Enjoy from './Enjoy/Enjoy.js'
import Comment from './Comment/Comment.js'
import Team from './Team/Team.js'
import Call from './Call/Call.js'

const Body = () => {
    return (
        <div dir='rtl'>
            <About />
            <Sponsor />
            <Ads/>
            <Services/>
            <Cta />
            <Portfolio/>
            <Enjoy />
            <Comment />
            <Team />
            <Call/>
        </div>
    );
}

export default Body;
