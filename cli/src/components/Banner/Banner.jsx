//import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'

import './Banner.css'

export default function Banner() {
  const banners = [banner1, banner2]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <>
      <div className="mt-5">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div
              key={index}
              className="flex  justify-center w-full overflow-hidden rounded-3xl "
            >
              <img src={banner} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
