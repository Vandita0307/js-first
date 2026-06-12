//dates

let mydate=new Date();
// console.log(mydate.toString());//day,month,date,yeat,time
// console.log(mydate.toDateString());//day,month,date,year
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());//2026-06-12Time
// console.log(mydate.toLocaleDateString());//6/12/2026
// console.log(mydate.toLocaleString());//date+time
// console.log(mydate.toLocaleTimeString());//6:28:16PM

//date is an object
//console.log(typeof mydate);


//MONTH START WITH ) INDEX
let myCreatedDate=new Date(2026,6,12);//JULY
//let myCreatedDate=new Date("2023-01-14");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

//  important to convert millisec time to sec
//console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getMonth())
console.log(newDate.getDay());

//important
console.log(newDate.toLocaleString('default',{weekday:"narrow"
}));