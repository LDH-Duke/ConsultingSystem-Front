import React from "react";
import RecentRequest from "./recent_request";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./recent_request.css";

const MultipleItems = ({buttonAccept, buttonReject}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    // 여기 데이터 받아오면 됨
    const recentRequestData = [
        { name: "김건우" },
        { name: "허관" },
        { name: "임준오" },
        { name: "김강민" },
        { name: "장우영" },
    ];

    return (
        <Slider {...settings}>
        {recentRequestData.map((data, index) => (
            <RecentRequest key={index} name={data.name} buttonAccept={buttonAccept} buttonReject={buttonReject} />
        ))}
        </Slider>
    );
    };

export default MultipleItems;
