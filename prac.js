// let arr = [20, 30, 80, 100, 40];
// // displayArray(arr);

// // arr.push(1000);
// // displayArray(arr);

// // arr.push(2000, 3000, 4000);
// // displayArray(arr);

// let rv = arr.push(5000, 6000);
// // displayArray(arr);
// console.log(arr);

// function displayArray(arr){
//     console.log(arr + " = " + arr.length);
// }

// let arr = [20, 30, 80, 100, 40];
// displayArray(arr);

// arr.unshift(1000);
// displayArray(arr);

// arr.unshift(2000, 3000, 4000);
// displayArray(arr);

// let rv = arr.unshift(5000, 6000);
// displayArray(arr);
// console.log(rv);

// function displayArray(arr){
//     console.log(arr + " = " + arr.length);
// }

// let arr = [20, 30, 12, 17, 9, 18, 43, 64, 11, 47];
// let odd = [];
// let even = [];

// let i = 0;
// while(arr.length > 0){
//     let val = arr.shift();
//     if(val % 2 == 0){
//         even.push(val);
//     } else {
//         odd.push(val);
//     }
// }

// arr = even.concat(odd);
// displayArray(arr);
// displayArray(odd);
// displayArray(even);

// function displayArray(arr){
// //     console.log(arr + " = " + arr.length);
// // }


// // shallow copies
// let o1 = {
//     age: 100
// };
// let o2 = {
//     age: 200
// };
// let o3 = {
//     age: 300
// }

// let anarr = [o1, o2, o3];
// displayObjectArray(anarr);

// let scopy = anarr.slice();
// displayObjectArray(scopy);

// scopy[0].age = 110;
// displayObjectArray(anarr);
// displayObjectArray(scopy);

// function displayArray(arr){
//     console.log(arr + " = " + arr.length);
// }
// function displayObjectArray(arr){
//     let str = "";

//     for(let i = 0; i < arr.length; i++){
//         str += arr[i].age + ", ";    
//     }

//     console.log(str + ".");
// }

// let arr = [10, 20, 30, 40, 50, 60];
// let na = arr.slice(); // slice for cloning is fine for integer array becuase ints are value type

// displayArray(arr);
// displayArray(na);
// na[3] = 400;
// displayArray(arr);
// displayArray(na);

// function displayArray(arr){
//     console.log(arr + " = " + arr.length);
// }

// let arr = [10, 20, 30, 40, 50, 60];
// let na = arr.slice(); // slice for cloning is fine for integer array becuase ints are value type

// displayArray(arr);
// displayArray(na);
// na[3] = 400;
// displayArray(arr);
// displayArray(na);

// function displayArray(arr){
//     console.log(arr + " = " + arr.length);
// }

// let arr = [10, 20, 30, 40, 50];

// let na = arr.splice(2, 0, 300, 400, 500);

// displayArray(arr); // 10 20 300 400 500 50
// displayArray(na); // 30 40

// function displayArray(arr){
//     console.log(arr + " = " + arr.length);
// }

// Map is itself a fn
// Map takes as input a callback fn 
// The callback fn takes 3 parameter (v, i, oarr)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value
// Single value returned by each run of callback will be collected in a new array by map
// Map returns that new array
// length of returned array is equal to original array


// let arr = [2, 5, 9, 8, 15, 11, 6];
// let sqarr = arr.map(function(v, i, oarr){
//     console.log(v + "@" + i + "=[" + oarr + "]");
//     return v * v;
// });

// console.log(sqarr);

// let arr=[
//     "krishna malik",
//     "naman malik",
//     "namita malik",
// //     "ashna malik",
// //     "olive malik"
// // ];

// // let ans = arr.map(function(v,i,arr){
// //     let names = v.split(" ");
// //     let a = names[0][0] + "." + names[1][0];
// //     return a;
// // })
// // console.log(ans);


// let arr = [
//     {
//         gender: 'M',
//         age: 24
//     },
//     {
//         gender: 'F',
//         age: 34
//     },
//     {
//         gender: 'F',
//         age: 28
//     },
//     {
//         gender: 'M',
//         age: 74
//     },
//     {
//         gender: 'F',
//         age: 31
//     },
//     {
//         gender: 'M',
//         age: 47
//     },
//     {
//         gender: 'F',
//         age: 26
//     },
//     {
//         gender: 'M',
//         age: 47
//     },
//     {
//         gender: 'F',
//         age: 47
//     },
//     {
//         gender: 'F',
//         age: 19
//     },
//     {
//         gender: 'M',
//         age: 20
//     }
// ];

// // Use the map function to produce the below output
// // return an array with true and false for females between 20 and 30
// // let us say xyz corp wants to hire females between age >= 20 and <= 30

// let shortlist = arr.map(function (v, i, oarr) {
//     if (v.gender == 'F' && v.age >= 20 && v.age <= 30) {
//         return v;
//     }
// })
// console.log(shortlist);


