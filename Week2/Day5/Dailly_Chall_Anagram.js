function anagram(str1, str2) {
    // 
    const cleanString= str =>
        str.replace(/[^a-z]/gi,'').toLowerCase().split('').sort().join('').trim();
    return cleanString(str1)===cleanString(str2);

}
console.log(anagram("listen", "silent"));        // should return True. 

