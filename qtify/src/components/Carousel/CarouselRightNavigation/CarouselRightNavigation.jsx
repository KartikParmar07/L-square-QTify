import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from '../Carousel.module.css'
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg"

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    useEffect(()=>{
      if(swiper){
        swiper.on("slideChange",()=>{
          setIsEnd(swiper.isEnd);
        })
      }
    },[swiper])

  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={()=> swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation