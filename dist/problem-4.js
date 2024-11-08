"use strict";
// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
const calculateShapeArea = (shape) => {
    if (shape.shape === "circle") {
        const circleArea = Math.PI * shape.radius ** 2;
        return circleArea;
    }
    else {
        const rectangleArea = shape.width * shape.height;
        return rectangleArea;
    }
};
console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }));
