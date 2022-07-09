interface Point {
    x: number;
    z: number;
    degree: number;
}
interface PointList {
    [prop: number]: Point;
    length: number;
}

// 交点
interface IntersectionPoint {
    x: number;
    z: number;
}

interface IntersectionPointList {
    [prop: number]: IntersectionPoint;
    length: number;
}

function calcIntersectionPoint(P1: Point, P2: Point): IntersectionPoint {
    let x1 = P1.x;
    let x2 = P2.x;
    let z1 = P1.z;
    let z2 = P2.z;
    let θ1 = (-P1.degree * Math.PI) / 180;
    let θ2 = (-P2.degree * Math.PI) / 180;
    let tanθ1 = Math.tan(θ1);
    let tanθ2 = Math.tan(θ2);
    let z = (z1 * tanθ1 - z2 * tanθ2 + x2 - x1) / (tanθ1 - tanθ2);
    let x = tanθ1 * z + x1 - z1 * tanθ1;
    let inter: IntersectionPoint = { x, z };
    return inter;
}

// n个点，计算出n*(n-1)/2个交点
function solve(P: PointList) {
    let intersections = [];
    for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
            intersections.push(calcIntersectionPoint(P[i], P[j]));
        }
    }
    return intersections;
}

// 取交点的平均坐标
function averagePoint(intersections: IntersectionPointList) {
    let x = 0,
        z = 0;
    let len = intersections.length;
    for (let i = 0; i < len; i++) {
        x += intersections[i].x;
        z += intersections[i].z;
    }
    return {
        x: x / len,
        z: z / len,
    };
}

export { calcIntersectionPoint, solve, averagePoint };
