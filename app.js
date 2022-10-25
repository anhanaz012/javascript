// alert("First Class")

// var a = "Hello World";
// var b = "Hello 123";
// document.write(a);
// console.log(a + b);


// var a = 10;
// var b = 10;
// var c = a + b;
// console.log(c)



//  ++a;
//  a++;
// --a;
// a--;

// var a = 10;
// var b = ++a;
// var b = --a;
// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;
// var total = (a + b) * c / d
// console.log(total)


// var a = parseInt(prompt("Enter Number"));
// // var b = parseInt(prompt("Enter Number"));
// var a = parseFloat(prompt("Enter Number"));
// var b = parseFloat(prompt("Enter Number"));
// var c = a + b;
// // document.write(a)
// console.log(c)

// var a  = 10;
// var b = a++;
// console.log(b);

// var a = parseInt(prompt("Enter Number"));
// if (a != 10) {
//     alert('Correct')

// } else {
//     alert('Incorrect')
// }


// var Day = prompt("Enter Day Name");
// if(Day == "Monday" || Day == 'monday'){
//     alert('Monday Morning')
// }
// else if (Day == "Tuesday" ){
//     alert("Tuesday Morning")
// }
// else if (Day == "Wednesday"){
//     alert("Wednesday Morning")
// }
// else if (Day == "Thursday"){
//     alert("Thursday Morning")
// }
// else if (Day == "Friday"){
//     alert("Friday Morning")
// }
// else if (Day == "Saturday"){
//     alert("Saturday Morning")
// }
// else{
//     alert("Sunday Morning")
// }




// var input = prompt("ENTER TIME");
// var a = prompt("ENTER AM/PM");
// if (input > 12) {
//     if (a == "AM" || a == 'am') {
//         document.write("NIGHT")
//     }
//     else {
//         document.write("DAY")
//     }

// } else {
//     document.write("Noting")
// }



// var arrray = ["10",20,30,40,50,60];
// arrray.pop();
// arrray.push("testing");
// arrray.shift();
// arrray.unshift(1000);
// arrray.splice(3,2,2345)
// var arr = arrray.slice(1,3)


// console.log(arr)



// for Loop
// var i;
// for (i = 1; i <= 10; i++) {
// console.log(i)
// document.write(i + "<br>")
// document.write('2' +" " + 'x' + i + "=" + i * 2 + "<br>")
// }


// var arr = ["Mango", "Apple", " Banana", "Strawberry", "Guava", "Orange"];
// // document.write(arr[0])
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>")
// }


// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

// console.log(fullNames)




// var a = "ffghfgdfhgdshfgshdgfhsfhdsh";
// // var b = a.toUpperCase();
// var b = a.indexOf('d')
// var b = a.lastIndexOf('d')
// console.log(b)


// var number = 1.9;
// var a = Math.round(number);
// var a = Math.ceil(number);
// var a = Math.floor(number);

// var a = Math.random()*100;
// var b = Math.round(a)
// var id = "AD" + Math.random().toString(11).slice(2)

// var a = "123"
// var b = "123"
// var c = Number(a) + Number(b)
// var c = a.toString() +  b.toString()



// var date = new Date("Oct 8, 2007");
// var final = date.toString();
// var a = final.slice(0,3)
// date.getTime()
// console.log(date)



// var today = new Date();
// var todaymili  = today.getTime()

// var dob = new Date("Oct 8, 2007")
// var dobmili = dob.getTime()

// var minus = todaymili - dobmili

// var cmp = minus / (1000 * 60 * 60 * 24 * 30 * 12)
// var acha = Math.floor(cmp)

// console.log(cmp)

// var b = today.getMilliseconds();
// console.log(b)



// function ALERT() {
// alert("Hello Alert")
// document.getElementById('h').innerHTML = "HELLO WORLD"

// }



// for (var i = 1; i <= 200; i = i + 10) {
    // document.write (i + "<br>")
    // for (var j = i; j < i + 10; j++) {
        // document.write(j + " ")

    // }
    // document.write("<br>")
    // console.log(i)
// }



// function first(){
// console.log("Hello World Testing")
// }
// first()


function add(a,b){
    console.log(a-b)
}
add(1,2);

