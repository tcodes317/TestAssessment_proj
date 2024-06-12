import Header from "./../Header/Header";
import img from "./../../assets/Whatdowedo.d7b1222cec773bd7ce14.jpg";
import imgi from "./../../assets/businesswoman-consulting-legal-experts.c06314aa4e68f88ccee1.png";
import imgii from "./../../assets/businesswoman-consulting-legal-experts-1.701a57287c65656307d9.png";
import imgiii from "./../../assets/businesswoman-consulting-legal-experts-2.22660efcfd74b7c3c12d.png";
import imgiv from "./../../assets/positive experience.ac78ea3d3613070dc219.jpg";
import imgv from "./../../assets/top talent.587dec1ce72cb6f7fe1e.jpg";
import Footer from "./../Footer/Footer";

export default function Home(){
    return(
        <>
            <Header />
            
            <div className="w-full relative" id="bgOne"> {/** section one */}
                <div className="absolute space-y-8 top-72 w-6/12 left-44">
                    <h1 className="text-4xl font-bold w-9/12 text-black">Hire the best-accurate, fair and fast recruitment!</h1>
                    <p className="w-10/12">Our screening tests identify the best candidate and make your hiring decision faster, easier and bias-free</p>
                    <div className="">
                        <button className="bg-yellow-400 p-3 px-5 text-white rounded-md">
                            <span>Request a demo</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="my-14 text-center"> {/** section two */}
                <h1 className="text-blue-950 text-5xl">Join the companies replacing CVs with TestAssessify</h1>
            </div>

            <div className="py-12 pb-16" id="bgTwo"> {/** section three */}
                <div className="flex items-center space-x-14">
                    <div className="w-7/12">
                        <img src={img} srcset={img} />
                    </div>
                    <div className="w-5/12 space-y-7">
                        <h1 className="text-4xl font-bold text-blue-950">What we do</h1>
                        <p>We create personalised, realistic job assessment that authentically commnicate what's it's like to work within a specific role in your organisation.</p>
                        <div className="space-y-4">
                            <div className="flex space-x-4 items-center">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M349.1 334.7c-11.2-4-29.5-4.2-37.6-7.3-5.6-2.2-14.5-4.6-17.4-8.1-2.9-3.5-2.9-28.5-2.9-28.5s7-6.6 9.9-14c2.9-7.3 4.8-27.5 4.8-27.5s6.6 2.8 9.2-10.4c2.2-11.4 6.4-17.4 5.3-25.8-1.2-8.4-5.8-6.4-5.8-6.4s5.8-8.5 5.8-37.4c0-29.8-22.5-59.1-64.6-59.1-42 0-64.7 29.4-64.7 59.1 0 28.9 5.7 37.4 5.7 37.4s-4.7-2-5.8 6.4c-1.2 8.4 3 14.4 5.3 25.8 2.6 13.3 9.2 10.4 9.2 10.4s1.9 20.1 4.8 27.5c2.9 7.4 9.9 14 9.9 14s0 25-2.9 28.5-11.8 5.9-17.4 8c-8 3.1-26.3 3.5-37.6 7.5-11.2 4-45.8 22.2-45.8 67.2h278.3c.1-45.1-34.5-63.3-45.7-67.3z"></path><path d="M140 286s23.9-.8 33.4-9.3c-15.5-23.5-7.1-50.9-10.3-76.5-3.2-25.5-17.7-40.8-46.7-40.8h-.4c-28 0-43.1 15.2-46.3 40.8-3.2 25.5 5.7 56-10.2 76.5C69 285.3 93 285 93 285s1 14.4-1 16.8c-2 2.4-7.9 4.7-12 5.5-8.8 1.9-18.1 4.5-25.9 7.2-7.8 2.7-22.6 17.2-22.6 37.2h80.3c2.2-8 17.3-22.3 32-29.8 9-4.6 17.9-4.3 24.7-5.2 0 0 3.8-6-8.7-8.3 0 0-17.2-4.3-19.2-6.7-1.9-2.2-.6-15.7-.6-15.7zM372 286s-23.9-.8-33.4-9.3c15.5-23.5 7.1-50.9 10.3-76.5 3.2-25.5 17.7-40.8 46.7-40.8h.4c28 0 43.1 15.2 46.3 40.8 3.2 25.5-5.7 56 10.2 76.5-9.5 8.6-33.5 8.3-33.5 8.3s-1 14.4 1 16.8c2 2.4 7.9 4.7 12 5.5 8.8 1.9 18.1 4.5 25.9 7.2 7.8 2.7 22.6 17.2 22.6 37.2h-80.3c-2.2-8-17.3-22.3-32-29.8-9-4.6-17.9-4.3-24.7-5.2 0 0-3.8-6 8.7-8.3 0 0 17.2-4.3 19.2-6.7 1.9-2.2.6-15.7.6-15.7z"></path></svg>
                                <div>Select the best candidates</div>
                            </div>
                            <div className="flex space-x-4 items-center">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"></path><path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"></path></svg>
                                <div>Make your recruitment seamless</div>
                            </div>
                            <div className="flex space-x-4 items-center">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <div>Grade and rank candidates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-8"> {/** section four */}
                <div className="text-center my-12">
                    <h1 className="text-4xl font-bold">Why you should use us</h1>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <div className="w-3/12">
                        <img src={imgi} srcset={imgi} />
                        <div className="space-y-6 mt-4 w-12/12">
                            <h1 className="text-2xl font-bold">Candidates</h1>
                            <p className="text-md">Candidate feel they have been treated fairly and leave the experience as fans of your brand even if they do not get the job.</p>
                        </div>
                    </div>
                    <div className="w-3/12">
                        <img src={imgii} srcset={imgii} />
                        <div className="space-y-6 mt-4 w-10/12">
                            <h1 className="text-2xl font-bold">Relevant Data</h1>
                            <p className="text-md">You evaluate candidates based on objective, job-relevant data and demostrated abilities using a multi-method approach.</p>
                        </div>
                    </div>
                    <div className="w-3/12">
                        <img src={imgiii} srcset={imgiii} />
                        <div className="space-y-6 mt-4 w-10/12">
                            <h1 className="text-2xl font-bold">Simulation</h1>
                            <p className="text-md">Candidate engage in a seires of simulated tasks and job relevant exercises customised for your brand.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center" id="bgThree">
                <div className="relative w-full">
                    <div className="w-10/12 absolute left-28 space-y-6">
                        <h1 className="font-bold text-4xl text-blue-950">Offer a positive candiate experience.</h1>
                        <p className="w-11/12 text-blue-950">Assessments are proven to provide candidates a better experience and greater satisfaction by giving them the opportunity to engage in job relevant tasks and demonstrate skills related to the job.</p>
                    </div>
                </div>
                <div>
                    <img src={imgiv} srcset={imgiv} />
                </div>
            </div>

            <div className="flex items-center space-x-2 justify-center">
                <div className="">
                    <img src={imgv} className="w-11/12" srcset={imgv} />
                </div>
                <div className="w-5/12 space-y-6">
                    <h1 className="font-bold w-10/12 text-blue-950 text-4xl">Top talent is priceless. We make finding them affordable and easier</h1>
                    <p className="text-blue-950">A time-consuming screening process costs you a lot. Painful mis-hires cost you much, much more. With TestAssesify, you avoid all of this and see a huge return on investment every single year. Start screening with us today on our free plan.</p>
                    <div className="relative mt-8">
                        <button className="bg-yellow-400 p-2 hover:bg-yellow-500 hover:transition-all rounded-md px-6 text-white">
                            <span>Talk to us</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between space-y-8 py-6">
                <div className="relative top-4">
                    <h4 className="font-bold text-lg">Get news on all the latest updates straight to your mail</h4>
                </div>
                <div className="relative -left-12 border-2 border-black rounded-sm">
                    <button className="bg-red-500 p-3 px-8 text-white text-xs relative z-10 left-6">
                        <span>SUBSCRIBE</span>
                    </button>
                </div>
            </div>

            <Footer />
        </>
    )
}