/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  let hm1={}
  let hm2={}
   for (let char of str1) {
    if(char in hm1){
      hm1[char]+=1
    }
    else{
      hm1[char]=1
    }
  }

  for (let char of str2) {
    if(char in hm2){
      hm2[char]+=1
    }
    else{
      hm2[char]=1
    }  }

  for (let key in hm1) {
    if (hm1[key] !== hm2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
