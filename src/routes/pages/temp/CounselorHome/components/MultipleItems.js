import React from "react";
import RecentRequest from "./recent_request";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./recent_request.css";

const MultipleItems = ({buttonAccept, buttonReject, recentRequestData}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    

    return (
        <Slider {...settings}>
        {recentRequestData.map((data, index) => (
            <RecentRequest key={index} name={data.name} buttonAccept={buttonAccept} buttonReject={buttonReject} />
        ))}
        </Slider>
    );
    };

export default MultipleItems;
