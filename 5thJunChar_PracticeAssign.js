console.log(`===============Step:01=====================`);
console.log(`Program to Count character a`);

function charCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}
console.log(`"JavaScript": ${charCount("JavaScript")}`);
console.log(`"Do or Die": ${charCount("Do or Die")}`);
console.log( `"Learn with us, Job with us": ${charCount("Learn with us, Job with us")}`);
console.log(`"Empowering Dreams, Guaranteeing Futures"${charCount(  "Empowering Dreams, Guaranteeing Futures")}`);
console.log(`"Anny, My favorite fruit is Apple": ${charCount( "Anny, My favorite fruit is Apple")}`);
console.log(  `_______________________________________________________________________________________________________________`);


console.log(`===============Step:02=====================`);
console.log(`Program to Count vowels`);

function vowelsCount(str) {
    let count = 0;
    const vowels ='aeiouAEIOU';
    for (let i = 0; i <str.length; i++) {
      if(vowels.charAt(i)){
        count++;
      } 
    }
    return count;
}
console.log("\nVowels count:");
console.log(`"JavaScript": ${vowelsCount("JavaScript")}`);
console.log(`"HTML and CSS": ${vowelsCount("HTML and CSS")}`);
console.log(`"Language Of Internet": ${vowelsCount("Language Of Internet")}`);
console.log(`"I am UI Developer": ${vowelsCount("I am UI Developer")}`);
console.log(`"Do or Die": ${vowelsCount("Do or Die")}`);
console.log(  `_______________________________________________________________________________________________________________`);



console.log(`===============Step:03=====================`);
console.log(`Program to Count Words`);
function wordCount(str) {
   const words =str.split(' ');
   return words.length;
 
}
console.log("\nWord count:");
console.log(`"JavaScript The language of Internet": ${wordCount("JavaScript The language of Internet")}`);
console.log(`"Enhance Your Learning Journey with Exclusive Add-ons": ${wordCount("Enhance Your Learning Journey with Exclusive Add-ons")}`);
console.log(`"Beyond frameworks, Beyond Imagination": ${wordCount("Beyond frameworks, Beyond Imagination")}`);
console.log(`"I am passionate software developer": ${wordCount("I am passionate software developer")}`);
console.log(  `_______________________________________________________________________________________________________________`);

console.log(`===============END=====================`);