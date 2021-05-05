import React from 'react'
import url from '../../../../PlantConfig'

export const BigPlantCard = async ({ plantId }) => {
    const plantURL = `${url}/plants/${plantId}`
    const response = await fetch(plantURL)
    const plant = await response.json();
    return (
        <div className="plant w-2/3 flex-shrink-0 bg-white flex flex-col p-2">
            <img src="img/tree-preview.png" alt="" />
            <span>Owner: </span>
            <span>Water</span>
        </div>
    )
}

// let plantData;

// async function getPlantData(plantId) {
//     const plantURL = `${url}/plants/${plantId}`

//     const response = await fetch(plantURL)
//     const plant = await response.json();
//     console.log(plant);
//     return plant.plant
// }
