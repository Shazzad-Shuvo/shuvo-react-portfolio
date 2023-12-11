import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {

    const [mobNav, setMobNav] = useState(false);
    const handleClick = () => setMobNav(!mobNav);

    return (
        <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src="" alt="Shazzadur Rahman" />
            </div>

            {/* menu */}
            <div>
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Education</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {
                    !mobNav ? <FaBars /> : <FaTimes/>
                }
            </div>

            {/* mobile menu */}
            <ul className={!mobNav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-2xl">Home</li>
                <li className="py-6 text-2xl">About</li>
                <li className="py-6 text-2xl">Skills</li>
                <li className="py-6 text-2xl">Projects</li>
                <li className="py-6 text-2xl">Education</li>
                <li className="py-6 text-2xl">Contact</li>
            </ul>

            {/* social icons */}
            <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
                <ul>
                    <li className="flex justify-between items-center w-40 h-16 ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
                        <a className="flex justify-between items-center w-full"
                         href="/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="flex justify-between items-center w-40 h-16 ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-600">
                        <a className="flex justify-between items-center w-full"
                         href="/">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="flex justify-between items-center w-40 h-16 ml-[-100px] hover:ml-[-10px] duration-500 bg-red-500">
                        <a className="flex justify-between items-center w-full"
                         href="/">
                            Email <SiGmail size={30}/>
                        </a>
                    </li>
                    <li className="flex justify-between items-center w-40 h-16 ml-[-100px] hover:ml-[-10px] duration-500 bg-stone-700">
                        <a className="flex justify-between items-center w-full"
                         href="/">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;