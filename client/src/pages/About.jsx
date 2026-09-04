import Navbar from "../components/Navbar"
import { Info, Map, ChartColumnBig, Wallpaper, ShieldCheck, BookOpen, Heart, Dot, CircleCheck } from 'lucide-react'

export default function About() {

    return (
        <>
        <Navbar/>

        <div className="font-space m-8">
            <div className="flex flex-col items-center justify-center">

                <div className="flex flex-col items-center justify-center gap-4">
                <Info className="bg-purple-500 rounded-full w-12 h-12 p-2 shadow-lg shadow-purple-400" />

                <h1 className="text-xl">About us</h1>

                <p className="text-xs text-gray-400">The project aims to provide a beautiful and interactive way to explore <br /> all the states and union territories of India. <br /> Get information that matters, in simple and visualised engaging experience.</p>
               </div>

               <div className="border border-gray-400/20 bg-gray-400/10 rounded-xl m-6 p-6 flex items-center justify-center gap-6 w-2/3">
                     <div className="flex flex-col items-center justify-center w-1/3">
                        <Map className="text-purple-400"/>
                        <h1>Interactive Map</h1>
                        <p className="text-sm text-gray-400">Explore each state by hovering or clicking them</p>
                     </div>

                     <div className="w-0.5 h-16 bg-gray-600"></div>

                     <div className="flex flex-col items-center justify-center w-1/3">
                        <ChartColumnBig className="text-purple-400"/>
                        <h1>Detailed Insights</h1>
                        <p className="text-sm text-gray-400">Get state-wise information on latest insights</p>
                     </div>

                     <div className="w-0.5 h-16 bg-gray-600"></div>

                     <div className="flex flex-col items-center justify-center w-1/3">
                        <Wallpaper className="text-purple-400"/>
                        <h1>Dark & Minimal</h1>
                        <p className="text-sm text-gray-400">A clean and minimal design focused on clarity.</p>
                     </div>
               </div>

               <div className="flex items-center justify-center gap-5 mt-3">

                   <div className="border border-gray-400/20 bg-gray-400/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3">
                    <BookOpen className="text-purple-400"/>
                    <h1 className="text-xl">Sources</h1>
                       <div className="w-20 h-0.5 bg-purple-500"></div>

                    <ul className="flex flex-col items-center justify-center text-sm text-gray-300">
                        <li className="flex items-center"><Dot/>Ministry of Home Affairs, Government of India</li>
                        <li className="flex items-center"><Dot/>Census of India</li>
                        <li className="flex items-center"><Dot/>Official State Government Portals</li>
                        <li className="flex items-center"><Dot/>India.gov.in - National Portal</li>
                    </ul>

                   </div>

                   <div className="border border-gray-400/20 bg-gray-400/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3">
                      <ShieldCheck className="text-purple-400"/>
                      <h1 className="text-xl">Credibility</h1>
                           <div className="w-20 h-0.5 bg-purple-500"></div>

                      <ul className="flex flex-col items-center gap-2 justify-center text-sm text-gray-300">
                         <li className="flex items-center gap-2"><CircleCheck className="w-5 bg-green-700 rounded-full h-5"/>Verified Data</li>
                         <li className="flex items-center justify-between gap-2"><CircleCheck className="w-5 bg-green-700 rounded-full h-5"/>Regular Updates</li>
                         <li className="flex items-center justify-between gap-2"><CircleCheck className="w-5 bg-green-700 rounded-full h-5"/>Transparency</li>
                         <li className="flex items-center justify-between gap-2"><CircleCheck className="w-5 bg-green-700 rounded-full h-5"/>Educational Purposes</li>
                      </ul>

                   </div>
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