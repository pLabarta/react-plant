import React from 'react'
import { ButtonNewPlant } from './buttons/ButtonNewPlant'
import { BigPlantGallery } from './galleries/BigPlantGallery'

export const PlantHome = () => {
    return (
        <main className="mt-14">
            <ButtonNewPlant />
            <BigPlantGallery />
        </main>
    )
}
