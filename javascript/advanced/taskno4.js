function deepClone(value) {
  if (!value || typeof value !== "object") {
    return value;
  }
  
  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }
  
  return Object.keys(value).reduce((acc, key) => {
    acc[key] = deepClone(value[key]);
    return acc;
  }, {});
}
const original = {
  name: "amulya",
  age: 25,
  hobbies: ["reading", "cycling"],
  address: {
    city: "dubai",
    pincode: 12345
  }
};

const cloned = deepClone(original);

cloned.name = "amulya";
cloned.hobbies[0] = "being human";
cloned.address.city = "cant say sorry";

console.log("Original:", original);
console.log("Cloned:", cloned);

