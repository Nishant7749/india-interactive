import { stateData } from "../data/state_detailedData"
import {Link, useParams} from 'react-router-dom'
import { Landmark, Users, RulerDimensionLine ,LandPlot, SquareText, MoveLeft   } from 'lucide-react';
import './StatePage.css'


export default function StatePage() {
    const {state} = useParams();

    const currState = stateData[state]   


    if(!currState) {
        return <h1>404 Not Found!</h1>
    }                
    

    return (
        <>
        <div className="bg-cover bg-center bg-no-repeat h-screen overflow-hidden" style={{backgroundImage: `url(${currState.bgImg})`}}>
            <div className="font-space">

                <div className="text-gray-300 text-sm right-10 top-10 absolute cursor-pointer transition-all ease-in-out duration-300 gap-1 hover:text-white flex items-center">
                    <MoveLeft className="w-5"/>
                    <Link to='/map'>Back to map</Link>
                </div>

                <div className="border border-gray-200/20 border-t-gray-100 border-b-0 bg-gray-200/10 rounded-xl m-12 mb-15 p-6 w-1/3">
                    <h1 className="text-4xl font-bold mb-10">{currState.name}</h1>
                    <p>{currState.brief}</p>
                </div>

                <div className="flex items-center justify-center gap-8">
                    <div className="flex flex-col items-center gap-2 border border-gray-300/20 rounded-xl bg-gray-300/10 p-5 w-60">
                        <Landmark />
                        <h1 className="text-gray-300">Capital</h1>
                        <p className="font-semibold text-lg">{currState.capital}</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 border border-gray-300/20 rounded-xl bg-gray-300/10 p-5 w-50">
                       <Users />
                        <h1 className="text-gray-300">Population</h1>
                        <p className="font-semibold text-lg">{currState.population}</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 border border-gray-300/20 rounded-xl bg-gray-300/10 p-5 w-50">
                        <RulerDimensionLine />
                        <h1 className="text-gray-300">Area</h1>
                        <p className="font-semibold text-lg">{currState.area}</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 border border-gray-300/20 rounded-xl bg-gray-300/10 p-5 w-50">
                       <LandPlot />
                        <h1 className="text-gray-300">Total Districts</h1>
                        <p className="font-semibold text-lg">{currState.totalDistricts}</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 border border-gray-300/20 rounded-xl bg-gray-300/10 p-5 w-50">
                      <SquareText />
                        <h1 className="text-gray-300">State Code</h1>
                        <p className="font-semibold text-lg">{currState.stateCode}</p>
                    </div>


                </div>

            </div>
        </div>
        </>
    )
}