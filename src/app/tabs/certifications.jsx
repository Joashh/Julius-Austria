
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Navigation } from 'swiper/modules';
import CertificateList from '@/components/certificatelist';
import Carousel from '@/components/carousel';
import MagicBento from '@/components/MagicBento';

export default function Certifications() {







    return (

        <div className="flex flex-col md:flex-row w-full rounded-md h-full  bg-white/50 dark:bg-gray-800 overflow-auto">
                <h1 className='sm:hidden p-3 text-center font-bold text-md text-black dark:text-blue-300'>Certificates and Awards</h1>
            <div className='self-center sm:py-5 md:py-0 md:w-1/2 '>
                <Carousel />
            </div>

            <div className=' flex  justify-center   md:w-1/2'>
                <div className="flex flex-col justify-center ">
                    <CertificateList />
                </div>
            </div>

        </div>

    );
}
