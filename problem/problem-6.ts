// Problem 6:
// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

type TProfile = {
  name: string;
  age: number;
  email: string;
};

const updateProfile = (obj: TProfile, age: { age: number }): TProfile => {
  obj.age = age.age;

  return obj;
};

// Sample Input :
const myProfile: TProfile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
console.log(updateProfile(myProfile, { age: 26 }));

// // Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }
