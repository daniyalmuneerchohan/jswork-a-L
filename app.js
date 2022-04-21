////Arrays and loop////

//Q1
// var arrName = ["daniyal" , 21 , "computer science"];
// console.log(arrName);

//Q2
// var a1 = [0,1,2,3];
// var a2 = [1,0,1,2];
// var a3 = [2,1,0,1];
// document.write(a1+"<br>"+a2+"<br>"+a3)

//Q3
// for(var i = 1 ; i <=10 ; i++ ){
//          console.log(i)
// }

//Q4
// var input = +prompt("write number");
// var length = +prompt("length");
// for(var i = 1 ; i <= length ; i++){
//     document.write(input + "x" + i + "=" + input * i + "<br />");
// }

//Q5
// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i = 0 ; i<=4 ; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }

//Q6
// document.write("<h1>Counting:</h1>")
// for(var i = 1 ; i <= 15 ; i++){
//     document.write(i + ",")
// }
// document.write("<h1>Reverse Counting:</h1>")
// for(var i = 15 ; i >= 1 ; i--){
//     document.write(i + ",")
// }
// document.write("<h1>Even:</h1>")
// for(var i = 1 ; i <= 20 ; i++){
//     if(i % 2 == 0){
//         document.write(i + ",")
//     }
// }
// document.write("<h1>Odd:</h1>")
// for(var i = 1 ; i <= 20 ; i++){
//     if(i % 2 != 0){
//         document.write(i + ",")
//     }
// }
// document.write("<h1>Series:</h1>")
// for(var i = 1 ; i <= 20 ; i++){
//     if(i % 2 == 0){
//         document.write(i + "k,")
//     }
// }

//Q7
// var input = prompt("Welcome! what do you want")
// var items = ["cake", "apple pie", "cookies", "chips", "patties"];
// var isMatch = false;

// for (var i = 0; i < items.length; i++) {
//   if (input === items[i]) {
//     alert(input + " is available at index " + items.length + " in our bakery");
//     isMatch = true;
//     break;
//   }
// }

// if (isMatch === false) {
//   alert("we are sorry " + input + " is not available in our bakery");
// }

//Q8
// var array = [24 , 53, 78, 91, 12]
// for(var i = 0 ; i <= array.length ; i++){
//     if(90 < array[i]){
//         document.write("<h1>Array items: " + array + "</h1>" + "<h1>The largest number is " + array[i] + "</h1>")
//     }
// }

//Q9
// var array = [24 , 53, 78, 91, 12]
// for(var i = 0 ; i <= array.length ; i++){
//     if(20 > array[i]){
//         document.write("<h1>Array items: " + array + "</h1>" + "<h1>The smallest number is " + array[i] + "</h1>")
//     }
// }

//Q10
// for(var i = 1 ; i <= 20 ; i++){
//     document.write(5 * i + ",")
// }

//////Arrays///////

//Q1
// var studentsName = [ ];

//Q2
// var studentsName = [ ];

//Q3
// var arrayString = ["A", "B", "C", "D", "E"];

//Q4
// var arrayNumbers = [1 , 2 , 3 , 4 , 5];

//Q5
// var arrayBoolean = [true , false];

//Q6
// var arrayMixed = ["A", "B", "C", "D", "E" , 1 , 2 , 3 , 4 , 5 , true , false];

//Q7
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. phil.", "phD"];
// document.write("<h1>Qualifications:</h1>" + "<h1>1) " + qualification[0] + "</h1>" + "<h1>2) " + qualification[1] + "</h1>" + "<h1>3) " + qualification[2] + "</h1>" + "<h1>4) " + qualification[3] + "</h1>" + "<h1>5) " + qualification[4] + "</h1>" + "<h1>6) " + qualification[5] + "</h1>" + "<h1>7) " + qualification[6] + "</h1>"+ "<h1>8) " + qualification[7] + "</h1>")

//Q8
// var stdName = ["Michael ", "John ", "Tony "];
// var score = [320,230,480];
// var totalMark = 500;
// var prtg1 = score[0] / totalMark * 100;
// var prtg2 = score[1] / totalMark * 100;
// var prtg3 = score[2] / totalMark * 100;
// var percentage = [
//     { percentage: prtg1 },
//     { percentage: prtg2 },
//     { percentage: prtg3 }
// ];
// for (i = 0; i < stdName.length; i++) {
//     document.write("Score of " + stdName[i] + "is " + score[i] + " " + "Percentage " + percentage[i].percentage + "%" + "<br>")
// }

//Q9
//part:a
// var colorName = [" Red", " Blue", " Purple", " Black"];
// document.write(colorName + "<br>");
// var userColor = prompt("Enter a start color ");
// colorName.unshift(userColor);
// document.write(colorName + "<br>");

// //part:b
// var endColor = prompt("Enter end color");
// colorName.push(endColor);
// document.write(colorName + "<br>");

// //part:c
// colorName.unshift("Green ", "Yellow");
// document.write(colorName + "<br>");

// //part:d
// colorName.shift();
// document.write(colorName + "<br>");

// //part:e
// colorName.pop();
// document.write(colorName + "<br>");

// //part:f
// colorName.splice(+prompt("enter index") , 0 , prompt("enter name"));
// document.write(colorName + "<br>");

// //part:g
// colorName.splice(+prompt("Enter delete index"), +prompt("Enter quantity of delete"));
// document.write(colorName);

//Q10
// var studentScore = [320, 230, 480, 120];
// document.write("<h1>Scores of Students: " + studentScore + "</h1>");
// var order = studentScore.sort();
// document.write("<h1>Ordered Scores of Students: " + order + "</h1>");

//Q11
// var cities = ["karchi ", "lahore ", "islamabad ", "quetta ", "peshawar"];
// document.write("<h1>Cities list: </br>" + cities + "</h1>");
// var copyCity = cities.slice(2,4);
// document.write("<h1>Selected cities list: </br>" + copyCity + "</h1>");

//Q12
// var arr = ["This ", "is ", "my ", "cat "];
// document.write("<h1>Array: </br>" + arr + "</h1>");
// var newSt = arr.join("");
// document.write("<h1>String: </br>" + newSt + "</h1>");

//Q13
// var store = ["keyboard ", "mouse ", "printer ", "monitor "];
// document.write("<h1>Devices </br>" + store + "</h1>");
// for(i = 0; i < store.length; i++){
//     document.write("<h1>out:<br>" + store[i] + "</h1>");
// }

//Q14
// var store = ["keyboard ", "mouse", "printer", "monitor"];
// document.write("<h1>Devices </br>" + store + "</h1>");
// for (i = 3; i >= 0; i--) {
//     document.write("<h1>out:<br>" + store[i] + "</h1>");
// }

//Q15
// var brands = ["Phone Manufacturers ", "Apple ", "Samsung ", "Motorola ", "Nokia ", "Sony ", "Haier "];
// document.write("<select>")
// document.write("<option>" + brands[0] + "</option>");
// document.write("<option>" + brands[1] + "</option>");
// document.write("<option>" + brands[2] + "</option>");
// document.write("<option>" + brands[3] + "</option>");
// document.write("<option>" + brands[4] + "</option>");
// document.write("<option>" + brands[5] + "</option>");
// document.write("<option>" + brands[6] + "</option>");
// document.write("</select>");












































    