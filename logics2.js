//based on string handelling and string manupulation

/* exercise 1:
    write a js code to create new string from a given string  taking the firt
    three characters of a string and adding them together. the string length must be three
    or more if not, the origional string is must return
*/

const makeNewString = (str) =>
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString('abc'))
console.log(makeNewString('abcdefg'))
console.log(makeNewString('abc123abc123'))

console.log(makeNewString('ab'))

/* exercise 2
   write a code to extract the first half of a string 
   of even length */
const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf('tejas'))
console.log(firstHalf('tejasrautsurendra/'))

/* exercise 3
   code to concatinate two strings except there first character*/

const concatinate = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(concatinate('tejas','raut'))


/*exercise 4
given two value which one is nearest to 100
*/
const closestTo100 = (a,b) => (100-a)<(100-b)? a : b
console.log(closestTo100(90, 70))
//OR
const nearestTo100 = (a, b) => {
    if (100 - a < 100 - b) {
        return a
    }
    else {
        return b
    }
}
console.log(nearestTo100(90,50))
console.log(nearestTo100(100, 120))

/* exercise 5
    code to check a given string containes  2 to 4
    occurances of a sring specified character
*/ 
const countChars = (str, char) =>
    str.split('').filter(ch => ch === char).length

    console.log(countChars('tejas'))
const containes2To4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(containes2To4('jjjhgloojjh','o'))
// console.log(containes2To4('jjoojhgljjh','o'))
// console.log(containes2To4('jjoojhgloojjh','o'))
// console.log(containes2To4('jjoojooohgljjh','o'))
    








