import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import phone from "../IMG/phone.png"
import 'swiper/css';
import { Autoplay } from 'swiper';
export default () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={1500}
      slidesPerView={1}
      loop={true}
      autoplay={{'delay':3500}}
      navigation={true}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="flex bg-background h-[50vh] ">
            <div className="flex flex-col justify-center ml-[150px]">
                <h5 className="text-red-600 text-[18px]">Big Sale</h5>
                <h1 className="text-[54px] tracking-wider">Summer Outfits</h1>
                <button className="flex border border-black w-fit px-4 py-2 rounded-md font-semibold ">Shop now 
                    <span className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </span>
                </button>
            </div>
            <div className="m-auto">
                <Image src={phone} alt=""/>
            </div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
      Slide 2 
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};


