/**
 * This function should count all the words in the input sentence and return a object
 * with the word as the key and count as the value.
 *
 * @param {String} the sentence
 * @return {Object} the kay value pair of word and its count
 */
const countWords = (sentence) => {
    // This is just a sample output
    //return { 'hello': 5, 'world': 2 };

    // Step 1: To breakdown the sentence into words
    // " " a blank space separates the words
    // split method will separate words based on space

    const words = sentence.split(" ");
    console.log(words);

    const objToReturn = {};

    for(let i = 0; i<words.length; i++) {
        let length = words[i].length;
        objToReturn[words[i]] = length;
    }

    // console.log(objToReturn);
    return objToReturn;

}
// Example usage of countWords function
const sentence = "Hello world! This is a simple example. Hello world!";
const wordCount = countWords(sentence);
 
// Log the result to the console
console.log('Word Count:', wordCount);

 
