/* exercise 1
    write a js program to check two numbers and return true if 
    one of the number is 100 or if the sum o the two number i 100 
*/

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(isEqualTo100(1, 2));
console.log(isEqualTo100(100, 4));
console.log(isEqualTo100(70, 30));
console.log(isEqualTo100(2, 100));

/* Exercise 2
    write a javascript progra toget an extension of a filename
*/
const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html"));
console.log(getFileExtension("webpack.config.js"));
text = "index.html";
console.log(text.lastIndexOf("."));

/* Exercise 3
    write js program to replace every charechter in a given string
    with the charachter folowing it in the alphabet
*/

const moveCharsForword = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
        .join("");
    
console.log(moveCharsForword('abcd'))

/* Exercise 4
    get the current date 
    expected:
    mm-dd-yyyy
*/

const formatDate = (date = new Date()) => {
    const days = date.getDay();
    const months = date.getMonth() +1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatDate())

/* Exercise 5 
    write a javascript program to to crerate a new string adding a "new!* in front of
    given string if the given string begins with new already then return the origional
    string
*/

const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

    console.log(addNew('Offers'))



