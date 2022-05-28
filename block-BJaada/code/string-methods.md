Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: none
   - Return: the string passed in uppercase
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); //"ARYA STARK"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase(); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = 'Starks';
     houseName.toUpperCase(); // "STARKS"
     ```
   - `toUpperCase` method returns the value of the string converted to uppercase. 



3. `toLowerCase`

   - Parameter: none
   - Return: the string passed in lowercase
   - Example:
     ```js
     let name = 'ARYA STARK';
     name.tolowerCase(); //"arya stark"
     let sentance = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
     sentance.tolowerCase(); // "a quick brown fox jumped over a lazy dog"
     let houseName = 'Starks';
     houseName.tolowerCase(); // "starks"
     ```
   - `toLowerCase` method returns the value of the string converted to lowercase. 




4. `trim`

   - Parameter: none
   - Return: the string stripes of white space from both it's beginning and end.
   - Example:
     ```js
     let name = '      Arya Stark       ';
     name.totrim(); //"Arya Stark"
     let sentance = '       I am a programmer         ';
     sentance.totrim(); // "I am a programmer"
     let houseName = '         Starks                       ';
     houseName.totrim(); // "Starks"
     ```
   - `totrim` method returns the value of the string by removing extra spaces from start and end of the string.




5. `trimEnd`

   - Parameter: none
   - Return: the string stripes of white space from the end.
   - Example:
     ```js
     let name = '      Arya Stark       ';
     name.trimEnd(); //"      Arya Stark"
     let sentance = '       I am a programmer         ';
     sentance.trimEnd(); // "       I am a programmer"
     let houseName = 'Starks                       ';
     houseName.trinEnd(); // "Starks"
     ```
   - `trimEnd` method returns the value of the string by removing extra spaces from end(right side) of the string.





6. `trimStart`

   - Parameter: none
   - Return: the string stripes of white space from the beginning.
   - Example:
     ```js
     let name = '      Arya Stark       ';
     name.trimStart(); //"Arya Stark       "
     let sentance = '       I am a programmer         ';
     sentance.trimStart(); // "I am a programmer         "
     let houseName = '           Starks';
     houseName.trinStart(); // "Starks"
     ```
   - `trimStart` method returns the value of the string by removing extra spaces from start(left side) of the string.






7. `concat`

   - Parameter: accepts one or more strings to conatenate it.
   - Return: a new string containing the combined text of the string provided.
   - Example:
     ```js
     let firstName = 'Arya';
     let lastName = 'Stark';
     firstName.concat(' ', lastName ); //"Arya Stark"
     let firstName = 'Arya';
     let lastName = 'Stark';
     firstName.concat(lastName ); //"AryaStark"
     let firstName = 'Arya';
     let lastName = 'Stark';
     let description = 'Programmer'.
     firstName.concat(' ', lastName, ' is a ', description ); //"Arya Stark is a Programmer"
     ```
   - `concat` concatenates the string arguments to the calling string and returns a new string.




8. `endsWith`

   - Parameter: accepts a character to be searcher from a string, length(optional) used as the length of the string.
   - Return: true if the character is found at end of the string else false.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.endsWith('rk'); // true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.endsWith('dog'); // true
     sentance.endsWith('g') // false
     let houseName = 'Starks';
     houseName.endsWith('s', 6); // true
     houseName.endsWith('s', 3); // false
     ```
   - `endsWith` method lets you determine whether or not a string ends with another string. It's a case sensitive method.





