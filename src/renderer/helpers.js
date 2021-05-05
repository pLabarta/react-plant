export function makeHash(length) {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

export function generateGenetics(seedString) {
    // splits = ['ad','14','8f']
    let splits = seedString.toUpperCase().match(/.{1,2}/g);
    // decimal = [124,609,009,102]
    let decimal = [];
    splits.forEach(element => {
        decimal.push(parseInt(element, 36));
    });
    // normalized = [0.1,0.698,0.123]
    let normalized = [];
    decimal.forEach(element => {
        normalized.push(element / 1000);
    })

    let onUse = normalized.slice(0, 16);
    let genetics = {
        "stem": {
            "length": 35 + onUse[0] * 35,
            "thickness": 3 + onUse[1] * 20,
            "color": {
                "red": onUse[2] * 255,
                "green": onUse[3] * 255,
                "blue": onUse[4] * 255
            },
            "angle": 10 + onUse[8] * 35
        },
        "leaves": {
            "color": {
                "red": onUse[5] * 255,
                "green": onUse[6] * 255,
                "blue": onUse[7] * 255
            },
            "opacity": 50 + onUse[9] * 200
        },
        "randomseed": onUse[10] * 1000

    };
    return genetics
}


export function drawTree(p5, genetics, posX, posY, posZ, grow) {


    // Setup tree position
    p5.translate(posX, posY, posZ);

    // Save current position
    p5.rotateY(p5.frameCount);

    // Draw main branch
    let branchColor = p5.color(genetics.stem.color.red, genetics.stem.color.green, genetics.stem.color.blue);
    let grownBranchLength = genetics.stem.length * grow;
    let grownBranchThickness = genetics.stem.thickness * grow;

    p5.stroke(branchColor);
    p5.strokeWeight(grownBranchThickness * 0.4);
    p5.line(0, 0, 0, 0, -grownBranchLength * 1.5 - 5, 0);
    p5.translate(0, -grownBranchLength * 1.5, 0);
    p5.line()

    branch(p5, genetics, grownBranchLength * 0.7, grownBranchThickness * 0.4 * 0.6);
}



function branch(p5, genetics, len, wei) {

    const minBranchSize = 25;

    // if branch size is less than the minimun, it does not render
    if (len > minBranchSize) {

        const branchCount = 3;
        for (var i = 0; i < branchCount; i++) {

            p5.push();
            p5.rotateY(360 / branchCount * i);
            p5.rotateZ(p5.random(10, 90));
            p5.strokeWeight(wei);
            p5.line(0, 0, 0, 0, - len - 2, 0);
            p5.translate(0, - len, 0);
            branch(p5, genetics, len * 0.75, wei * 0.5);
            p5.pop();

        }

    } else {

        // position leaf
        p5.translate(0, 0, 0);

        // leaf setup
        let leavesColor = p5.color(genetics.leaves.color.red, genetics.leaves.color.green, genetics.leaves.color.blue, genetics.leaves.opacity);
        p5.stroke(genetics.stem.color.red, genetics.stem.color.green, genetics.stem.color.blue, genetics.leaves.opacity)
        p5.fill(leavesColor);
        p5.strokeWeight(0.5);

        // draw leaf
        p5.ellipse(0, 0, 10, 30);
    }
}