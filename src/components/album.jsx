'use client';
import Image from 'next/image';
import { useState } from "react";
import Modal from './modal';
import { AiOutlineDownload, AiOutlineShareAlt } from "react-icons/ai";

export default function Album() {

    const [showModal, setShowModal] = useState(false);
    const [selectedImg, setSelectedImg] = useState("");


    const handleImageClick = (imgPath) => {
        setSelectedImg(imgPath);
        setShowModal(true);
    };

    const certificates = [
        {
            src: '/images/cert13.png',
            title: 'Certificate of Recognition - Summa Cum Laude',
            description: 'Honored for achieving the highest academic distinction upon graduation.'
        },
        {
            src: '/images/cert14.png',
            title: 'UNIFAST Excellence Award',
            description: 'Recognized by UNIFAST for achieving the highest GPA among graduate students.'
        },
        {
            src: '/images/cert12.png',
            title: 'Certificate of Proficiency Award',
            description: 'Awarded for demonstrating high proficiency in specific technical skills, validated through exams and practical assessments.'
        },
        {
            src: '/images/cert1.png',
            title: 'Adopt and Adapt: Navigating AI Integration in Schools and Universities',
            description: 'Attended a workshop on integrating AI tools and technologies in educational institutions, focusing on practical strategies for teachers and administrators.'
        },
        {
            src: '/images/cert2.png',
            title: 'Crossroads Conversations: Implementation of Mexican Merit System',
            description: 'Participated in discussions on implementing merit-based recognition systems in educational settings, emphasizing fairness and motivation.'
        },
        {
            src: '/images/cert3.png',
            title: 'Connecting Minds for AANR Progress: Building a Dynamic Academic and Research Network in the Philippines',
            description: 'Joined a seminar focused on strengthening academic and research collaboration networks across universities in the Philippines.'
        },
        {
            src: '/images/cert4.png',
            title: 'UPLB Graduate School Masterclass on Generative AI in the University',
            description: 'Completed an advanced masterclass seminar on Generative AI applications in research and academia, including practical AI model demonstrations.'
        },
        {
            src: '/images/cert5.png',
            title: 'Virtual Webinar on Laguna State Polytechnic University',
            description: 'Served as a speaker and conducted a session on Huffman Coding, teaching students the fundamentals of data compression algorithms.'
        },
        {
            src: '/images/cert6.png',
            title: 'Pinas Forward Woman Can VI Leaders',
            description: 'Participated in a leadership program empowering women to lead innovative projects and community initiatives.'
        },
        {
            src: '/images/cert7.png',
            title: 'First Copyright Certificate for E-Learning System in Mobile Phone',
            description: 'Received official copyright recognition for developing a mobile-based e-learning system designed for student accessibility.'
        },
        {
            src: '/images/cert8.png',
            title: 'Joint UPLB-Kyoto University Workshop',
            description: 'Attended an international workshop on collaborative research, knowledge sharing, and best practices in academic partnerships.'
        },
        {
            src: '/images/cert9.png',
            title: 'Crossroads Conversations: Implementation of Mexican Merit System',
            description: 'Contributed to workshops on merit-based systems for education, focusing on practical implementation strategies and policy recommendations.'
        },
        {
            src: '/images/cert10.png',
            title: 'Certificate for Successfully Completing the 500 hours On-the-Job Training',
            description: 'Acknowledged for completing 500 hours of practical on-the-job training, gaining hands-on experience in real-world work environments.'
        },
        {
            src: '/images/cert11.png',
            title: 'Notice of Latin Honor',
            description: 'Received formal recognition for academic excellence and graduating with Latin honors.'
        },

        {
            src: '/images/cert15.png',
            title: 'Certificate for Attending Making Konektadong Pinoy a Reality',
            description: 'Participated in a workshop aimed at developing digital tools and strategies for strengthening community connectivity in the Philippines.'
        },
        {
            src: '/images/cert16.png',
            title: 'Appreciation for Participating in Localizing Sustainability: Reflection and Practices from Japan and the Philippines',
            description: 'Acknowledged for active participation in a sustainability program exploring practices and solutions from Japan and the Philippines.'
        },
    ];


    return (
        <div className=" w-full min-h-screen flex flex-col items-center justify-center  gap-4 pb-2">


            <div className='shadow-md rounded-xl bg-white dark:bg-gray-800 flex flex-col justify-center p-4 w-full gap-2 md:hidden'>
                <h1 className="text-center text-xl md:text-2xl font-bold  text-gray-800 dark:text-blue-300 font-sans">
                    Certificates and Awards
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-center text-sm md:text-base">
                    These are the certificates I’ve received throughout my journey —
                    including seminars, recognitions, acknowledgements, and awards.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full ">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden hover:scale-102 transition-transform duration-300 relative flex flex-col"
                        
                    >
                        {/* Ribbon */}
                        {(cert.title.includes("Summa Cum Laude") ||
                            cert.title.includes("Excellence Award") ||
                            cert.title.includes("Proficiency Award")) && (
                                <div className="absolute top-0 right-0 overflow-visible w-32 h-32 pointer-events-none z-20">
                                    <div className="absolute top-4 right-[-45px] w-40 h-7 bg-yellow-500 text-white font-medium text-xs font-sans text-center rotate-45 shadow-lg flex items-center justify-center">
                                        Premium
                                    </div>
                                </div>
                            )}

                        <div className="w-full h-60 relative z-10 cursor-pointer" onClick={() => handleImageClick(cert.src)}>
                            <Image
                                src={cert.src}
                                alt={cert.title}
                                fill
                                className="object-contain p-4 relative z-10"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-col justify-between flex-1">
                            {/* Title + description */}
                            <div className="flex flex-col">
                                <h3 className="text-center font-bold font-sans text-gray-800 dark:text-gray-100 line-clamp-2">
                                    {cert.title}
                                </h3>
                                <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-1">
                                    {cert.description}
                                </p>
                            </div>

                            {/* Download icon always at bottom */}
                            <div className="mt-1 flex justify-start gap-1">
                                {/* Download Icon */}
                                <a
                                    href={cert.src}
                                    download
                                    className=" text-gray-500 rounded-full  transition-colors flex items-center justify-center"
                                    title="Download"
                                >
                                    <AiOutlineDownload className="w-5 h-5" />
                                </a>

                                {/* Share Icon */}
                                <button
                                    onClick={() => {
                                        if (navigator.clipboard) {
                                            navigator.clipboard.writeText(cert.title);
                                            alert("Caption copied!");
                                        } else {
                                            // fallback: use prompt to copy manually
                                            prompt("Copy this text:", cert.title);
                                        }
                                    }}
                                    className=" text-gray-500 rounded-full transition-colors flex items-center justify-center"
                                    title="Copy Caption"
                                >
                                    <AiOutlineShareAlt className="w-5 h-5" />
                                </button>

                            </div>

                        </div>

                    </div>
                ))}
            </div>


            <Modal showModal={showModal} setShowModal={setShowModal} imgsrc={selectedImg} />

        </div>
    );
}
