# 🌟 Significance of Union and Intersection Types in TypeScript

TypeScript provides **union** and **intersection** types to create flexible and precise type definitions. These types are essential for modeling complex data structures and enforcing stricter type checks in your codebase.

## Union and Intersection Types in TypeScript

Union types allow a variable to hold values of **multiple possible types**. They are useful when a value could be one of several types.

```typescript

type Vehicle = "car" | "bike" | "truck";

function getVehicleType(vehicle: Vehicle): string {
  return `Selected vehicle type is: ${vehicle}`;
}

console.log(getVehicleType("car")); // ✅ Valid
console.log(getVehicleType("bike")); // ✅ Valid
// console.log(getVehicleType("bus")); // ❌ Error: Argument of type '"bus"' is not assignable to parameter of type 'Vehicle'.


## Example: Intrsection (&)

type User = {
  name: string;
  email: string;
};

type Admin = {
  isAdmin: boolean;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Hasan Ali",
  email: "hasan@example.com",
  isAdmin: true,
};

console.log(`Admin Name: ${admin.name}, Email: ${admin.email}, Is Admin: ${admin.isAdmin}`);
```
