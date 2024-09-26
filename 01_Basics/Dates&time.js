let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2024,0,6);
console.log(myCreatedDate.toDateString())

let myTimeStamp  = Date.now
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // THese values come in mili sec
// console.log(Math.floor(Date.now()/1000)); // Gives value in Seconds, using the Math fucntion we eliminted the decimals

let newDate = new Date()
console.log(newDate.getMonth);

newDate.toLocaleString('default',{weekday : "long"})






