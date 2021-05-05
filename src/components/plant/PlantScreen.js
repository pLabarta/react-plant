import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { PlantDetails } from './partials/PlantDetails'
import { PlantHome } from './partials/PlantHome'
import { PlantNew } from './partials/PlantNew'

export const PlantScreen = () => {
    return (
        <Router>
            <nav className="fixed top-0 w-full">
                <ul className="grid grid-cols-3 justify-items-stretch text-center">
                    <Link to="/plant/home" className="bg-green-800 p-2">
                        <li className="">Plant</li>
                    </Link>
                    <Link to="/plant/detail" className="bg-green-800 p-2">
                        <li>Detail</li>
                    </Link>
                    <Link to="/plant/new" className="bg-green-800 p-2">
                        <li>New</li>
                    </Link>

                </ul>
            </nav>

            <Switch>
                <Route path="/plant/home">
                    <PlantHome />
                </Route>
                <Route path="/plant/detail">
                    <PlantDetails />
                </Route>
                <Route path="plant/new">
                    <PlantNew />
                </Route>
            </Switch>

        </Router >
    )
}
