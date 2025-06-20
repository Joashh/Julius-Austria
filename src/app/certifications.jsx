'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Navigation } from 'swiper/modules';

import { useState } from "react";
import Modal from '../components/modal';
import { motion } from 'framer-motion';

export default function Certifications() {

    const [showModal, setShowModal] = useState(false);
    const [selectedImg, setSelectedImg] = useState("");

    const handleImageClick = (imgPath) => {
        setSelectedImg(imgPath);
        setShowModal(true);
    };



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
 


                    <div className="flex flex-col w-full  md:justify-center  ">

                        <div className="flex flex-col gap-y-4 px-7 max-sm:px-0  ">
                            <div className="flex items-start space-x-4  ">
                                <img
                                    className="w-40 h-32 object-cover rounded-lg cursor-pointer lg:w-70 lg:h-auto "
                                    src="images/japan.jpg"
                                    alt="Best Presenter"
                                    onClick={() => handleImageClick("images/cert11.png")}
                                />
                                <div>
                                    <h1 className="font-bold max-sm:text-sm text-black dark:text-white">🏅 Summa Cum Laude (Valedictorian)</h1>
                                    <p className="font-light text-justify pt-1 text-xs2xl:w-90 max-sm:w-full max-sm:text-xs text-gray-700 dark:text-white">
                                        He graduated Summa Cum Laude with a BS in Computer Science and was recognized Class Valedictorian for his academic excellence.
                                    </p>
                                </div>
                            </div>

                            {/* Card 1 */}
                            <div className="flex items-start space-x-4 max-sm:w-full  ">
                                <img
                                    className="w-40 h-32  object-cover rounded-lg cursor-pointer lg:w-70 lg:h-auto"
                                    src="images/researchcongress2.jpg"
                                    alt="Best Presenter"
                                    onClick={() => handleImageClick("images/researchcongress.jpg")}
                                />
                                <div>
                                    <h1 className="font-bold max-sm:text-sm text-black dark:text-white"> 🏅 Best Presenter in Research Congress 2025</h1>
                                    <p className="font-light text-justify pt-1  text-sm 2xl:w-90 max-sm:w-full max-sm:text-xs text-gray-700 dark:text-white">
                                        He received the Best Presenter Award among Computer Science students during his fourth year in college, recognizing his excellent to convey technical ideas.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex items-start space-x-4 ">
                                <img
                                    className="w-40 h-32 object-cover rounded-lg cursor-pointer lg:w-70 lg:h-auto  md:h-auto"
                                    src="images/cert12.png"
                                    alt="Copyrighted App"
                                    onClick={() => handleImageClick("images/cert12.png")}
                                />
                                <div>
                                    <h1 className="font-bold max-sm:text-sm  max-sm:w-full text-black dark:text-white">🏅 Proficiency Award </h1>
                                    <p className="font-light text-justify pt-1  text-sm 2xl:w-90 max-sm:w-full max-sm:text-xs text-gray-700 dark:text-white ">
                                        In the field of Intelligent Systems programs. This honor recognizes his academic excellence and active participation in uplifting the academic and application-based morale of the program.
                                    </p>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>

            </div>

            <Modal showModal={showModal} setShowModal={setShowModal} imgsrc={selectedImg} />

        </div>

    );
}
