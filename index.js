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

// var cars = ["Audi", "Volvo", "Ford","Lamborghini" ]
// var carsL = cars.length

// document.write("<h1>Favorite Cars </h1>")
// for( var i = 0; i < carsL; i++){
//     document.write(cars[i] + " ")
// }

// document.write("<br>")
// document.write("First index of the array: ", 0)
// document.write("<br>")
// document.write("Car at first index of the arry: ", cars[i=0])
// document.write("<br>")
// document.write("Last index of the array: ", carsL-1)
// document.write("<br>")
// document.write("Cars at last index of the array: ", cars[carsL-1])

//Q11.

// var names = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];

// var percentages = [];
// var totalMarks = 500;

// for (var i = 0; i < scores.length; i++) {
//     var individualPercentage = (scores[i] / totalMarks) * 100;
//     percentages.push(individualPercentage + "%");
// }

// for (var i = 0; i < names.length; i++) {
//     document.write("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + percentages[i] + "<br>");
// }

//Q12.

// var colors = ["red", "blue", "yellow"]
// document.write("Initial array: ")
// document.write(colors)
// document.write("<br>")
// document.write("<br>")

// var colorToStart = prompt("Enter color to add to the beginning: ")
// colors.unshift(colorToStart)
// document.write("Array after color added to beginning: ")
// document.write("<br>")
// document.write(colors)
// document.write("<br>")
// document.write("<br>")

// var colortoEnd = prompt("Enter color to add to the end: ")
// colors.push(colortoEnd)
// document.write("Array after color added to end: ")
// document.write("<br>")
// document.write(colors)
// document.write("<br>")
// document.write("<br>")

// colors.unshift("gray","black")
// document.write("After adding two more colors to start: ")
// document.write("<br>")
// document.write(colors)
// document.write("<br>")
// document.write("<br>")

// colors.shift()
// document.write("After removing a color from start: ")
// document.write("<br>")
// document.write(colors)
// document.write("<br>")
// document.write("<br>")

// colors.pop()
// document.write("After removing a color from end: ")
// document.write("<br>")
// document.write(colors)
// document.write("<br>")
// document.write("<br>")

// var i = parseInt(prompt("Enter the index at which you want to add color:  "))
// var newColor = prompt("Enter color to add at your desired index: ")
// colors.splice(i,0,newColor)
// document.write("New color at your desired index:")
// document.write("<br>")
// document.write(colors)
// document.write("<br>")
// document.write("<br>")

// var index = parseInt(prompt("Enter the index from which you want to start deleting colors: "))
// var deleteColors = parseInt(prompt("Enter number of colors you want to start deleting: "))
// colors.splice(index,deleteColors)

// document.write("Array after deleting from your given index: ")
// document.write("<br>")
// document.write(colors)

//Q13.
// var scores = [320, 230, 480, 120]
// document.write("Scores of Students: ")
// document.write(scores)
// document.write("<br>")
// document.write("<br>")

// document.write("Ordered Scores of Students: ")
// scores.sort()
// document.write(scores)

//Q14.

// var fruits = ["strawberry", "apple", "orange", "banana"]
// document.write("Fruits list:")
// document.write("<br>")
// document.write(fruits)

// document.write("<br>")
// document.write("<br>")

// fruits.sort()
// document.write("Ordered fruits list: ")
// document.write("<br>")
// document.write(fruits)

//Q15.
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]

// document.write("Cities List: ")
// document.write("<br>")
// document.write(cities)

// var selectedCities = []

// for (var i = 2; i <4; i++){
//     selectedCities.push(cities[i])
// }
// document.write("<br>")
// document.write(selectedCities)

//Q16.

// var arr = ["This " , "is ", "my ", "cat"]
// document.write("Array ")
// document.write("<br>")
// document.write(arr)
// document.write("<br>")
// var string = arr.join("", arr)
// document.write(string)

// Q17.

// var devices = ["keyboard", "mouse", "printer", "monitor"]
// document.write(devices)
// document.write("<br>")
// document.write("<br>")

// document.write("Out:")
// document.write("<br>")
// var deviceRemove = devices.shift()
// document.write(deviceRemove)
// document.write("<br>")
// document.write("<br>")

// document.write("Out:")
// document.write("<br>")
// var deviceRemove = devices.shift()
// document.write(deviceRemove)
// document.write("<br>")
// document.write("<br>")

// document.write("Out:")
// document.write("<br>")
// var deviceRemove = devices.shift()
// document.write(deviceRemove)
// document.write("<br>")
// document.write("<br>")

// document.write("Out:")
// document.write("<br>")
// var deviceRemove = devices.shift()
// document.write(deviceRemove)
// document.write("<br>")
// document.write("<br>")

//Q18.
// var devices = ["keyboard", "mouse", "printer", "monitor"]
// document.write(devices)
// document.write("<br>")
// document.write("<br>")

// document.write("Out:")
// document.write("<br>")
// var deviceRemove = devices.pop()
// document.write(deviceRemove)
// document.write("<br>")
// document.write("<br>")

// document.write("Out:")
// document.write("<br>")
// var deviceRemove = devices.pop()
// document.write(deviceRemove)
// document.write("<br>")
// document.write("<br>")

// document.write("Out:")
// document.write("<br>")
// var deviceRemove = devices.pop()
// document.write(deviceRemove)
// document.write("<br>")
// document.write("<br>")

// document.write("Out:")
// document.write("<br>")
// var deviceRemove = devices.pop()
// document.write(deviceRemove)
// document.write("<br>")
// document.write("<br>")

//Q19.

// var manufacturers = ["Apple",  "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write("<select>");

// for (var i = 0; i < manufacturers.length; i++) {
//     document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
// }


//Q20.
// var ary = [[],[],[]]

//Q21.

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
