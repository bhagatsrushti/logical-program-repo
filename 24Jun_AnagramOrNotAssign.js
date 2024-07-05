console.log(`=========24Jun_AnagramOrNotAssignment=============`);

console.log(`==============Step:01================`);

// function isAnagram(str1,str2) {
//     function sortString(str) {
//         return str.split(" ").sort().join(" ");
        
//     }
//     if(sortString(str1)===sortString(str2)){
//         console.log(`"${str1}" and "${str2}" are anagram.`);
//     }else{
//         console.log(`"${str1}" and "${str2}" are not anagram.`);
//     }
// }

// isAnagram("vile", "evil");    
// isAnagram("silent", "listen");
// isAnagram("gram", "aram");    
// isAnagram("mom", "tom");  


function isAnagram(str1, str2) {
    function sortString(str) {
        return str.split('').sort().join('');
    }

    if (sortString(str1) === sortString(str2)) {
        console.log(`"${str1}" and "${str2}" are anagrams.`);
    } else {
        console.log(`"${str1}" and "${str2}" are not anagrams.`);
    }
}

isAnagram("vile", "evil");   
isAnagram("silent", "listen"); 
isAnagram("gram", "aram");   
isAnagram("mom", "tom");     

console.log(`==============End================`);

