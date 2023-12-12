import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import nodejs from '../assets/node.png'
import firebase from '../assets/firebase.png'
import mongodb from '../assets/mongo.png'
import expressjs from '../assets/express.png'

const Skills = () => {
    return (
        <div name="skills" className='w-full'>
            <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center w-full  text-gray-300'>
                <div className='text-center'>
                    <p className="text-4xl font-bold border-b-4 inline border-pink-600">Skills</p>
                    <p className='mt-4 text-2xl font-semibold'>I am adept at</p>
                </div>

                <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={html} alt="HTML logo" />
                        <p className='mt-2'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={css} alt="CSS logo" />
                        <p className='mt-2'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={javascript} alt="Javascript logo" />
                        <p className='mt-2'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={tailwind} alt="Tailwind logo" />
                        <p className='mt-2'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={react} alt="React logo" />
                        <p className='mt-2'>React</p>
                    </div>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={nodejs} alt="NodeJs logo" />
                        <p className='mt-2'>Node</p>
                    </div>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={expressjs} alt="Express logo" />
                        <p className='mt-2'>Express</p>
                    </div>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={firebase} alt="Firebase logo" />
                        <p className='mt-2'>Firebase</p>
                    </div>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={mongodb} alt="MongoDb logo" />
                        <p className='mt-2'>MongoDb</p>
                    </div>
                    <div className='shadow-md shadow-cyan-800 rounded-md hover:scale-110 duration-500 py-3'>
                        <img className='w-20 mx-auto' src={github} alt="Github logo" />
                        <p className='mt-2'>Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;