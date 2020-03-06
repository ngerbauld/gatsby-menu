import React from 'react';
import ReactDOM from "react-dom"
import { Link } from 'gatsby'
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import SwiperStyles from './swiper.module.scss'
import Sports from '../../assets/images/sports.jpg'
import Daily from '../../assets/images/daily.jpg'
import More from '../../assets/images/more.jpg'

const MutipleSlidesPerView = () => {

  const params = {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  }

  return (
    <Swiper {...params}>
      <span className={SwiperStyles.container}>
        <Link to="/sports"><img src={More}/></Link>
        <div className={SwiperStyles.title}>Hiking</div>
      </span>
      <span className={SwiperStyles.container}>
        <Link to="/sports"><img src={Daily}/></Link>
        <div className={SwiperStyles.title}>Soccer</div>
      </span>
      <span className={SwiperStyles.container}>
        <Link to="/sports"><img src={More}/></Link>
        <div className={SwiperStyles.title}>Running</div>
      </span>
       <span className={SwiperStyles.container}>
        <Link to="/sports"><img src={Daily}/></Link>
        <div className={SwiperStyles.title}>Hockey</div>
      </span>
      <span className={SwiperStyles.container}>
       <Link to="/sports"><img src={More} /></Link>
        <div className={SwiperStyles.title}>Tracking</div>
      </span>
    </Swiper>
   )
};

export default MutipleSlidesPerView;



