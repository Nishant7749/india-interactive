import { stateData } from "../data/state_data"

export const onStateClick = (feature, layer, setSelectedState) => {

    const defaultStyle = {
        fillColor: "#334155",
        fillOpacity: 1,
        color: "#64748b",
        weight: 1
    }

    const hoverStyle = {
        fillColor: "#64748b",
        fillOpacity: 1,
        color: "#cbd5e1",
        weight: 2
    }

    const selectedStyle = {
        fillColor: "#38bdf8",
        fillOpacity: 1,
        color: "#ffffff",
        weight: 2
    }

    // Get name from GeoJSON
    const stateName = feature.properties.NAME_1

    //Get data from stateData.js
    const data = stateData[stateName]
    

    // Hover tooltip
    layer.bindTooltip(
        `
        <div class="state-tooltip">
            <strong>${stateName}</strong>
            <br />
            
            
        </div>
        `,
        {
            sticky: true,
            direction: "top",
            opacity: 0.70
        }
    )

    layer.on({

        mouseover: (e) => {
            e.target.setStyle(hoverStyle)
            e.target.openTooltip()
        },

        mouseout: (e) => {
            e.target.setStyle(defaultStyle)
            e.target.closeTooltip()
        },

        click: (e) => {
            setSelectedState({name: stateName, ...data})
            e.target.setStyle(selectedStyle)
        }
    })
}