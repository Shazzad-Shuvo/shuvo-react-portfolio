import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [mobNav, setMobNav] = useState(false);
    const handleClick = () => setMobNav(!mobNav);

    return (
        <div className="fixed top-0 w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                {/* <img src="" alt="Shazzadur Rahman" /> */}
            </div>

            {/* menu */}
            <div>
                <ul className="hidden md:flex">
                    <li>
                        <Link
                            activeClass="active"
                            to="home"
                            smooth={true}
                            duration={700}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            smooth={true}
                            duration={700}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="skills"
                            smooth={true}
                            duration={700}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="projects"
                            smooth={true}
                            duration={700}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="experience"
                            smooth={true}
                            duration={700}
                        >
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contact"
                            smooth={true}
                            duration={700}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {
                    !mobNav ? <FaBars /> : <FaTimes />
                }
            </div>

            {/* mobile menu */}
            <ul className={!mobNav ? 'hidden' : ' absolute top-0 left-0 w-full my-10 h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-2xl">
                    <Link
                        activeClass="active"
                        to="home"
                        smooth={true}
                        duration={700}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-2xl">
                    <Link
                        activeClass="active"
                        to="about"
                        smooth={true}
                        duration={700}
                    >
                        About
                    </Link>
                </li>
                <li className="py-6 text-2xl">
                    <Link
                        activeClass="active"
                        to="skills"
                        smooth={true}
                        duration={700}
                    >
                        Skills
                    </Link></li>
                <li className="py-6 text-2xl">
                    <Link
                        activeClass="active"
                        to="projects"
                        smooth={true}
                        duration={700}
                    >
                        Projects
                    </Link>
                </li>
                <li className="py-6 text-2xl">
                    <Link
                        activeClass="active"
                        to="experience"
                        smooth={true}
                        duration={700}
                    >
                        Education
                    </Link>
                </li>
                <li className="py-6 text-2xl">
                    <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        duration={700}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
                <ul>
                    <li className="flex justify-between items-center w-40 h-16 ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
                        <a className="flex justify-between items-center w-full"
                            href="https://www.linkedin.com/in/shazzad-shuvo">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="flex justify-between items-center w-40 h-16 ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-600">
                        <a className="flex justify-between items-center w-full"
                            href="https://github.com/Shazzad-Shuvo">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="flex justify-between items-center w-40 h-16 ml-[-100px] hover:ml-[-10px] duration-500 bg-red-500">
                        <a className="flex justify-between items-center w-full"
                            href="/">
                            Email <SiGmail size={30} />
                        </a>
                    </li>
                    <li className="flex justify-between items-center w-40 h-16 ml-[-100px] hover:ml-[-10px] duration-500 bg-stone-700">
                        <a className="flex justify-between items-center w-full"
                            href="../../public/Muhammad_Shazzadur_Rahman_CV(2).pdf" download>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;