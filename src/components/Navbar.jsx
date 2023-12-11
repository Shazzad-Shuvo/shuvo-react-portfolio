import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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
            <div className="md:hidden">
                <FaBars/>
            </div>

            {/* mobile menu */}
            <ul className="hidden">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>

            {/* social icons */}
            <div className="hidden"></div>

        </div>
    );
};

export default Navbar;