//Date()-get current date and time
const todayDate = new Date();
console.log("Today's date: " + todayDate);

//Date(year,month,day,hour,minute,second,millisecond)
const exampleDate = new Date(2018, 10, 14, 15, 12, 14, 0);
console.log(exampleDate);

//it can use less parameter--Date(year,month,...)
const dateOnly = new Date(2020, 07, 12);
console.log(dateOnly);

//Date(millisecond)-date are calculated from 1970+millisecond
milliSecond = new Date(1643164823101);
console.log(milliSecond);

//Date(string)-date are created from the string given
const date = new Date('2014 oct 11 12:47:46 004');
console.log(date);

//date.toUTCString()--changing to UTC formate
console.log(date.toUTCString());

//date.toDateString()--getting only date part of string (year,month,day)
console.log(date.toDateString());

//date.toISOString()--setting in ISO format
console.log(date.toISOString());

//getTime()-returns milisecond from 1970 jan 1
console.log(date.getTime());

//getFullYear()--returns year--getUTCFullYear--return UTC Year
console.log('Year:' + date.getFullYear());

//getMonth()-returns month 0-11--getUTCMonth()--to return UTC month
console.log('Month:' + date.getMonth());

//getDate()--getUTCDate()-return date and UTC date
console.log('Date:' + date.getDate());

//getHours()--getUTCHours()-return Hours and UTC hours
console.log('Hours:' + date.getHours());

//getMinutes()--getUTCMinutes()-return Minutes and UTC minutes
console.log('Minutes:' + date.getMinutes());

//getSeconds()--getUTCSeconds()-return second and UTC seconds
console.log('Seconds:' + date.getSeconds());

//getMilliseconds()--getUTCMilliseconds()-return milliseconds and utc milliseconds
console.log('Milliseconds:' + date.getMilliseconds());

//getDay()--getUTCDay()-returns day and UTC Day(0-6)
console.log('Day:' + date.getDay());

//---SET---

const d = new Date();
d.setFullYear(2020);
console.log(d);

d.setMonth(04);
console.log(d);

d.setDate(24);
console.log(d);

d.setHours(10);
console.log(d);

d.setMinutes(45);
console.log(d);

d.setSeconds(14);
console.log(d);
