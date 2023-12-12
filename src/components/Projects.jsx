import skillSphere from '../assets/skill-sphere.png'
import plateTwoPlate from '../assets/plate_two_plate.png'
import styleSavvy from '../assets/style_savvy.png'
import { FaGlobe, FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div name="projects" className="w-full mt-32 md:mt-0 text-gray-300">
            <div className="max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="text-center pb-8 mb-6">
                    <p className="text-4xl font-bold border-b-4 inline border-pink-600">My Projects</p>
                    <p className='mt-4 text-2xl font-semibold'>Some of my recent projects are highlighted below</p>
                </div>

                <div className="grid grid-cols-1 gap-10">
                    {/* project section */}
                    {/* 1 */}
                    <div className="shadow-lg shadow-cyan-800 rounded-md mx-auto">
                        <section className="body-font">
                            <div className="container px-5 py-5 mx-auto">
                                <div className=" mx-auto flex flex-wrap">
                                    <div className='lg:w-1/2 w-full'>
                                        <img alt="" className="content-div w-full object-cover object-center rounded border " src={skillSphere} />
                                        <p className='mt-4'>Tailwind | React | React Router | DaisyUI | Express | MongoDb | Firebase | Axios | Tanstack Query | React Hook Form | Stripe | React Spinner </p>
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest mb-5">Project Title</h2>
                                        <h1 className="text-3xl title-font font-medium mb-1">Skill Sphere: An online learning and teaching platform</h1>
                                        <p className="pb-5 border-b-2 border-gray-200 mb-5">This website provides great a learning platform for students. Students can register for courses upon signing up in the platform, they can directly pay for courses. Becoming a teacher is also a feature here. Admin can moderate and modify teacher and student activities.
                                            <br />
                                            For detailed demo please visit project site and github repository ...</p>
                                        <div className="flex gap-4">
                                            <a href="https://skill-sphere.web.app">
                                                <div className='flex items-center gap-3 group hover:text-pink-600'>
                                                    <span className=" group-hover:scale-125 duration-[400ms]">
                                                        <FaGlobe />
                                                    </span>

                                                    <p>Live Site</p>
                                                </div>
                                            </a>
                                            |
                                            <a href="https://github.com/Shazzad-Shuvo/skill-sphere-client-a12">
                                                <div className='flex items-center gap-3 group hover:text-pink-600'>
                                                    <span className=" group-hover:scale-125 duration-[400ms]">
                                                        <FaGithub />
                                                    </span>
                                                    <p>Client Side</p>
                                                </div>
                                            </a>
                                            |
                                            <a href="https://github.com/Shazzad-Shuvo/skill-sphere-server-a12">
                                                <div className='flex items-center gap-3 group hover:text-pink-600'>
                                                    <span className=" group-hover:scale-125 duration-[400ms]">
                                                        <FaGithub />
                                                    </span>
                                                    <p>Server Side</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* 2 */}
                    <div className="shadow-lg shadow-cyan-800 rounded-md mx-auto">
                        <section className="body-font">
                            <div className="container px-5 py-5 mx-auto">
                                <div className=" mx-auto flex flex-wrap">
                                    <div className='lg:w-1/2 w-full'>
                                        <img alt="" className="content-div w-full object-cover object-center rounded border " src={plateTwoPlate} />
                                        <p className='mt-4'>Tailwind | React | React Router | DaisyUI | Express | MongoDb | Firebase | Axios | Swiperjs | React Marquee</p>
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest mb-5">Project Title</h2>
                                        <h1 className="text-3xl title-font font-medium mb-1">Plate-2-Plate: A community food sharing site for the people in need</h1>
                                        <p className="pb-5 border-b-2 border-gray-200 mb-5">Plate-2-Plate serves the purpose of sharing food with those who cannot afford so. People having excessive food or who are willing to donate will be able to enlist foods for donation. People who are in need or who are willing to distribute to those in need can request for food.
                                            <br />
                                            For detailed demo please visit project site and github repository ...</p>
                                        <div className="flex gap-4">
                                            <a href="https://plate-two-plate.web.app">
                                                <div className='flex items-center gap-3 group hover:text-pink-600'>
                                                    <span className=" group-hover:scale-125 duration-[400ms]">
                                                        <FaGlobe />
                                                    </span>
                                                    <p>Live Site</p>
                                                </div>
                                            </a>
                                            |
                                            <a href="https://github.com/Shazzad-Shuvo/plate-two-plate-client-a11">
                                                <div className='flex items-center gap-3 group hover:text-pink-600'>
                                                    <span className=" group-hover:scale-125 duration-[400ms]">
                                                        <FaGithub />
                                                    </span>
                                                    <p>Client Side</p>
                                                </div>
                                            </a>
                                            |
                                            <a href="https://github.com/Shazzad-Shuvo/plate-two-plate-server-a11">
                                                <div className='flex items-center gap-3 group hover:text-pink-600'>
                                                    <span className=" group-hover:scale-125 duration-[400ms]">
                                                        <FaGithub />
                                                    </span>
                                                    <p>Server Side</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className=" gap-4 shadow-lg shadow-cyan-800 rounded-md mx-auto">
                        {/* 3 */}
                        <section className="body-font">
                            <div className="container px-5 py-5 mx-auto">
                                <div className=" mx-auto flex flex-wrap">
                                    <div className='lg:w-1/2 w-full'>
                                        <img alt="" className="content-div w-full object-cover object-center rounded border " src={styleSavvy} />
                                        <p className='mt-4'>Tailwind | React | React Router | DaisyUI | Express | MongoDb | Firebase</p>
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest mb-5">Project Title</h2>
                                        <h1 className="text-3xl title-font font-medium mb-1">Style Savvy: A fashion brand product selling website</h1>
                                        <p className="pb-5 border-b-2 border-gray-200 mb-5">Style Savvy brings the service of ordering luxury fashion items from home. User can see products by brand, see product detais upon signing up/registering and add product to cart. Seller can enlist, edit & delete product.
                                            <br />
                                            Please visit website and github repository for detailed demo/information ...
                                        </p>
                                        <div className="flex gap-4">
                                            <a href="https://style-savvy-600b6.web.app">
                                                <div className='flex items-center gap-3 group hover:text-pink-600'>
                                                    <span className=" group-hover:scale-125 duration-[400ms]">
                                                        <FaGlobe />
                                                    </span>

                                                    <p>Live Site</p>
                                                </div>
                                            </a>
                                            |
                                            <a href="https://github.com/Shazzad-Shuvo/style-savvy-client-a10">
                                                <div className='flex items-center gap-3 group hover:text-pink-600'>
                                                    <span className=" group-hover:scale-125 duration-[400ms]">
                                                        <FaGithub />
                                                    </span>
                                                    <p>Client Side</p>
                                                </div>
                                            </a>
                                            |
                                            <a href="https://github.com/Shazzad-Shuvo/style-savvy-server-a10">
                                                <div className='flex items-center gap-3 group hover:text-pink-600'>
                                                    <span className=" group-hover:scale-125 duration-[400ms]">
                                                        <FaGithub />
                                                    </span>
                                                    <p>Server Side</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;