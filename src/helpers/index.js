/**
 * 
 * @param {string} guessedWord 
 * @param {string} secretWord 
 */

export function getLetterMatchCount(guessedWord, secretWord){
    const secretLetterSet = new Set(secretWord.split(''))
    const guessedLetterSet = new Set(guessedWord.split(''))
    console.log([...secretLetterSet].filter(letter => guessedLetterSet.has(letter)))
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
};