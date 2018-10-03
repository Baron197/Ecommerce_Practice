import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class CarouselBro extends Component {
    render() {
        return (
            <div>
                <Carousel showThumbs={false} showIndicators={false} className="container kucing">
                    <div className="merdeka">
                        <img src={this.props.image1} alt="Movie 1" style={{ height: '600px'}}/>
                        <p className="legend">{this.props.legend1}</p>
                    </div>
                    <div className="merdeka">
                        <img src={this.props.image2} alt="Movie 2" style={{ height: '600px'}}/>
                        <p className="legend">{this.props.legend2}</p>
                    </div>
                    <div className="merdeka">
                        <img src={this.props.image3} alt="Movie 3" style={{ height: '600px'}}/>
                        <p className="legend">{this.props.legend3}</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}


export default CarouselBro;