// Array.prototype.myMap = function(callback){
//     let arr = this;
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         let val = arr[i];
//         let rv = callback(val,i,arr);
//         res.push(rv);
//     }
//     return res;
// }





// Array.prototype.myFilter = function(callback){
//     let arr = this;
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         let val = arr[i];
//         let rv = callback(val,i,arr);
//         if(rv==true){
//             res.push(val);
//         }  
//     }
//     return res;
// }

// let arr = [2, 50, 90, 8, 15, 110, 6];
// let oarr = arr.myFilter(function(v, i, oarr){
//     console.log(v + "@" + i + "[" + oarr + "]");
//     if(v % 2 == 1){
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(oarr);


// Array.prototype.mySome = function(callback){
//     let arr = this;
//     for(let i=0;i<arr.length;i++){
//         let val = arr[i];
//         let ans = callback(val,i,arr);
//         if(ans==true){
//             return true;
//         }
//     }
//     return false;
// }

// let arr = [
//     {name: "A", age: 14, gender: "M"}, 
//     {name: "B", age: 34, gender: "M"}, 
//     {name: "C", age: 34, gender: "F"}, 
//     {name: "D", age: 44, gender: "F"}, 
//     {name: "E", age: 44, gender: "M"}, 
//     {name: "I", age: 28, gender: "F"}, 
//     {name: "G", age: 36, gender: "M"}, 
//     {name: "H", age: 47, gender: "F"}
// ];

// // some takes each value 1 by 1 nd returns a true if every cb returns true
// // return false only if all cb return false

// // Is there a valid candidate (F and between 20 and 30)
// let isThereAnyValidCandidate = arr.some(function(v, i, oarr){
//     if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
//         return true;
//     } else {
//         return false;
//     }
// })

// console.log(isThereAnyValidCandidate);


// Array.prototype.myFind = function(cb){
//     let oarr = this;

//     for(let i = 0; i < oarr.length; i++){
//         let v = oarr[i];
//         let rv = cb(v, i, oarr);

//         if(rv == true){
//             return v;
//         }
//     }

//     return undefined;
// }


// Array.prototype.myFind = function(callback){
//     let arr = this;
//     for(let i=0;i<arr.length;i++){
//         let val = arr[i];
//         let res = callback(val,i,arr);
//         if(res==true){
//             return val;
//         }
//     }
// }

// let arr = [
//     {name: "A", age: 14, gender: "M"}, 
//     {name: "B", age: 34, gender: "M"}, 
//     {name: "C", age: 34, gender: "F"}, 
//     {name: "D", age: 34, gender: "F"}, 
//     {name: "E", age: 44, gender: "M"}, 
//     {name: "I", age: 38, gender: "F"}, 
//     {name: "G", age: 36, gender: "M"}, 
//     {name: "H", age: 47, gender: "F"}
// ];

// // find gives value against first true, if there is no true then undefined

// // First valid candidate (F and between 20 and 30)
// let fvc = arr.myFind(function(v, i, oarr){
//     if(v.gender == 'F'){
//         return true;
//     } else {
//         return false;
//     }
// })

// console.log(fvc);
// if(fvc != undefined){
//     console.log(fvc.name + "@" + fvc.age + "#" + fvc.gender);
// } else {
//     console.log("Not Found")
// }





// let arr = [10, 20, 30, 40, 50];

// let sum1 = arr.reduce(function(pv, cv, ci, oarr){
//     console.log(pv + "-" + cv + "-" + ci);
//     return pv + cv;
// })

// console.log(sum1);

// let sum2 = arr.reduce(function(pv, cv, ci, oarr){
//     console.log(pv + "-" + cv + "-" + ci);
//     return pv + cv;
// }, 5)

// console.log(sum2);
// // 5 10 0
// // 15 20 1
// // 35 30 2
// // 65 40 3
// // 105 50 4
// // 155


// Array.prototype.myReduce = function(callback,givenvalue){
//     let arr = this;
//     let pv;
//     if(givenvalue==undefined){
//         pv = arr[0];
//         for(let i=1;i<arr.length;i++){
//             let cv = arr[i];
//             pv = callback(pv,cv,i,arr);
//         }
//     }else{
//         pv = givenvalue;
//         for(let i=0;i<arr.length;i++){
//             let cv = arr[i];
//             pv = callback(pv,cv,i,arr);
//         }
//     }
//     return pv;
// }


// let arr = [51, 23, 37, 44, 73, 82, 97, 45];

// // count all primes using reduce
// let ans = arr.reduce(function(pv,cv,i,arr){
//     let flag = true;
    
//     for(let i=2;i*i<=cv;i++){
//         if(cv%i!=0){
//             flag = false;
//             break;
//         }
//     }
    
//     if(flag == true){
//         return pv+1;
//     }else{
//         return pv;
//     }
// },0);


// function f(x){
//     return x * x;
// }

