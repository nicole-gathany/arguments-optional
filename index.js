function addTogether() {
    let args = Array.from(arguments)
    console.log(args);
    return args.some(n => typeof n !== "number")? undefined : args.length >1? args.reduce((a, b) => (a += b), 0) : n => (typeof n ==="number" ? n + args[0] : undefined);

}
    
  

// function addTogether() {
//     var args = Array.from(arguments);
//     return args.some(n => typeof n !== "number")
//       ? undefined
//       : args.length > 1
//       ? args.reduce((acc, n) => (acc += n), 0)
//       : n => (typeof n === "number" ? n + args[0] : undefined);
//   }
  
  // test here
  addTogether(2, 3);
  
  
  console.log(addTogether(2, 3)) //should return 5.
  
  
  console.log(addTogether("http://bit.ly/IqT6zt")); //should return undefined.
  console.log(addTogether(2, "3")); //should return undefined.

  //these two are problems
console.log(addTogether(2)([3])); //should return undefined.  
console.log(addTogether(2)(3)); //should return 5.