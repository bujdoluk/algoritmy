class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Sort array of points for X coordinate
function compareX(a, b) {
    let p1 = a;
    let p2 = b;
    return (p1.x - p2.x);
}

// Sort array of points for Y coordinate
function compareY(a, b) {
    let p1 = a;
    let p2 = b;
    return (p1.y - p2.y);
}

// distance between 2 points
function distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}

// bruteForce method to find smallest distance between 2 points
function bruteForce(P, n) {
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (distance(P[i], P[j]) < min) {
                min = distance(P[i], P[j]);
            }
        }
    }
    return min;
}

function stripClosest(strip, size, d) {
    let min = d;
    strip.sort(compareY);

    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size && (strip[j].y - strip[i].y) < min; j++){
            if (distance(strip[i], strip[j]) < min) {
                min = distance(strip[i], strip[j]);
            }
        }
    }
    return min;
};

function closestUtil(P, n) {
    if (n <= 3) {
        return bruteForce(P, n);
    }

    let mid = Math.floor(n / 2);
    let midPoint = P[mid];

    let dl = closestUtil(P, mid);
    let dr = closestUtil(P.slice(mid), n - mid);

    let d = Math.min(dl, dr);

    let strip = [];
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (Math.abs(P[i].x - midPoint.x) < d) {
            strip[j] = P[i];
            j++;
        }
    }

    return Math.min(d, stripClosest(strip, j, d));
};

function closest(P, n) {
    P.sort(compareX);
    return closestUtil(P, n);
};

// Driver code
let P = [new Point(2, 3), new Point(12, 30), new Point(40, 50), new Point(5, 1), new Point(12, 10), new Point(3, 4)];
let n = P.length;
console.log(`The smallest distance is ${closest(P, n)}`);
console.log("BruteForce result:", bruteForce(P, n));