// function g(x){
//     return x + 10;
// }

// function h(x){
//     return 2*x;
// }

// let farr = [f,g,h];
// let x = 10;

// farr.reverse();

// let res = farr.reduce(function(pv,cv,i,arr){
//     let ans = cv(pv);
//     return ans;
// },x);

// console.log(res);


// let a1 = [10,30,50,90];
// let a2 = [63,34,50,90,80,10,60];

// console.log(a2.includes(80));
// console.log(a2.includes(88));

// let inter1 = a1.filter(v => a2.includes(v));
// console.log(inter1);


// let arr2d = [
//     [10.50,70,80,90,100,30,60],
//     [11,50,75,85,90,100,34,60],
//     [10,51,70,80,90,100,30,60],
//     [11,50,75,85,92,100,34,60],
//     [10,50,70,80,90,100,30,61]
// ]

// let res = arr2d.reduce(function(pv,cv,i,arr){
//     let ans = pv.filter(v => cv.includes(v));
//     return ans;
// });
// console.log(res);

// let a1 = [10,50,90];
// let a2 = [63,34,50,90,80,10,60];

//     let res = a2.filter(v => a1.includes(v)==false);

//     let ans = a1.concat(res);

//     console.log(ans);

// let arr = [
//     {name: "A", age: 14, gender: "M"}, 
//     {name: "B", age: 34, gender: "M"}, 
//     {name: "C", age: 24, gender: "F"}, 
//     {name: "D", age: 44, gender: "F"}, 
//     {name: "E", age: 44, gender: "M"}, 
//     {name: "I", age: 28, gender: "F"}, 
//     {name: "G", age: 36, gender: "M"}, 
//     {name: "H", age: 47, gender: "F"}
// ]

//ques3: sum of squares of ages of all valid candidates = hw

// let sarr = ["hello", "bello", "bye", "there", "pep", "nados"];
// let narr = [21, 54, 12, 33, 98, 200, 76, 100, 11, 291, 34];

// // sort and reverse
// sarr.sort();
// console.log(sarr);

// sarr.reverse();
// console.log(sarr);

// // narr.sort(); // does an alphabetical sort
// // console.log(narr);

// narr.sort((a, b) => a - b); // numerical sort
// console.log(narr);

// narr.reverse();
// console.log(narr);

// let arr2 = [10, 20, [30, [50, [70, 80, 90], 60], 40], 100, [120, [150, [170, 180, 190], 160], 140, 200], 110];
// let res4 = arr2.flat(1); //?
// let myres4 = arr2.myFlat(1);
// console.log(res4);
// console.log(myres4);
// [10, 20, 30, [50, [70, 80, 90], 60], 40, 100, 120, [150, [170, 180, 190], 160], 140, 200, 110];

// let res5 = arr2.flat(2); //?
// console.log(res5);
// let myres5 = arr2.myFlat(2);
// console.log(myres5);
// [10, 20, 30, 50, [70, 80, 90], 60, 40, 100, 120, 150, [170, 180, 190], 160, 140, 200, 110];

// let res6 = arr2.flat(3);
// console.log(res6);
// let myres6 = arr2.myFlat(3);
// console.log(myres6);
// [10, 20, 30, 50, 70, 80, 90, 60, 40, 100, 120, 150, 170, 180, 190, 160, 140, 200, 110];

// let res7 = arr2.flat(Infinity);
// console.log(res7);
// let myres7 = arr2.myFlat(Infinity);
// console.log(myres7);


// let arr = [10, 20, 30, 40, 50, 60];
// arr.fill(5, 1, 4);
// console.log(arr);

// arr.fill(7, 2);
// console.log(arr);

// arr.fill(8);
// console.log(arr);

// let arr1 = [10, 20, 30, 40, 50, 60];
// arr1.copyWithin(2, 4, 5);
// console.log(arr1);

// let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// arr2.copyWithin(3, 0, 2);
// console.log(arr2);



// let arr1 = [10, 20, 30];
// console.log(arr1);

// let arr2 = Array.of(10);
// console.log(arr2);

// let arr3 = Array.of(10, 20, 30, 40, 50);
// console.log(arr3);

// let arr4 = Array.from("sumeet"); // array like objects (for instance strings, nodelist, arguments)
// console.log(arr4);

// let arr5 = arr4.map((ch, i) => i <= 1? String.fromCharCode(ch.charCodeAt(0) + 1): String.fromCharCode(ch.charCodeAt(0) - 1));
// console.log(arr5);

// // let str = arr5.join("");
// // console.log(str);

// let str1 = "s";
// console.log(str1.charCodeAt(0));


function outer(first) {
    console.log("Inside outer")
    return function inner(second) {
        console.log("Inside inner");
        return first * second;
    }
}
let rVal = outer(2);
console.log("Before calling rVal that contains inner");
let ans = rVal(4);
console.log(ans);
