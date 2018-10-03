import React, { Component } from 'react';
import CarouselBro from './CarouselBro';

class HomePage extends Component {
    render() {
        return (
            <div style={{ marginTop: "80px" }}>
                <CarouselBro 
                    legend1={"Oneplus 6"} 
                    image1={"https://image01.oneplus.net/shop/201808/27/874/f59a526e56ea06a1838a0971e17193e3.jpg"} 
                    legend2={"Asus Zenfone 5"} 
                    image2={"https://icdn3.digitaltrends.com/image/asus-zenfone-5-review-8-1200x630-c-ar1.91.jpg"} 
                    legend3={"Razer Phone"} 
                    image3={"https://d4kkpd69xt9l7.cloudfront.net/sys-master/root/hd5/h95/8909767770142/razer-phone-gallery-1500x1000-9.jpg"}
                />
            </div>
        );
    }
}

export default HomePage;