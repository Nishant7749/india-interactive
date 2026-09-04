import Navbar from "../components/Navbar"
import {Mail, MapPin, Clock, Heart} from 'lucide-react'

export default function Contact() {

    return (
        <>
        <Navbar/>
        
        <div>
            <div className="flex flex-col items-center justify-center">

                <h1 className="text-purple-400 text-center m-5 uppercase font-semibold text-xl">contact</h1>
                <h2 className="capitalize text-3xl font-bold ">We'd Love to hear from  you!</h2>

                   <div className="h-0.5 w-40 m-4 bg-purple-400 shadow-sm shadow-purple-300"></div>
                
                <div className="border border-gray-400/20 bg-gray-400/10 rounded-xl m-6 p-6 flex items-center justify-center gap-6 w-2/3">
                                     <div className="flex flex-col items-center justify-center w-1/3">
                                        <Mail className="text-purple-400"/>
                                        <h1>Email</h1>
                                        <p className="text-sm text-gray-400">nishant77749@gmail.com</p>
                                     </div>
                
                                     <div className="w-0.5 h-16 bg-gray-600"></div>
                
                                     <div className="flex flex-col items-center justify-center w-1/3">
                                        <MapPin className="text-purple-400"/>
                                        <h1>Location</h1>
                                        <p className="text-sm text-gray-400">Faridabad, Haryana, IN</p>
                                     </div>
                
                                     <div className="w-0.5 h-16 bg-gray-600"></div>
                
                                     <div className="flex flex-col items-center justify-center w-1/3">
                                        <Clock className="text-purple-400"/>
                                        <h1>Response Time</h1>
                                        <p className="text-sm text-gray-400">Within 24 hours always.</p>
                                     </div>
                               </div>

                               <div className="mb-5 uppercase font-bold flex items-center">
                                   <div className="w-40 h-0.5 bg-purple-400"></div>
                                or
                                <div className="w-40 h-0.5 bg-purple-400"></div>
                               </div>


                               <div className="w-1/2 py-10 flex flex-col items-center justify-center gap-4 border border-gray-400/20 bg-gray-400/10 rounded-xl p-4">
                                
                                    <input className="outline-none border-gray-400/30 bg-gray-20 border rounded-xl p-2 w-1/2" type="text" placeholder="Enter your name" />

                                    <input className="outline-none border-gray-400/30 bg-gray-20 border rounded-xl p-2 w-1/2" type="text" placeholder="Enter email" />

                                    <textarea className="outline-none border-gray-400/30 bg-gray-20 border rounded-xl p-2 w-1/2" placeholder="Type your message here."></textarea>

                                    <button className="bg-purple-500/50 p-3 w-1/2 rounded-full font-semibold text-lg hover:bg-purple-500 transition-all duration-300 cursor-pointer">Click to Send</button>
                                
                               </div>

                               <div className="flex flex-col mt-10 items-center justify-center gap-1">
                  <h1>Explore & Discover India.</h1>
                    <Heart className="text-red-500"/>
               </div>

            </div>
        </div>
        </>
    )
}