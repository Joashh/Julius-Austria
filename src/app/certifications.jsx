
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Navigation } from 'swiper/modules';
import CertificateList from '@/components/certificatelist';


export default function Certifications() {

   

    
   


    return (

        <div className="w-full bg-transparent rounded-md max-h-full  ">

            <div className="md:bg-white/50 bg-transparent   dark:md:bg-gray-800 p-4 space-y-2 h-full max-sm:bg-transparent max-sm:w-full max-sm:p-0 ">
                <div className='flex gap-2 2xl:h-full 2xl:px-4  flex-col md:flex-row max-sm:w-full '>
                    <div className="md:w-150 lg:w-225 2xl:w-1/2   w-full max-sm:h-auto pb-5  ">

                        <h1 className="font-bold text-blue-900 dark:text-blue-300 text-2xl pb-3 pl-1  2xl:pb-5 max-sm:text-sm max-sm:text-center sm:text-center md:text-left ">ACKNOWLEDGEMENTS & CERTIFICATIONS</h1>

                        <div className="relative 2xl:h-6/7 max-sm:w-full sm:w-full  max-sm:h-auto  ">


                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.custom-swiper-button-next',
                                    prevEl: '.custom-swiper-button-prev',
                                }}
                                spaceBetween={30}
                                slidesPerView={1}
                                className="default-carousel"
                                touchRatio={1}
                                threshold={10}
                                allowTouchMove={true}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                                    <SwiperSlide key={num}>
                                        <div className="bg-gray-300 dark:bg-gray-950 rounded-2xl h-[calc(90vh-200px)] w-full flex justify-center items-center max-sm:h-50">
                                            <img
                                                src={`images/cert${num}.png`}
                                                alt={`certificate ${num}`}
                                                className="object-contain max-h-full max-w-full"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>



                            <div className="absolute inset-0 flex justify-between items-center px-4 z-10  ">
                                <button className="flex flex-col justify-center custom-swiper-button-prev border-indigo-600 bg-gray-400 dark:bg-blue-950 group  w-7 h-7 md:w-15 md:h-15 rounded-full hover:bg-gray-500 dark:hover:bg-blue-950 transition-all  ">
                                    <AiOutlineArrowLeft className='self-center' />
                                </button>
                                <button className="flex flex-col justify-center   custom-swiper-button-next group  border-indigo-600  bg-gray-400 dark:bg-blue-950 w-7 h-7 md:w-15 md:h-15 rounded-full hover:bg-gray-500 dark:hover:bg-blue-950 transition-all ">
                                    <AiOutlineArrowRight className='self-center' />
                                </button>
                            </div>
                        </div>
                    </div>
 
                                <CertificateList/>

                   
                </div>

            </div>

            

        </div>

    );
}
