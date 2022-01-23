//string

let str = 'String ';
str += 'could be defined in single and double quote.';
console.log(str);

str = `This syntax is used in 
defining the 
multiline and 
varianle's such as "str" value = ${str} `;
console.log(str);

////
////string methods
////

//length
let len = str.length;
console.log('Above statement length is ' + len + ' characters.');

//slice(start,end)||slice(start)
let strSlice = str.slice(10, 20);
console.log('Slice of above statement from index 10 to 20 is ' + strSlice);

//substring(start,end)||substring(start)
let strSub = str.substring(10);
console.log('Sub string of above statement from index 10 is ' + strSub);

//substr(start,length)||substr(start)
strSub = str.substr(10, 20);
console.log(
  'Sub string of above statement from index 10 to 20 more character is ' +
    strSub
);

//replace
let statement = 'This is a simple statement.';
let replacedStatement = statement.replace('simple', 'advance');
console.log(statement, replacedStatement);

//toUppperCase(),toLowerCase(),concat(),trim(),chatAt(),charCodeAt(),split()
let text = 'HelLo';
let text1 = text.toUpperCase();
let text2 = text1.toLowerCase();
text = text.concat(' ', text1, ' ', text2);
console.log(text);

text = '         hello world       ';
console.log(text);
text = text.trim();
console.log(text);

let char = text.charAt(2);
console.log(char);
char = text.charCodeAt(2);
console.log(char);

let arr = text.split(' ');
console.log(arr);

////
////string search
////

//indexOf(),lastIndexOf(),startsWith(),endsWith()
console.log(statement);
console.log(statement.indexOf('is'), statement.indexOf('a'));
//returns first occurance value

console.log(statement.lastIndexOf('is'), statement.lastIndexOf('a'));
//returns last occurance

console.log(statement.startsWith('t'));
console.log(statement.endsWith('.'));

console.log(statement.search('is'));
//same as indexOf()
