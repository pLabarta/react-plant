import React from 'react'
import { PlantRender } from '../../../renderer/PlantRender'



export const PlantDetails = () => {
    // const tree = LoadTree();
    return (
        <>
            <h1>Plant Details</h1>
            <div className="mt-16 h-48 w-1/3" id="plantrender">
                <PlantRender />
            </div>
        </>
    )
}
