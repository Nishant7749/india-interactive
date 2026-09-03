import Navbar from '../components/Navbar'
import HomeLeft from "../components/HomeLeft"
import map from '../assets/india-map.png'

export default function Home() {

    return(
        <>
        <Navbar/>
        <div className="h-screen font-space">
            <div className="flex justify-between">
                <div>
                <HomeLeft/>
                </div>

            <div className="">
                <div className="w-56 h-96 bg-purple-500 absolute right-60 top-40 z-0 blur-3xl"></div>
                <img className="mt-10 mr-5 w-lg float-right relative z-99" src={map} alt="" />
            </div>

        </div>
        </div>
        </>
    )
}