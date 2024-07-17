// let collection = [
//   {
//     name: "Tolu",
//     age: 40,
//   },
//   {
//     name: "Tolu",
//     age: 35,
//   },
//   {
//     name: "Tolu",
//     age: 5,
//   },
//   {
//     name: "Tolu",
//     age: 66,
//   },
//   {
//     name: "Tolu",
//     age: 31,
//   },
//   {
//     name: "Tolu",
//     age: 70,
//   },
// ];
// let highestNum = Math.max(collection.age);

// console.log(parseInt(highestNum));
// let sum = 0;
// let arraySum = [];
// for (let i = 0; i < collection.length; i++) {
//   sum += collection[i].age;
//   arraySum.push(sum);
// }
// console.log(arraySum);

// let container = document.querySelector(".container");

// let url = "https://fakestoreapi.com/products/categories";
// let products = async () => {
//   let displayFetch = await fetch(url);
//   let responses = await displayFetch.json();
//   console.log(responses);

//   for (let i = 0; i < responses.length; i++) {
//     let div = document.querySelector(".ul");
//     div.innerHTML += `
//     <li><a href="">${responses[i]}</a><li>
//     `;

let OBJS = [
    {
      name: "",
      url: `https://fakestoreapi.com/products/category/jewelery`,
    },
    {
      name: "",
      url: `https://fakestoreapi.com/products/category/jewelery`,
    },
    {
      name: "",
      url: `https://fakestoreapi.com/products/category/jewelery`,
    },
    {
      name: "",
      url: `https://fakestoreapi.com/products/category/jewelery`,
    },
  ];
  //     let names = responses[i];
  //     OBJS.map((obj) => {
  //       obj.name = names;
  //     });
  //     for (let obj of OBJS) {
  //       try {
  //         let links = obj.url;
  //         let jewelPage = async () => {
  //           let responses = await fetch(links);
  
  //           let finalPage = await responses.json();
  //           console.log(finalPage);
  //         };
  //         await jewelPage();
  //       } catch (error) {
  //         console.log("the error is ", error);
  //       }
  //     }
  //     console.log(OBJS);
  //   }
  // };
  // products();
  
  // let object = [
  //   { name: "David", educationStatus: "Masters" },
  //   { name: "David", educationStatus: "Masters" },
  //   { name: "Tope", educationStatus: "Phd" },
  // ];
  
  // for (let i = 0; i < object.length; i++) {
  //   if (object[i] === object.length) {
  //     console.log(object);
  //   }
  // }
  
  let object = [
    { name: "David", educationStatus: "Masters" },
    { name: "David", educationStatus: "Masters" },
    { name: "Tope", educationStatus: "Phd" },
    { name: "Tope", educationStatus: "Phd" },
    { name: "Tope", educationStatus: "Phd" },
    { name: "Tpe", educationStatus: "Phd" },
  ];
  let set = new Set();
  let identifier = object.filter((items) => {
    let cocat = `${items.name} and ${items.educationStatus}`;
    if (set.has(cocat)) {
      return false;
    } else {
      set.add(cocat);
      return true;
    }
  });
  console.log(set);
  console.log(identifier);
  
  let arr = [2, 3, 4];
  let [x, y, z] = arr;
  console.log(x, y, z);
  
  let rest = [
    {
      name: "Alice",
      location: "Akure",
      categories: ["ibadan", "lagos", "Akure"],
    },
  ];
  let a = 50;
  let b = 90;
  [a, b] = [b, a];
  console.log(a, b);
  
  let colors = ["red", "blue", "green", "purple", "gray"];
  let [first, second, third, ...remaining] = colors;
  console.log(first, second, third);
  
  let getCoodinates = () => {
    return [1, 2];
  };
  let [c, d] = getCoodinates();
  console.log(x);
  console.log(y);
  
  let person;
  const { name = "ayo", age = 10 } = person || {};
  console.log(name);
  
  let numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  
  let reverse = [1, 2, 3, 4, 5];
  let emptyArr = reverse.reverse();
  console.log(emptyArr);
  
  let duplicate = [1, 2, 1, 2, "David", "Dave", "David"];
  let newSet = new Set();
  let identify = duplicate.filter((items) => {
    let concat = `${items}`;
    if (set.has(concat)) {
      return false;
    } else {
      set.add(concat);
      return true;
    }
  });
  console.log(identify);
  
  let twoArr = (same, different) => {
    let arr1 = [1, 2, 3, 9, 8, 4, "dave"];
    let arr2 = [1, 8, 9, 7, "david"];
    let sameDiv = [];
    let differentDiv = [];
  
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.includes(arr2[i])) {
        sameDiv.push(arr2[i]);
      }
    }
    for (let j = 0; j < arr1.length; j++) {
      if (!arr2.includes(arr1[j])) {
        differentDiv.push(arr1[j]);
      }
    }
    for (let u = 0; u < arr2.length; u++) {
      if (!arr1.includes(arr2[u])) {
        // console.log("i love you");
        differentDiv.push(arr2[u]);
      }
    }
    same(sameDiv);
    different(differentDiv);
  };
  twoArr(
    (sameDiv) => {
      console.log(`same arrays : ${sameDiv}`);
    },
    (differentDiv) => {
      console.log(`diffrent arrays : ${differentDiv}`);
    }
  );
  
  function countCharacters(str) {
    const charCount = {}; // Object to store character counts
  
    // Loop through each character in the string
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++; // Increment count if character exists in object
      } else {
        charCount[char] = 1; // Initialize count to 1 for new character
      }
    }
  
    return charCount; // Return the object with character counts
  }
  
  // Example usage:
  const result = countCharacters("hfffffffffffffffffffffello");
  console.log(result);
  let empty = {};
  function obj(str) {
    for (let i of str) {
      if (empty[i] != null) {
        // return false
        empty[i]++;
        console.log(true);
      } else {
        empty[i] = 1;
        console.log(false);
      }
    }
  
    return empty;
  }
  const letSee = obj("kjnfjkjkjmV fn anxnVIUrn");
  console.log(letSee);
  
  
  
  
  
  