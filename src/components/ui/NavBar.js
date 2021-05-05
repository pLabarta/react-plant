import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { PlantScreen } from '../plant/PlantScreen';

export const NavBar = () => {
    return (

        <Router>
            <header>
                <nav className="fixed bottom-0 w-full">
                    <ul className="grid grid-cols-3 justify-items-stretch text-center">
                        <Link to="/seed" className="bg-red-800 p-2">
                            <li className="">Seed</li>
                        </Link>
                        <Link to="/plant" className="bg-green-800 p-2">
                            <li>Plant</li>
                        </Link>
                        <Link to="/water" className="bg-blue-800 p-2">
                            <li>Water</li>
                        </Link>
                    </ul>
                </nav>
            </header>

            <Switch>
                <Route path="/plant">
                    <Plant />
                </Route>
                <Route path="/water">
                    <Water />
                </Route>
                <Route path="/seed">
                    <Seed />
                </Route>
            </Switch>


        </Router>
    )
}

function Plant() {
    // return <h1>Plant</h1>;
    return <PlantScreen />
}

function Water() {
    return <h1>Water</h1>;
}

function Seed() {
    return <h1>Seed</h1>;
}
