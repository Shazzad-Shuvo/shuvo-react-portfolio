import { HiArrowNarrowRight } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen ">

            {/* container */}
            <div className="max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-xl text-pink-600">Hi i'm,</p>
                <h2 className="text-4xl sm:text-6xl font-bold text-slate-50">Muhammad <br /> Shazzadur Rahman</h2>
                <p className="text-4xl sm:text-5xl font-bold text-slate-500">A Full Stack Developer</p>
                <p className="text-slate-400 py-4 max-w-2xl">I am a full-stack (MERN) enthusiast focused on building projects with user's requirements and needs in mind. I love to take on new challenges and dive into new technologies in this ever growing tech world. </p>
                <div className="flex flex-col md:flex-row gap-5">
                    <div>
                        <button className="group flex items-center gap-3 text-white border-2 px-6 py-3 rounded-md hover:bg-pink-600 hover:border-pink-600">
                            View My Projects
                            <span className=" group-hover:rotate-90 duration-[400ms]">
                                <HiArrowNarrowRight className="ml-3" size={22} />
                            </span>
                        </button>
                    </div>
                    <a href="../../public/Muhammad_Shazzadur_Rahman_CV(2).pdf" download>
                        <button className="group flex items-center gap-3 text-white border-2 px-6 py-3 rounded-md hover:bg-pink-600 hover:border-pink-600">
                            Download Resume
                            <span className=" group-hover:scale-125 duration-[400ms]">
                                <FaDownload className="ml-3" size={22} />
                            </span>
                        </button>
                    </a>
                </div>

            </div>

        </div>
    );
};

export default Home;