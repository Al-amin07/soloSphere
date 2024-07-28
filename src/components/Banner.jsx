// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/images/carousel1.jpg'
import img2 from '../assets/images/carousel2.jpg'
import img3 from '../assets/images/carousel3.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


const Banner = () => {
    return (
        <div>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[600px] rounded-md"
      >
        <SwiperSlide>
            <Slide img={img1} text={'Bulid You Web Development Project By Experts'} />
        </SwiperSlide>
        <SwiperSlide>
        <Slide img={img2} text={'Bulid You Graphics Design Project By Experts'} />
        </SwiperSlide>
        <SwiperSlide>
        <Slide img={img3} text={'Bulid You Digital Marketing Project By Experts'} />
        </SwiperSlide>
        
      
      </Swiper>
            
        </div>
    );
};

export default Banner;