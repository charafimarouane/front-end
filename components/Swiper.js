import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import Link from 'next/link';
export default ({product}) => {
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

      {product.map((pro)=>(
        <SwiperSlide  key={pro._id}>
        <div className="flex bg-background h-[50vh] ">
              <div className="flex flex-col justify-center ml-[150px]">
                  <h5 className="text-red-600 text-[18px]">Big Sale</h5>
                  <h1 className="text-[54px] tracking-wider">{pro.title}</h1>
                  <Link href={'/product/'+pro._id} className="flex border border-black w-fit px-4 py-2 rounded-md font-semibold ">Shop now 
                      <span className="mx-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                          </svg>
                      </span>
                  </Link>
              </div>
              <div className="m-auto w-[200px]">
                  <img src={pro.images[0]} alt=""/>
              </div>
          </div> 
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


