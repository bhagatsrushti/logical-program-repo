console.log(`=========Step:01========`);
console.log(`Que1. WAP find length or total number of character of given strings:`);

const str1 ="Hello World!";
const str2 ="Javascript is the language of Internet";

console.log(`given 1st string of length is:`);
console.log((str1.length));
console.log(`given 2st string of length is:`);
console.log((str2.length));
console.log(`_______________________________________________________________________________________________________`);

console.log(`=========Step:02========`);
console.log(`Que2.WAP Last Character of Given String:`);

const string =[
    "Hey, my friend, Programming Language",
    "I am learning logical programs",
    "Angular",
    
];

string.forEach(str=> {
    console.log(str[str.length -1]);
});
console.log(`_______________________________________________________________________________________________________`);

console.log(`=========Step:03========`);
console.log(`Que3.WAP First Character of Given String:`);

const str3 ="React";
const str4 ="Elon Musk";
const str5 ="Apple Founder stew job";


console.log(`given string of 1st character"React"is:`);
console.log(str3[0]);

console.log(`given string of 1st character"Elon Musk" is:`);
console.log(str4[0]);

console.log(`given string of 1st character"Apple Founder stew job" is:`);
console.log(str5[0]);
console.log(`_______________________________________________________________________________________________________`);

console.log(`=========Step:04========`);
console.log(`Que4.WAP Capitalize the first letter of each word:`);

function capitalizeWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWord("language of internet")); 
console.log(capitalizeWord("Elon musk - The tycoon of decade")); 
console.log(capitalizeWord("My Life My Rule"));
console.log(capitalizeWord("logical programming question SET")); 

console.log(`_______________________________________________________________________________________________________`);

console.log(`=========Step:05========`);
console.log(`Que5.WAP Given string contain UI or Not:`);


const str6 ="React - UI Developer";
const str7 ="UI Developer";
const str8 ="Frontend and Backend Developer";
const str9 ="MEAN or MERN - UI Developer";


function containsWordUI(str) {

    return str.includes('UI');
}

console.log(containsWordUI(str6)); 
console.log(containsWordUI(str7));
console.log(containsWordUI(str8));
console.log(containsWordUI(str9));
console.log(`_______________________________________________________________________________________________________`);


console.log(`=========Step:06========`);
console.log(`Que6.WAP split a string into an array substring:`);
let fruits = "apple, orange, banana";
let people = "Stew, Bill, Jenny, Elon";
let currencies = "Rupees, Dollar, Krone, Pound, Dinar";

console.log(fruits.split(', ')); 
console.log(people.split(', ')); 
console.log(currencies.split(', ')); 
console.log(`_______________________________________________________________________________________________________`);