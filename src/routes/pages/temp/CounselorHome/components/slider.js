import React, {Component} from "react";
import RecentRequest from "./recent_request";
import Slider from "react-slick";

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
    return (
        <div>
            <Slider {...settings}>
                <RecentRequest name = {"김건우"}/>
            </Slider>
        </div>
    );
    }
}
