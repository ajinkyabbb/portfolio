  import HeadingParallax from "../components/HeadingParallax";
  import { useInfoContext } from "../context/infoContext";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { useState } from "react";
  import "swiper/css";
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import { EffectCoverflow, Pagination, Navigation,Autoplay} from "swiper/modules";
  import Slide from "../components/Slide";
  import useTilt from "../hooks/useTilt";

  const Sevices = () => {
    const { webDeveloperSkills } = useInfoContext().aboutMe;
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      setActiveSlideIndex(swiper.activeIndex);
    };
    return (
      <HeadingParallax heading={"Services"}>

  <div className="container my-5">
  
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 400,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          onSlideChange={handleSlideChange}
        >
          {webDeveloperSkills && webDeveloperSkills.map((skill,i)=>{
            
            return <SwiperSlide key={i} style={{maxWidth:"650px",maxHeight: "650px"}}>
              
              <Slide activeKey={i}  activeSlide={activeSlideIndex}  category={skill.category} skills={skill.skills} image={skill.img} />
              
            </SwiperSlide>
  })}
          

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
          
      </HeadingParallax>
    );
  };

  export default Sevices;
