import L from 'leaflet'
import { useMap } from 'react-leaflet'
import { useEffect } from 'react'

export default function FitMap({data}) {

    const map = useMap()

    useEffect(()=> {
        const bounds = L.geoJSON(data).getBounds()

        map.fitBounds(bounds, {
            padding: [20, 20]
        })
    }, [data, map])

    return null
    
}