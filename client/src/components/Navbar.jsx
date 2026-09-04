import {Link} from 'react-router-dom';
import { GiIndianPalace } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {

    return(
        <>
        <div className='font-space'>
            <div className='flex items-center justify-between border-b border-gray-900 p-2'>

                <div className='text-2xl ml-5 font-elite flex justify-center gap-2'>
                    <GiIndianPalace className=''/>
                   <h1>INDIA</h1>
                </div>

                <div className='flex gap-8'>
                    <Link to='/' className=' hover:text-purple-400'>Home</Link>
                    <Link to='/about' className=' hover:text-purple-400'>About</Link>
                    <Link to='/contact' className=' hover:text-purple-400'>Contact</Link>
                </div>

                <div className='mr-5 border border-purple-500/60 p-1.5 rounded-xl w-35 flex items-center gap-3 justify-center bg-purple-600/90 cursor-pointer hover:bg-purple-600 transition-all'>
                    <button className='cursor-pointer'><Link to='/map'>Explore</Link></button>
                    <FaArrowRight/>
                </div>

            </div>
        </div>
        </>
    )
}