import { ShareIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';
export default function Showcase() {
    return (

        <div className="bg-gray-800  p-4 space-y-6 max-h-full min-h-0 flex flex-col flex-1 overflow-y-auto max-sm:bg-transparent  max-sm:w-full  max-sm:py-0 max-sm:px-0 max-sm:space-y-3">
            {/* Item 1 */}
            <h1 className='text-sm  text-center text-blue-300 font-bold sm:hidden'> ACADEMIC BACKGROUND</h1>
            <div id="ITEM 1" className='max-sm:w-full '>
                <div className="flex items-center gap-4 max-sm:flex-col max-sm:w-full max-md:flex-col sm:flex-row ">
                    {/* Image on the right */}
                    <div>
                        <img
                            className="rounded-lg min-w-100 w-100 h-100 object-cover max-sm:min-w-0 max-sm:w-full max-sm:h-auto "
                            src="/images/cpaf3.jpg"
                            alt="intern"
                        />
                    </div>
                    {/* Description on the left */}
                    <div>
                        <div className="text-2xl font-bold text-sky-500 pt-1 pl-4 max-sm:max-w-full max-sm:px-0 ">
                            College of Public Affairs and Development
                        </div>
                        <div className="mt-1 font-bold text-white text-xl pl-4 max-sm:w-full max-sm:px-0">
                            <a href="#" className="hover:underline ">Internship</a>
                        </div>
                        <div className="mt-2 text-s text-gray-300 text-justify p-4 max-sm:w-full max-sm:text-sm max-sm:px-0 ">
                            During my internship, I had the opportunity to apply the knowledge and skills I gained in the classroom to real-world scenarios. I was immersed in a dynamic work environment where I collaborated with professionals, tackled meaningful projects, and gained hands-on experience in my field.

                            This experience not only sharpened my technical abilities but also helped me develop soft skills such as communication, time management, and problem-solving. I learned how to work as part of a team, adapt to new challenges, and take initiative in contributing to tasks that made an impact.

                            Overall, my internship was a transformative part of my academic journey, providing valuable insights into industry practices and solidifying my passion for the career path I’ve chosen.
                        </div>
                        <div className="pl-4 flex gap-4 max-sm:text-sm max-sm:px-0">
                            <button className="btn-primary" onClick={() => window.open( 'https://cpaf.uplb.edu.ph/cpaf-updates/cpaf-interns-wrap-up-internship-with-presentation-of-outputs/')}>Documentation</button>
                            <button> <EllipsisHorizontalIcon className="h-8 w-8 text-white cursor-pointer"> </EllipsisHorizontalIcon> </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Item 2 */}
            <div id="ITEM 2" className='max-sm:w-full'>
                <div className="flex items-center gap-4 max-sm:flex-col max-sm:w-full max-md:flex-col sm:flex-row">
                    {/* Image on the right */}
                    <img
                        className="rounded-lg w-100 min-w-100 h-100 object-cover max-sm:h-auto max-sm:max-w-full max-sm:min-w-0  "
                        src="/images/lspu.png"
                        alt="school"
                    />

                    {/* Description on the left */}
                    <div>
                        <div className="text-2xl font-bold text-sky-500 pt-1 pl-4  max-sm:h-auto max-sm:max-w-full max-sm:px-0 ">
                            Laguna State Polytechnic University
                        </div>
                        <div className="mt-1 font-bold text-white text-xl pl-4 max-sm:px-0">
                            <a href="#" className="hover:underline">Computer Science - Major in Intelligent Systems</a>
                        </div>
                        <div className="mt-2 text-s text-gray-300 text-justify p-4 max-sm:text-sm max-sm:w-full max-sm:px-0">
                            Pursuing a Bachelor's degree in Computer Science, majoring in Intelligent Systems, has been an intellectually stimulating and formative experience. This academic journey allowed me to build a solid foundation in computing while diving deeper into the principles of machine learning, artificial intelligence, and data-driven systems. Through a combination of theoretical learning and hands-on projects, I developed problem-solving skills, critical thinking, and practical expertise that prepare me for real-world challenges in both research and industry.                                </div>
                        <div className="pl-4 flex gap-4 max-sm:text-sm max-sm:px-0">
                            <button className="btn-primary">Documentation</button>
                            <button > <EllipsisHorizontalIcon className="h-8 w-8 text-white cursor-pointer"> </EllipsisHorizontalIcon> </button>
                        </div>

                    </div>


                </div>

            </div>



            {/* Item 2 */}
            <div id="ITEM 2" className='max-sm:w-full '>
               
                <div className="flex items-center gap-4 max-sm:flex-col max-sm:w-full max-md:flex-col sm:flex-row">
                    {/* Image on the right */}
                    <img
                        className="rounded-lg w-100 min-w-100 h-100 object-cover max-sm:h-auto max-sm:max-w-full max-sm:min-w-0  "
                        src="/images/shs2.png"
                        alt="school"
                    />

                    {/* Description on the left */}
                    <div>
                        <div className="text-2xl font-bold text-sky-500 pt-1 pl-4 max-sm:px-0">
                            Los Banos Senior High School
                        </div>
                        <div className="mt-1 font-bold text-white text-xl pl-4 max-sm:px-0">
                            <a href="#" className="hover:underline">STEM Track</a>
                        </div>
                        <div className="mt-2 text-s text-gray-300 text-justify p-4 max-sm:text-sm max-sm:w-full max-sm:px-0">
                            Pursuing the STEM (Science, Technology, Engineering, and Mathematics) strand in Senior High School provided a strong academic foundation that prepared me for the challenges of a Computer Science degree. The STEM curriculum sharpened my analytical thinking, mathematical reasoning, and scientific inquiry, which are essential in understanding computing systems and intelligent technologies. Through subjects like General Mathematics, Physics, and Computer Programming, I cultivated a disciplined approach to problem-solving and a curiosity for how technology shapes the world. My experiences in STEM helped me build the mindset and skills necessary for innovation and success in the tech field.

                        </div>
                        <div className="pl-4 flex gap-4 max-sm:text-sm max-sm:px-0">
                            <button className="btn-primary">Documentation</button>
                            <button > <EllipsisHorizontalIcon className="h-8 w-8 text-white cursor-pointer"> </EllipsisHorizontalIcon> </button>
                        </div>

                    </div>


                </div>

            </div>
        </div>

    );
}
