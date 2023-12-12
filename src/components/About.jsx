
const About = () => {
    return (
        <div name="about" className="w-full my-64 lg:my-0 text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[950px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold border-b-4 inline border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[950px] w-full grid sm:grid-cols-2 gap-8">
                    <div className="sm:text-right text-3xl font-semibold pb-8 pl-4">
                        <p>
                            Hello! Thank you for visiting
                            <br />
                            Feel free to look around
                        </p>
                    </div>
                    <div className="pl-4 sm:pl-0">
                        <p>
                            I completed my graduation in Computer Science & Engineering in 2018. Immediately after, I started studying for post graduation in Computer Science and had completed two semesters. But for some unforseen reasons, I could not complete my post graduation degree. I had already lost quite a bit of valuable time but did not let it break my spirit.
                        </p>
                        <br />
                        <p>
                            I decided to start afresh. I dedicated myself to developing my skills, updating the prior knowledge I had and explore the realm of development and coding. I started learning with a view to establishing myself as a MERN stack developer from July 2023 to December 2023. Now I am confident of my skills as a MERN stack developer. 
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;