## 🌟 Significance of Union and Intersection Types in TypeScript

TypeScript provides **union** and **intersection** types to create flexible and precise type definitions. These types are essential for modeling complex data structures and enforcing stricter type checks in your codebase.

### 1. **Union Types (`|`)**

Union types allow a variable to hold values of **multiple possible types**. It is useful when a value could be one of several types.

#### **Example:**

```typescript
type Vehicle = "car" | "bike" | "truck";

function getVehicleType(vehicle: Vehicle): string {
  return `Selected vehicle type is: ${vehicle}`;
}

console.log(getVehicleType("car")); // ✅ Valid
console.log(getVehicleType("bike")); // ✅ Valid
// console.log(getVehicleType("bus")); // ❌ Error: Argument of type '"bus"' is not assignable to parameter of type 'Vehicle'.



### 1. **Intersection Types (`&`)**

Intersection types combine multiple types into one. A variable of an intersection type must satisfy all the constituent types.

#### **Example:**

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

console.log(
  `Admin Name: ${admin.name}, Email: ${admin.email}, Is Admin: ${admin.isAdmin}`
);
```
