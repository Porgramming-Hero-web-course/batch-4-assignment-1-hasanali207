// Problem 8:
// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

{
  type keysValidation = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ) => boolean;

  const validateKeys: keysValidation = (obj, keys) => {
    for (const P of keys) {
      if (!(P in obj)) {
        return false;
      }
    }
    return true;
  };

  // Sample Input:
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  // Sample Output:
  // true;
}
