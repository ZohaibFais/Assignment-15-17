//Q1.
// var stNames = [];

//Q2.
// var stNames = new Array();

//Q3.

// var name = ["" , ""]

//Q4.

// var num = [0, 0]

//Q5.

// var bool = [true , false]

//Q6.

// var ary = ["Zohaib",20, true]

//Q7.

// var network = ["Ufone", "Zong","Telenor", "Warid"];

//Q8.

// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// var eduLength = education.length;

// document.write("<ul>");

// for (var i = 0; i < eduLength; i++) {
//     document.write((i + 1) + ")" + " "+ education[i] + "<br>");
// }

// document.write("</ul>");

//Q9.

// var movies = ["Avengers: Age of Ultron" , "Spectre", "Jurassic World", "Inside Out"]

// var movLength = movies.length

// document.write("<h1>Top movies of 2015 </h1>")

// document.write("<ul>");

// for (var i = 0; i < movLength; i++) {
//     document.write((i + 1) + ")" + " "+ movies[i] + "<br>");
// }
// document.write("</ul>");

// document.write("Length of the array: " ,movLength)

//Q10.

var cars = ["Audi", "Volvo", "Ford","Lamborghini" ]
var carsL = cars.length

document.write("<h1>Favorite Cars </h1>")
for( var i = 0; i < carsL; i++){
    document.write(cars[i])
}

document.write("<br>")
document.write("First index of the array: ", 0)
document.write("<br>")
document.write("Car at first index of the arry: ", cars[i=0])
document.write("<br>")
document.write("Last index of the array: ", carsL-1)
document.write("<br>")
document.write("Cars at last index of the array: ", cars[carsL-1])