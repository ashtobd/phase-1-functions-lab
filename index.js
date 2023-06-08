function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return distance - 42;
    }
    else if (distance < 42) {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distance) {
    if (distance >= 42) {
        return (distance - 42) * 264;
    }
    else if (distance <= 42) {
        return (42 - distance) * 264;
    }
}

function distanceTravelledInFeet(block1, block2) {
    if (block1 > block2) {
        return (block1 - block2) * 264;
    }
    else {
        return (block2 - block1) *264;
    }
}

function calculatesFarePrice(block1, block2) {
    const travel = distanceTravelledInFeet(block1, block2);
    if (travel < 400) {
        return 0;
    }
    else if (travel <= 2000) {
        return (travel - 400) * .02;
    }
    else if (travel > 2000 && travel < 2500) {
        return 25;
    }
    else if (travel >= 2500) {
        return "cannot travel that far";
    }
}
