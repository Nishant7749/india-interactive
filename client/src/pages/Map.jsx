import Navbar from '../components/Navbar'
import { MapContainer, GeoJSON } from 'react-leaflet';
import { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import FitMap from '../components/FitMap';
import { onStateClick } from '../components/StateClick';
import StateInfo from '../components/StateInfo';


export default function Map() {
    const [indStates, setIndStates] = useState(null)
    const [selectedState, setSelectedState] = useState(null)


    useEffect(() => {
        fetch('/geojson/states.geojson')
            .then(res => res.json())
            .then(data => setIndStates(data))
    }, [])




    return (
        <>
        <Navbar/>
        
            <div>
                <div>


                    <MapContainer zoomControl={false} scrollWheelZoom={false} doubleClickZoom={false} dragging={false} touchZoom={false} boxZoom={false} keyboard={false} attributionControl={false}
                        style={{ height: "800px", width: "100%", background: "#0b1120" }}>

                        {indStates && (
                            <>

                                <GeoJSON data={indStates} onEachFeature={(feature, layer) => onStateClick(feature, layer, setSelectedState)}
                                    style={{ weight: 1, fillColor: "#334155", fillOpacity: 1, color: "#64748b" }} />

                                <FitMap data={indStates} />

                            </>
                        )}

{/* state deatailed info */}
                        {selectedState && (
                            <StateInfo selectedState={selectedState} />
                        )}

                    </MapContainer>



                </div>
            </div>
        </>
    )
}