import founder from '../../assets/images/founder.png';
const About = () => {
    return (
        <div>
            <section className=" px-4 sm:px-8">
                <h3 className='bg-gray-100 rounded-2xl items-center text-4xl font-bold flex justify-center py-5 mb-10'>About</h3>
                <div className="max-w-4xl mx-auto">
                    <p className="mb-4 text-center">"The man who does not read good books has no advantage over the man who cannot read them."
                    </p>
                    <p className="mb-4 text-center">
                        <span className="font-bold ">- Mark Twain.</span>
                    </p>
                    <p className=" mb-8">
                        Tired of all the strange suggestions from phony sources to fulfill your cravings for just a good book? If that happens, get ready to unleash the bookworm within at this gateway to book discovery! <span className='font-medium'>Welcome to Book Vibe!</span>
                    </p>
                </div>
            </section>

            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-2xl text-[#23BE0A]  font-bold leading-none text-center sm:text-5xl">Words From Founder</h1>
                <img className='mx-auto' src={founder} alt="" />
                <section>I am Rosie Langello, the founder and book enthusiast behind Book Vibe. I’ve been an avid reader since childhood. From then, I became a frequent visitor to local book fairs and libraries. My constant search for new stories to devour took me to countless literary events in Shotwell St, San Francisco, and the surrounding areas.</section>
                <section>From local book fairs to regional literature festivals, I have been engaged in a continuous quest for literary exploration. I hardly even miss participating in book reading contests and bringing home several awards.</section>
                <section>And guess what? All these festivals celebrate the written word and bring together a diverse range of writers, artists, and creatives. Significantly, the Scholastic Book Fair feels very familiar to me. I love engaging in thought-provoking author talks, panel events, and writing workshops.</section>
            </div>
            <div>
                <section className="py-6 ">
                    <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                        <h1 className="text-2xl text-[#23BE0A]  font-bold leading-none text-center sm:text-5xl">Meet Our Team</h1>
                        <p className="max-w-2xl text-center dark:text-gray-600">Meet the dedicated individuals who make Book Vibe possible. Their passion drives our mission to bring you the best book discovery experience!</p>
                        <div className="flex flex-row flex-wrap-reverse justify-center">
                            <div className="flex flex-col justify-center m-4 text-center">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                                <p className="text-xl font-semibold leading-tight">John Doe</p>
                                <p className="dark:text-gray-600">Content Writer</p>
                            </div>
                            <div className="flex flex-col justify-center m-4 text-center">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                                <p className="text-xl font-semibold leading-tight">Jane Smith</p>
                                <p className="dark:text-gray-600">Graphic Designer</p>
                            </div>
                            <div className="flex flex-col justify-center m-4 text-center">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                                <p className="text-xl font-semibold leading-tight">Alice Johnson</p>
                                <p className="dark:text-gray-600">Web Developer</p>
                            </div>
                            <div className="flex flex-col justify-center m-4 text-center">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                                <p className="text-xl font-semibold leading-tight">Michael Brown</p>
                                <p className="dark:text-gray-600">Marketing Manager</p>
                            </div>
                            <div className="flex flex-col justify-center m-4 text-center">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                                <p className="text-xl font-semibold leading-tight">Emily Davis</p>
                                <p className="dark:text-gray-600">UI/UX Designer</p>
                            </div>
                            <div className="flex flex-col justify-center m-4 text-center">
                                <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                                <p className="text-xl font-semibold leading-tight">Robert Johnson</p>
                                <p className="dark:text-gray-600">Software Engineer</p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="py-6 ">
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-4xl font-bold text-[#23BE0A]">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Dhaka, Bangladesh</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>123456789</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>contact@business.com</span>
                                </p>
                            </div>
                        </div>
                        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1 mr-5">Full name</span>
                                <input type="text" className="py-5 block w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input type="email" className="py-5 block w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea rows="3" className="py-5 block w-full rounded-xl focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                            </label>

                            <button className="btn bg-[#23BE0A] text-white text-md px-8" >Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;