9. `includes`

   - Parameter: accepts a string to be searcher from the given string, position(optional) the index value within the string at which to begin searching for.
   - Return: true if the string is found else false.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.includes('Arya'); // true
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.includes('over'); // true
     sentance.includes('fox', 14) // true
     let houseName = 'Starks';
     houseName.includes('rk'); // true
     houseName.includes('s', 3); // false
     ```
   - `includes` method lets you determine whether or not a string includes another string.





10. `indexOf`

   - Parameter: accepts a string to be searcher from the given string, fromIndex(optional) the index value within the string at which to begin searching for (default value is 0).
   - Return: index of the first occurrence of searchValue, or -1 if not found. 
   - Example:
     ```js
     let name = 'Arya Stark';
     name.indexOf('Arya'); // 0
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.indexOf('over', 12); // 25
     sentance.indexOf('lazy'); // 32
     let houseName = 'Starks';
     houseName.indexOf('st'); // -1
     ```
   - `indexOf` characters in a string are indexed from left to right.





11. `lastIndexOf`

   - Parameter: accepts a string to be searcher from the given string, fromIndex(optional) the index value of the last character in the string to begin searching for (default value is +Infinity).
   - Return: index of the first occurrence of searchValue, or -1 if not found. 
   - Example:
     ```js
     let name = 'Arya Stark';
     name.lastIndexOf('Arya'); // 0
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.lastIndexOf('over', 32); // 25
     let houseName = 'Starks';
     houseName.latIndexOf('Rk'); // -1
     houseName.lastIndexOf('s', -4); // -1
     ```
   - `lastIndexOf` characters in a string are indexed from left to right.






12. `padEnd`

   - Parameter: accepts a targetLength(number) of the resulting string once the current string is been padded(if the string value is less it returns the original string), padString(optional) string to pad the current string.
   - Return: string of the specified targetLength with the padString applied at the end of the current string(default value is space " ").  
   - Example:
     ```js
     let name = 'Arya';
     name.padEnd(10, '.'); // "Arya......"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padEnd(52); // "A quick brown fox jumped over a lazy dog            "
     let houseName = 'Starks';
     houseName.padEnd(3, '*'); // "Starks"
     ```
   - `padEnd` adds the padding string with the original string and returns it's value.





13. `padStart`

   - Parameter: accepts a targetLength(number) of the resulting string once the current string is been padded(if the string value is less it returns the original string), padString(optional) string to pad the current string.
   - Return: string of the specified targetLength with the padString applied at the end of the current string(default value is space " ").  
   - Example:
     ```js
     let name = 'Arya';
     name.padStart(15, '.'); // "...........Arya"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padStart(48); // "        A quick brown fox jumped over a lazy dog"
     let houseName = 'Starks';
     houseName.padStart(4, '*'); // "Starks"
     ```
   - `padEnd` adds the padding string with the original string and returns it's value.






14. `repeat`

   - Parameter: accepts a count(number) indicating the number of times to repeat the string. 
   - Return: new string containing the specified number of copies of the given string. 
   - Example:
     ```js
     let name = 'Arya';
     name.repeat(5); // "AryaAryaAryaAryaArya"
     let sentance = `I'm a programmer`;
     sentance.repeat(); // " "
     let houseName = 'Starks  ';
     houseName.repeat(4); // "Starks  Starks  Starks  Starks  "
     ```
   - `repeat` adds the repeated string and returns it.





15. `replace`

   - Parameter: accepts a substr(string) the string to be replaced, and replacerFunction(string) the string to be used. 
   - Return: new string, with some or all matches of a pattern replaced by a replacement. 
   - Example:
     ```js
     let name = 'Arya';
     name.replace('a', '@'); // "Ary@"
     let sentance = `I'm a programmer`;
     sentance.replace('g', '..'); // "I'm a pro..rammer"
     let houseName = 'Starks';
     houseName.replace('k', 'K'); // "StarKs"
     ```
   - `replace` returns the replaced string.





16. `slice`

   - Parameter: accepts a beginingIndex(number) at which to begin extraction, endIndex(number) before which to end extraction. 
   - Return: new string containing the extracted section of the string. 
   - Example:
     ```js
     let name = 'Arya';
     name.slice(1); // "rya"
     let sentance = `I'm a programmer`;
     sentance.slice(5, 15); // " programme"
     let houseName = 'Starks';
     houseName.slice(6, 0); // ""
     ```
   - `slice` extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.






17. `split`

   - Parameter: accepts a seperator(optional)  pattern describing where each split should occur, limit(optional) non-negative integer specifying a limit on the number of substrings to be included in the array.
   - Return: an array of strings, split at each point where the separator occurs in the given string. 
   - Example:
     ```js
     let name = 'Arya';
     name.split(" "); // [ "Arya" ]
     let sentance = `I'm a programmer`;
     sentance.split(' ', 8); // [ "I'm", "a", "programmer" ]
     let houseName = 'This is just a simple program';
     houseName.split(); // [ "This is just a simple program" ]
     ```
   - `split` separator is removed from the string, and the substrings are returned in an array. 





18. `substring`

   - Parameter: accepts a indexStart(number) first character to include in the returned substring, indexEnd(optional) first character to exclude from the returned substring.
   - Return: new string containing the specified part of the given string.
   - Example:
     ```js
     let name = 'Arya';
     name.substring(2); // "ya"
     let sentance = `I'm a programmer`;
     sentance.substring(5, 18); // " programmer"
     let houseName = 'Starks';
     houseName.substring(6, 0); // "Starks"
     ```
   - `sunstring` extracts characters from indexStart up to but not including indexEnd.