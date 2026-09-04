import {Map, Users, ChartCandlestick, Languages, ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeLeft() {

    return(
        <>
        <div>
            <div className='ml-8 mt-5'>

{/* states & uts */}
                <div className="w-84 border border-gray-900 rounded-full text-xs p-1.5 flex gap-4 items-center px-4 mb-10">
                    <div className="w-1.5 h-1.5 bg-purple-500 animate-pulse rounded-full shadow shadow-purple-400"></div>

                    <p>28 states</p>
                     <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <p>8 union territories</p>
                     <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <p className="text-purple-400">1 India</p>

                </div>

{/* larger heading */}
                <div className="m-2 mt-4">
                    <h1 className="font-extrabold text-6xl">One Country</h1>
                    <h1 className="font-extrabold font-croissant text-7xl text-purple-500">Infinite Stories.</h1>
                </div>

{/* smaller headings */}
                <div className='m-2 mt-4 text-gray-400 text-sm w-2/3'>
                    <p>Explore every State and Union territory of India with powerful insights, authentic data & beautiful visuals.</p>
                </div>

                <div className='m-5 my-10 flex items-center gap-8'>
                    <button className='font-bold bg-purple-500 p-2 w-70 rounded-xl transition-all hover:shadow-md cursor-pointer hover:bg-purple-400 shadow-sm shadow-purple-400'><Link className='flex gap-4 items-center justify-center' to='/map'>Explore Interactive Map<ArrowRight className='hover:translate-x-2 transition-all duration-200' /></Link></button>

                    <button className='border border-gray-400 rounded-lg p-2 w-40 hover:bg-purple-500 cursor-pointer transition-all hover:border-purple-400 transition-all duration-200'><Link to='/contact'>Contact us</Link></button>
                </div>

{/* 4 basic info */}
                <div className='w-6/7 flex items-center justify-center gap-6 border border-gray-900 rounded-xl p-2 m-2'>

                    <div className='flex flex-col items-center '>
                     <Users className='text-blue-500'/>
                     <h1 className='font-bold text-xl'>148 Cr</h1>
                     <p className='text-gray-600 text-sm'>Population</p>
                    </div>

                    <div className='h-20 bg-gray-900/40 w-0.5'></div>

                    <div className='flex flex-col items-center '>
                     <Map className='text-green-500' />
                     <h1 className='font-bold text-xl'>3.28 km2</h1>
                     <p className='text-gray-600 text-sm'>Area</p>
                    </div>

                    <div className='h-20 bg-gray-900/40 w-0.5'></div>

                    <div className='flex flex-col items-center '>
                     <ChartCandlestick className='text-yellow-500'/>
                     <h1 className='font-bold text-xl'>$18.9 trillion</h1>
                     <p className='text-gray-600 text-sm'>GDP (PPP)</p>
                    </div>

                    <div className='h-20 bg-gray-900/40 w-0.5'></div>

                    <div className='flex flex-col items-center '>
                     <Languages className='text-purple-500' />
                     <h1 className='font-bold text-xl'>400+</h1>
                     <p className='text-gray-600 text-sm'>Native Languages</p>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}