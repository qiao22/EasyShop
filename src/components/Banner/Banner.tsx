import React from 'react'
import './Banner.scss'

const Banner:React.FC = (props) => {
    return (
        <div className="banner">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">slider1</div>
                    <div className="swiper-slide">slider2</div>
                    <div className="swiper-slide">slider3</div>
                </div>
            </div>
        </div>
    )
}

export default Banner