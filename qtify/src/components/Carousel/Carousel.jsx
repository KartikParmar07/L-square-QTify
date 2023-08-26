import style from './Carousel.module.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';


const Carousel = ({ data, renderCardComponent }) => {
  return (
    <>
      <div className={style.wrapper}>
        <Swiper initialSlide={0} modules={{ Navigation }} slidesPerView={"auto"} spaceBetween={40} allowTouchMove>       
          <CarouselLeftNavigation />
          <CarouselRightNavigation />
          {data?.map((item) => (
            <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
