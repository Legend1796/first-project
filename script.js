function swap(obj) {
  const res = {};

  Object.keys(obj).forEach(function (key) {
    res.obj[key] = key;
    console.log(newKey);
  });

  return res; // вернём преобразованный объект
}

const myObj = {
  first: 1,
  second: 2,
  third: 3
};

console.log(myObj); // { first: 1, second: 2, third: 3 }
console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }
