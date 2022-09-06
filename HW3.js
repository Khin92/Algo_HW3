/*
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 
 */
function reverse (x){
    //return reverse number
    return ((x+"").split('').reverse().join(''));
}
console.log(reverse(12345));

/* 
2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
function palindrome(str){
    let newStr = str.replace(/[^a-z0-9]/gi,'')
    // console.log(newStr)
    let index = newStr.length-1
    for(let i=0; i<newStr.length; i++, index--){
        // console.log(newStr[i])
        // console.log(newStr[index])
        if(newStr[i]!=newStr[index]) return false;
    }
    return true;
}
console.log(palindrome('nurses run')) //true
console.log(palindrome('madam'))//true
console.log(palindrome('apple'))//false

/*
3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g 
 */
const combineStr = (str) =>{
    console.log(str)
    let result = []
    for(let i=0; i<str.length; i++){
        console.log(str[i])
        for(let j=i+1; j<str.length+1; j++){
            console.log(str[i])
            console.log(str.slice(i,j))
            result.push(str.slice(i,j))
        }
    }
    return result;
}

console.log(combineStr('dog'))

/*
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
 */
const alphabeticalOrder = (str) =>{
    return str.split('').sort().join('');
    
}
console.log(alphabeticalOrder("webmaster"))

/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
 */
const UppercaseFirstLetter = (str) =>{
    const resultStr = [];
    const letterArr = (str.split(' '));
    letterArr.forEach(el => {        
        let result = el.charAt(0).toUpperCase()+ el.slice(1);
        console.log(result);
        resultStr.push(result);
    });
    return resultStr.join(' ');
}
console.log(UppercaseFirstLetter('the quick brown fox'))

/*6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
*/

// const longestStr = (str) =>{
//     let result;
//     let obj = {}
//     const arrStr = str.split(' ');
//     console.log(arrStr)
//     arrStr.forEach(el =>{
//         obj[el] = el.length      
//     })
//     console.log(obj)
//     result = (Math.max(...Object.values(obj)))
//     return Object.keys(obj).find(key => obj[key]===result)
// }
const longestStr = (str) =>{
    let result;
    const arrStr = str.split(' ');
    console.log(arrStr)
    let acc = arrStr[0].length;
    console.log(acc);
    for(let i=0; i<arrStr.length; i++){
        if(arrStr[i].length>acc){
            result = arrStr[i];
            acc = arrStr[i].length;
            console.log(result,acc)
        }
    }
    return result;
}
console.log(longestStr('Web Development Tutorial Session'))

/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
*/
const vowelStr = (str) =>{
    const regex = ['a','e','i','o','u']
    let count = 0;
    const newStr = str.split(" ").join('');
    console.log(newStr)
    for(let i=0; i<newStr.length; i++){
        if(regex.includes(newStr[i])){
            count ++;
        }
    }
    return count;
}

console.log(vowelStr('The quick brown fox'))

/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
const primeNum = (num) =>{
    //greater than 1 
    //can be only divisible by itself and 1 and the rest cannot be divisor
    if(num<=1){
        return ('this is not prime number')
    }
    for(let i=2 ; i<num; i++){
        if(num%i === 0){
            return ('this is not prime number')
        }
    }
    return('Prime number')
}
console.log(primeNum(31))

/*
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/
const typeFunc = (arg) =>{
    return typeof(arg);
}
console.log(typeFunc(true));
console.log(typeFunc({name:'SuSu', age:12}))
console.log(typeFunc('this is string'))

/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
 */
const Matrix = (num) =>{
    let size = num;
    let arr;
    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){
            arr = Array(size).fill(Array(size).fill(0))
            
        }
    }
    console.log(arr)
}
Matrix(4);

/*
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 
 */
const findNum = (arr) =>{
    arr = arr.sort((a,b)=>(a-b));
    console.log (arr[1],arr[arr.length-2])
}
findNum([1,2,3,4,5,6,7,-5,-3])

/*
12. Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/
const perfectNum = (num) =>{
    let result = 0;
    for(let i=0; i<=num; i++){
        if(num % i === 0){
            result += i;
            // console.log(result,i)
        }
    }
    console.log(result)
    if(result/2 === num){
        return true;
    }
    return false;
}
console.log(perfectNum(28))

/*
13. Write a JavaScript function to compute the factors of a positive integer. 
*/
const factorNum = (num) =>{
    let result = [];
    for(let i=0; i<=num; i++){
        if(num%i ===0){
            result.push(i);
        }
    }
    return result;
}
console.log(factorNum(12));

/*
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1
*/
const coinAmount = (amount,coins) =>{
    let result = [];
    if(!coins) return [];
    let coinOption = coins.sort((a,b) =>(a-b))
    console.log(coinOption)
    while(amount>0){
        let acc = coinOption.pop();
        if(acc>amount || acc===undefined) continue;
        amount -= acc;
        coinOption.push(acc);
        result.push(acc);
    }
    return result;
}
console.log(coinAmount(46, [25, 10, 5, 2, 1]));

/*
15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
Accept b and n from the user and display the result.
*/
const exponentFunc = (base,power) =>{
    let result = 1;
    for(let i=0; i<power; i++){
        result *= base;
    }
    return result;
}
console.log(exponentFunc(2,5));

