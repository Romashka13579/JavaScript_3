// window.confirm("Are you ready to play?")
// window.confirm("The rules of the game are the following: you have to write three numers and then you will see a pannel width 9 symbols, three of them are numbers from 1 to 3, the place of numbers depends on your numbers. Oter symbels are 'X'")
// while(window.confirm("Are you ready to play?")){
//     var conf,n
//     var numbers = []
//     conf = prompt("Choose 3 different numbers from 1 to 9")
//     if(conf!=null){
//         for(var k = 1; k<=9; k++){
//             if(conf.indexOf(k) != -1){
//                 numbers[k-1] = Math.ceil(3*Math.random())
//             }
//             else{
//                 numbers[k-1] = "X"
//             }
//         }
//         for(var n = 1; n<=9; n++){
//             if(n%3 == 0){
//                 document.write(" "+numbers[n-1]+"<br>")
//             }
//             else{
//                 document.write(" "+numbers[n-1]+" ")
//             }
//         }
//         var counter1 = 0
//         var counter2 = 0
//         var counter3 = 0
//         var counter4 = 0
//         for(var f = 1; f<=9; f++){
//             if(numbers[f-1] == "1"){
//                 counter1++
//             }
//             else if(numbers[f-1] == "2"){
//                 counter2++
//             }
//             else if(numbers[f-1] == "3"){
//                 counter3++
//             }
//             else{
//                 counter4++
//             }
//         }
//         if(counter4 < 6){
//             document.write("<h4>YOU ARE CHEATING</h4>")
//         }
//         else if(counter1 == 3 || counter2 == 3 || counter3 == 3){
//             document.write("<h4>YOU WIN</h4>")
//         }
//         else if(counter1 == 2 || counter2 == 2 || counter3 == 2){
//             document.write("<h5>You have 2 similar nubers/Draw</h5>")
//         }
//         else{
//             document.write("<h5>You lose</h5>")
//         }
//         document.write("<br>")
//     }
//     else{
//         break
//     }
// }
// document.write("END")

// window.confirm("Try-catch")
// try{
//     var number1, number2, sum
//     number1 = prompt("Type first number")
//     number2 = prompt("Type second number")
//     sum = (number1+" + "+number2)
//     document.write(""+sum+" = "+eval(sum)+" ")
// }
// catch{
//     document.write("ERROR")
// }
// document.write("<br>END")

// var numbers = []
// var number = prompt("Type number")
// var length = number.length
// for(var k=0; k<length; k++){
//     numbers.push(number%10)
//     number = Math.floor(number/10)
//     document.write("- "+numbers[k]+" ")
// }
// document.write("<br>END")

var numbers = []
var strings = []
var objects = []
var txt = prompt("Type random numbers, sybols and txt")
var length = txt.length
for (var k = 0; k < length; k++) {
    var txt1 = txt % 10
    if(typeof txt1 == "number"){
        numbers.push(txt1)
    }
    else if(typeof txt1 == "string"){
        strings.push(txt1)
    }
    else{
        objects.push(txt1)
    }
    txt = Math.floor(txt / 10)
}
console.log(numbers)
numbers.sort()
strings.sort()
objects.sort()
document.write("<br>Numbers: ")
for (var k = 0; k < numbers.length; k++){
    document.write(numbers[k]+",")
}
document.write("<br>Strings: ")
for (var k = 0; k < numbers.length; k++){
    document.write(strings[k]+",")
}
document.write("<br>Objects: ")
for (var k = 0; k < numbers.length; k++){
    document.write(objects[k]+",")
}
document.write("- " + numbers[k] + " ")
document.write("<br>END")