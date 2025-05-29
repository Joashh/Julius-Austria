'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
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

        <div className="w-full bg-gray-800 rounded-md max-h-full max-sm:bg-transparent  ">

            <div className="bg-gray-800 p-4 space-y-2 h-full max-sm:bg-transparent max-sm:w-full max-sm:p-0 ">
                <div className='flex gap-2 2xl:h-full 2xl:px-4 max-sm:flex-col  max-md:flex-col  max-sm:w-full '>
                    <div className="w-225 2xl:w-1/2 sm:w-full  max-sm:w-full max-sm:h-auto  ">

                        <h1 className="font-bold text-blue-300 text-2xl pb-3 pl-1  2xl:pb-5 max-sm:text-sm max-sm:text-center sm:text-center md:text-left ">ACKNOWLEDGEMENTS & CERTIFICATIONS</h1>

                        <div className="relative 2xl:h-6/7 max-sm:w-full sm:w-full  max-sm:h-auto ">
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: '.custom-swiper-button-next',
                                    prevEl: '.custom-swiper-button-prev',
                                }}
                                spaceBetween={30}
                                slidesPerView={1}
                                className="default-carousel "
                            >
                                
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: '.custom-swiper-button-next',
                                        prevEl: '.custom-swiper-button-prev',
                                    }}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    className="default-carousel"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                        <SwiperSlide key={num}>
                                            <div className="bg-gray-900 rounded-2xl h-[calc(90vh-200px)] w-full flex justify-center items-center max-sm:h-50">
                                                <img
                                                    src={`images/cert${num}.png`}
                                                    alt={`certificate ${num}`}
                                                    className="object-contain max-h-full max-w-full"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </Swiper>

                            <div className="absolute inset-0 flex justify-between items-center px-4 z-10 ">
                                <button className="custom-swiper-button-prev border-indigo-600 bg-blue-950 group p-3  w-12 h-12 rounded-full hover:bg-blue-650 transition-all max-sm:w-7 max-sm:h-7 max-sm:p-0 max-sm:px-0.1 ">
                                    <svg className="h-5 w-5 text-white-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                        <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button className="custom-swiper-button-next group p-3 border-indigo-600 px-4 bg-blue-950 w-12 h-12 rounded-full hover:bg-blue-950 transition-all max-sm:w-7 max-sm:h-7 max-sm:p-0 max-sm:px-1">
                                    <svg className="h-5 w-5 text-white-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-auto pt-8 pl-4  2xl:w-full 2xl:pt-20 2xl:pl-13 max-sm:w-full max-sm:pl-0 ">
                        <div className="space-y-4 px-7 max-sm:px-0  ">
                            {/* Card 1 */}
                            <div className="flex items-start space-x-4 max-sm:w-full  ">
                                <img
                                    className="w-40 h-32 object-cover rounded-lg cursor-pointer lg:w-70 lg:h-auto"
                                    src="images/placeholder.png"
                                    alt="Best Presenter"
                                    onClick={() => handleImageClick("images/placeholder.png")}
                                />
                                <div>
                                    <h1 className="font-bold max-sm:text-sm"> 🏅 Best Presenter in Research Congress 2025</h1>
                                    <p className="font-light text-justify pt-1 w-60 text-sm 2xl:w-90 max-sm:w-full max-sm:text-xs">
                                        [Certificate Not Yet Released]
                                        I have received the Best Presenter award among the Computer Science students who participated during my 4th year college.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="flex items-start space-x-4 ">
                                <img
                                    className="w-40 h-32 object-cover rounded-lg cursor-pointer lg:w-70 lg:h-auto  md:h-auto"
                                    src="images/cert7.png"
                                    alt="Copyrighted App"
                                    onClick={() => handleImageClick("images/cert7.png")}
                                />
                                <div>
                                    <h1 className="font-bold max-sm:text-sm  max-sm:w-full">🏅 First Copyrighted Mobile Application 2024</h1>
                                    <p className="font-light text-justify pt-1 w-60 text-sm 2xl:w-90 max-sm:w-full max-sm:text-xs ">
                                        In their third year of college, User's group developed a mobile app for kids that measures their abilities and skills. The app was patented or copyrighted.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 (duplicate of Card 1) */}
                            <div className="flex items-start space-x-4 ">
                                <img
                                    className="w-40 h-32 object-cover rounded-lg cursor-pointer lg:w-70 lg:h-auto "
                                    src="images/placeholder.png"
                                    alt="Best Presenter"
                                    onClick={() => handleImageClick("images/placeholder.png")}
                                />
                                <div>
                                    <h1 className="font-bold max-sm:text-sm">🏅 Latin Honor College Degree</h1>
                                    <p className="font-light text-justify pt-1 w-60 text-sm 2xl:w-90 max-sm:w-full max-sm:text-xs">
                                        [No Graduation Details Yet]
                                        Julius received the Best Presenter award among the Computer Science students who participated during college days.
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