/*
16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"
*/
const findUniqueChar = (str) =>{
    let result = [];
    for(let i=0; i<str.length; i++){
        if(!result.includes(str[i])){
            result.push(str[i])
        }
    }
    return result.join('');
}
console.log(findUniqueChar("thequickbrownfoxjumpsoverthelazydog"))

/*
17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
*/
const numOfOccurences = (str) =>{
    let obj = {}
    for(let i=0; i<str.length; i++){
        console.log(str[i])
        if(!obj.hasOwnProperty(str[i])){
            obj[str[i]] = 1
            // console.log(obj)
        }
        else{
            obj[str[i]]++;     
        }
    }
    return obj;
    
}
console.log(numOfOccurences("apple"))
console.log(numOfOccurences("telephone"))


/*
18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
*/
const binarySearch = (arr, x, low=0, high=array.length-1) =>{
    if (low > high)
        return false 
    else {
        mid = (low + high) / 2 
        if (x == arr[mid])
            return mid
        else if (x > arr[mid])
            return binarySearch(arr, x, mid + 1, high)
        else                              
            return binarySearch(arr, x, low, mid - 1)
    }
        
}
const array = [3, 4, 5, 6, 7, 8, 9]
console.log(result = binarySearch(array, 8))

/*
19. Write a JavaScript function that returns array elements larger than a number. 
*/
const largeNum = (arr,num) =>{
    let result= []
    arr.forEach(el =>{
        if(el>num){
            result.push(el);
        }
        else{
            return ('Cannot find the numbers which is larger than the given number')
        }
    })
    return result;
}
console.log(largeNum([65, 16, 0, 6, 64, 1, 68],16))

/*
20. Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
const randomID = (id) =>{
    charlist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    stringID = '';
    for(let i=0; i<id; i++){
        stringID += charlist.charAt(Math.floor(Math.random()*charlist.length))
    }
    return stringID;
}
console.log(randomID(8))

/*
21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
*/
const combineSubset = (arr,length) =>{
    const subsets = [];
    for(let i of arr){
        let acc = subsets.filter(el => el.length<length).map(el =>[i,...el]);
        console.log(acc)
        subsets.push([i],...acc)
    }
    console.log(subsets)
    return subsets.filter(el => el.length===2)
}
console.log(combineSubset([1, 2, 3],2))


/*
22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3 
*/
const findLetter =(letter, str) =>{
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(letter===str[i]){
            count++;
        }
    }
    return count;
}
console.log(findLetter('o','microsoft.com'))

/*
23. Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
*/
const noRepeatChar = (str) =>{
    let obj = {}
    for(let i=0; i<str.length; i++){
        console.log(str[i])
        if(!obj.hasOwnProperty(str[i])){
            obj[str[i]] = 1
            // console.log(obj)
        }
        else{
            obj[str[i]]++;     
        }
    }
    let result = (Math.min(...Object.values(obj)))
    return Object.keys(obj).find(key => obj[key]===result)
    
}
console.log(noRepeatChar("abacddbec"))

/*
24. Write a JavaScript function to apply Bubble Sort algorithm. 
Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
 */
const bubbleSortFunc = (arr) =>{
    let arrLength = arr.length-1
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<(arrLength-i); j++){
            // console.log('i',arr[i],'j',arr[j],'j+1',arr[j+1])
            if(arr[j]<arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp                
            }            
        }
    }
    return arr;
}
console.log(bubbleSortFunc([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

/*
25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/
const Longest_Country_Name = (arr) =>{
    let result;
    let acc = arr[0].length;
    console.log(acc);
    for(let i=0; i<arr.length; i++){
        if(arr[i].length>acc){
            result = arr[i];
            acc = arr[i].length;
            console.log(result,acc)
        }
    }
    return result;
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))

/*
26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
*/
const noRepeatStr = (str) =>{
    let obj={}
    let uniqueStr = '';
    for(let i=0; i<str.length; i++){
        console.log(str[i])
        if(!obj.hasOwnProperty(str[i])){
            obj[str[i]] = 1
            // console.log(obj)
        }
        else{
            obj[str[i]]++;     
        }
    }
    console.log(obj)
    for(let key in obj){
        if(obj[key]===1){
            console.log(key)
            uniqueStr += key;
        }
    }
    return uniqueStr;
}
console.log(noRepeatStr("google.com"))
console.log(noRepeatStr("Example.com"))

/*
27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or 
longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string 
that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". 
The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", 
there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, 
namely, "aca" and "ada".In some applications it may be necessary to return all maximal palindromic substrings 
(that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
*/
const Palindrome = (str) =>{
    let longestStr = '';
    for(let i=0; i<str.length; i++){
        for(let j=1; j<str.length; j++){
            const substring = str.substring(i,j)
            console.log(substring)
            if(!palindrome(substring))continue;
            if(substring.length<=longestStr.length) continue;
            longestStr = substring;
        }        
    }
    return longestStr;
}
console.log(Palindrome('abracadabra'))

/*
28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
*/
const subtractTwo = num =>{
    return num-2;
}
const callbackFunc = (arr,callback) =>{
    let newArr = [];
    arr.forEach(el => {
        newArr.push(callback(el));
    });
    return newArr;
}

console.log(callbackFunc([3,4,5],subtractTwo))

/*
29. Write a JavaScript function to get the function name. 
 */
const func1 = () =>{}
console.log(func1.name);
