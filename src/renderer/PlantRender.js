import React from 'react';
import Sketch from "react-p5";
import { generateGenetics, makeHash, drawTree } from "./helpers";


export const PlantRender = () => {

    let hash = makeHash(40);
    console.log(hash);
    let genetics = generateGenetics(hash);
    console.log(genetics);

    let setup = (p5, canvasParentRef) => {
        let canvasWidth = document.getElementById("plantrender").offsetWidth;
        let canvasHeight = document.getElementById("plantrender").offsetHeight;
        let xyz = p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL).parent(canvasParentRef);
        // Calculation to center the canvas
        let x = (p5.windowWidth - p5.width) / 2;
        let y = (p5.windowHeight - p5.height) / 2;
        xyz.position(x, y);
        // Plant config
        p5.frameRate(60);
        p5.angleMode(p5.DEGREES);
    };

    let draw = (p5) => {
        p5.background("rgb(30,30,30)");
        let grow = 2;
        p5.randomSeed(genetics.randomseed);
        drawTree(p5, genetics, 0, 250, -400, grow);
    }
    return (
        // <div id="plantrender">
        <Sketch setup={setup} draw={draw} />
        // </div>
    )
}




// export function LoadTree(geneString) {
//     console.log("loading tree");
//     const tree = { "tree": "a tree" };
//     return tree;
// }