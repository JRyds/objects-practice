// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     surname: "Smith",
// };
//
// console.log(user.age)
// console.log(user.name)


// //check if object is empty
// function isEmpty(obj) {
//     if (Object.keys(obj).length === 0) {
//         return "Object Is Empty"
//     } else {
//         return "Object Has Properties"
//     }
// }



// SUMS THE TOTAL IN SALARIES{} AND RETURNS ERROR IF EMPTY
// let salaries = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130
//  }
//
// function sum (salaries) {
//     let total = 0;
//
//     if (Object.keys(salaries).length === 0) {
//         return "No Salaries Recorded"
//     } else {
//         for (let salary in salaries) {
//             total = total + salaries[salary]
//         }
//     }
//     return total
// }
//
// console.log(sum(salaries))

// IF PROPERTY HAS NUMERIC VALUE, TIMES IT BY 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric (menu) {
//     for (let item in menu) {
//         if (Number.isInteger(menu[item]) ) {
//             menu[item] = menu[item] * 2;
//         }
//     }
// }