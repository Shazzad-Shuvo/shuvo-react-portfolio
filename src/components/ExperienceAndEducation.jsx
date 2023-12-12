import { FaGraduationCap } from "react-icons/fa";

const ExperienceAndEducation = () => {
    return (
        <div name="experience" className="w-full max-w-[950px] mx-auto text-gray-300 mt-40 p-4 flex flex-col justify-center items-center">
            <div className='text-center'>
                <p className="text-4xl font-bold border-b-4 inline border-pink-600">Experience & Education</p>
                {/* <p className='mt-4 text-2xl font-semibold'>I am adept at</p> */}
                {/* <p className='mt-4 text-2xl'>I am adept at</p> */}
            </div>
            <div className="mt-8">
                <p className=" font-semibold text-lg">
                    I have been learning and practicing projects in MERN stack development from July 2023 to December 2023. I am now confident of my abilities and can adapt to challenges and not back down from new things. I have gained much experience from developing projects and still am continuously learning and growing my skill set.
                </p>
                <div className="mt-8">
                    <div className="flex gap-4">
                        <FaGraduationCap size={30} />
                        <div>
                            <p className="font-semibold">January 2014 - December 2018</p>
                            <h2 className="mt-5 text-2xl">B. Sc in Computer Science & Engineering</h2>
                            <p>University of Chittagong, Bangladesh</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExperienceAndEducation;