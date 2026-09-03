import { SlLocationPin } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";
import { GiPoland } from "react-icons/gi";
import { MdCategory } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function StateInfo({selectedState}) {
    const navigate = useNavigate();

    const openStateInfo = (state)=> {
        navigate(`/state-info/${state}`)
    }

    return(
        <>
        <div className="font-space flex items-center">
            <div className="border border-gray-800 p-4 m-5 rounded-xl bg-gray-900 w-80 flex flex-col items-center justify-center gap-3">

                <h1 className="text-xl uppercase text-center font-semibold mb-4">
                    {selectedState.name}
                </h1>

                <div className="bg-gray-800 w-full p-2 rounded-full flex items-center justify-between px-5">
                    <div className="flex items-center gap-1">
                        <MdCategory className="text-lg text-purple-500" />
                        <h1 className="text-gray-300">Type</h1>
                    </div>
                    <div className="font-semibold text-lg">{selectedState.type} </div>
                </div>

                <div className="bg-gray-800 w-full p-2 rounded-full flex items-center justify-between px-5">
                    <div className="flex items-center gap-1">
                        <SlLocationPin className="text-lg text-blue-500" />
                        <h1 className="text-gray-300">Capital</h1>
                    </div>
                    <div className="font-semibold text-lg">{selectedState.capital}</div>
                </div>

                <div className="bg-gray-800 w-full p-2 rounded-full flex items-center justify-between px-5">
                    <div className="flex items-center gap-1">
                        <FaUsers className="text-lg text-amber-500" />
                        <h1 className="text-gray-300">Population</h1>
                    </div>
                    <div className="font-semibold text-lg">{selectedState.population}</div>
                </div>

                <div className="bg-gray-800 w-full p-2 rounded-full flex items-center justify-between px-5">
                    <div className="flex items-center gap-1">
                        <GiPoland className="text-lg text-green-500" />
                        <h1 className="text-gray-300">Area</h1>
                    </div>
                    <div className="font-semibold text-lg">{selectedState.area} km2</div>
                </div>


                <div onClick={()=> openStateInfo(selectedState.name)}  className="bg-purple-400/50 border border-purple-400/60 rounded-xl  p-3 flex items-center gap-3 mt-5 justify-center hover:bg-purple-400/60 cursor-pointer">
                    <FaSearchLocation className="text-lg text-amber-100"/>
                    <button className="">Know more about {selectedState.name}</button>
                </div>



            </div>
        </div>
        </>
    )
}