/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let c=0
    v=['a','e','i','o','u']
    if(str==' '){
      return 
    }
    for(let i=0;i<str.length;i++){
      if(v.includes(str[i].toLowerCase())){
        c+=1
      }
    }
    return c
}

module.exports = countVowels;