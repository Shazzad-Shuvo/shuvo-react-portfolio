import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_3oygw2w', 'template_kw12pvd', form.current, 'CpDcaSD0KIcv1uN_D')
            .then((result) => {
                setIsLoading(false);
                toast.success("Mail successfully sent! I'll respond as soon as possible.");

                console.log(result);
            }, (error) => {
                setIsLoading(false);
                console.log(error.text);
            });
    };

    return (
        <div name="contact" className="w-full mt-32 mb-10 md:mt-14 bg-cyan-950 text-gray-300">
            <div className='text-center'>
                <p className="text-4xl font-bold border-b-4 inline border-pink-600">Contact</p>
            </div>

            <div className="max-w-[950px] mx-auto flex items-top justify-center min-h-screen  sm:items-center sm:pt-0">
                <div className=" sm:px-6 lg:px-4">
                    <div className="mt-8 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-300">
                            <div className="p-5  bg-cyan-800 rounded-lg">
                                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                                    Contact Me
                                </h1>
                                <p className="text-normal text-lg sm:text-lg font-medium text-gray-400 dark:text-gray-400 mt-2">
                                    Let's get in touch! <br />
                                    I'll be eagerly waiting for your mail.
                                </p>

                                <div className="flex items-center mt-8 text-gray-400">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        Chittagong, Bangladesh
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-400">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +880-1624892910 / +880-1521225399
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-400">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-80">
                                        md.rahman.shazzadur@gmail.com
                                    </div>
                                </div>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label className="">Full Name</label>
                                    <input type="name" name="from_name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label className="">Email</label>
                                    <input type="email" name="from_email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label className="">Message</label>
                                    <textarea
                                        name="message"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                                        rows="6"
                                        placeholder="Write your message here"
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value={isLoading ? 'Sending...' : 'SEND MESSAGE'}
                                    className="  hover:bg-blue-dark text-white border-2 font-bold py-3 px-6 rounded-lg mt-3 hover:bg-pink-600 hover:border-pink-600 transition ease-in-out duration-300"
                                    disabled={isLoading}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;