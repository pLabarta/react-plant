import React from 'react'
import { Link } from 'react-router-dom'
import { BigPlantCard } from './BigPlantCard'

export const BigPlantGallery = () => {
    const plantList = [0, 0, 0];
    return (
        <section className="container mx-auto grid gap-4">
            <h2 className="mt-4 text-2xl ml-4">HOT PLANTS</h2>
            <div className="favorites bg-green-500 py-4">
                <div class="plants-big flex gap-4 overflow-scroll">
                    {
                        plantList.map(plantId => (
                            <BigPlantCard plantId={plantId} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}