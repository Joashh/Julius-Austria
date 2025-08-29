'use client';
import { useState } from "react";
import Modal from "./modal";
import { MdOutlineMoreHoriz } from "react-icons/md";

export default function CertificateList() {


    const [showModal, setShowModal] = useState(false);
    const [selectedImg, setSelectedImg] = useState("");
   

    const handleImageClick = (imgPath) => {
        setSelectedImg(imgPath);
        setShowModal(true);
    };

   


    const awards = [
        {
            image_url: 'images/cert13.png',
            alt: 'Summa Cum Laude Certificate',
            title: "Summa Cum Laude (Valedictorian)",
            date: "June 24, 2025 - Laguna State Polytechnic University Los Banos Campus",
            desc: " I graduated Summa Cum Laude with a BS in Computer Science and was recognized as Class Valedictorian for my outstanding academic performance, dedication, and leadership throughout my college journey."
        },

        {
            image_url: 'images/cert14.png',
            alt: 'UNIFAST Excellence Award',
            title: "UNIFAST Excellence Awardee 2025",
            date: "June 24, 2025 - Office of the President Commission on Higher Education",
            desc: " I have received the UNIFAST Execellence Award for having the highest General Weighted Average (GWA) during our graduation ceremony. It’s a prestigious recognition that highlights not only academic achievement but also the student discipline and excellence while being a UniFAST grantee."
        },

        {
            image_url: 'images/cert12.png',
            alt: 'Best Presenter',
            title: "Proficiency Award",
            date: "June 24, 2025 - Laguna State Polytechnic University Los Banos Campus",
            desc: "In the field of Intelligent Systems programs. This honor recognizes my academic excellence and active participation in uplifting the academic and application-based morale of the program."
        },

    ]


    return (
        <>
            <div className="flex flex-col  sm:flex-row md:flex-col w-full  justify-center p-5 sm:h-full ">
               
                <div className="flex flex-col sm:flex-col md:flex-col sm:gap-x-4  gap-3 md:w-full  h-full md:gap-0">

                    {awards.map((items, index) => (
                        <div key={index} className="w-full sm:flex sm:flex-row md:flex-row sm:justify-center md:justify-left sm:h-full ">

                            <img
                                className=" w-35 h-25 md:w-50 md:h-40 lg:w-65 lg:h-50 float-left mr-3 mb-2  rounded-md object-cover sm:self-center md:float-left md:mr-3 md:mb-0 "
                                src={items.image_url}
                                alt={items.alt}
                                onClick={() => handleImageClick(items.image_url)}
                            />

                            <div className=" md:h-40 md:flex md:flex-col md:self-center  ">
                                <h1 className="font-bold text-sm sm:text-left md:text-left lg:text-xl md:text-lg ">
                                    🏅 {items.title}
                                </h1>
                                <p className="font-light italic text-justify  sm:text-left  md:pb-1 md:text-left md:dark:text-gray-300 pt-1 text-xs md:text-sm text-gray-700 dark:text-gray-500">
                                    {items.date}
                                </p>
                                <p className="font-light text-justify pt-1 md:text-sm lg:text-lg sm:text-justify text-xs text-gray-700 dark:text-white md:line-clamp-3 md:hover:line-clamp-none carousel-text">
                                {items.desc}
                            </p>
                            
                            </div>


                        </div>

                    ))}

                </div>

            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} imgsrc={selectedImg} />
        </>
    )
}