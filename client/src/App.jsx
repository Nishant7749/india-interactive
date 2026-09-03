import './App.css'
import Home from './pages/Home'
import Map from './pages/Map'
import StatePage from './pages/StatePage'
import { Routes, Route } from 'react-router-dom'

export default function App() {

    return(
        <>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/map' element={<Map/>}/>

            <Route path='/state-info/:state' element={<StatePage/>} />
        </Routes>
        </>
    )
}