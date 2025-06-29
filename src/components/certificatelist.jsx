'use client';
import { useState } from "react";
import Modal from "./modal";

export default function CertificateList()
{

     
    const [showModal, setShowModal] = useState(false);
    const [selectedImg, setSelectedImg] = useState("");

    const handleImageClick = (imgPath) => {
        setSelectedImg(imgPath);
        setShowModal(true);
    };
    

    return(
        <>
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
                                        I graduated Summa Cum Laude with a BS in Computer Science and was recognized Class Valedictorian for my academic excellence.
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
                                        I have received the Best Presenter Award among Computer Science students during his fourth year in college, recognizing my excellent to convey technical ideas.
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
                                        In the field of Intelligent Systems programs. This honor recognizes my academic excellence and active participation in uplifting the academic and application-based morale of the program.
                                    </p>
                                </div>
                            </div>



                        </div>

                    </div>
                    <Modal showModal={showModal} setShowModal={setShowModal}  imgsrc={selectedImg} />
                    </>
    )
}