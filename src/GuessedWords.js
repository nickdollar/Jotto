import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props)=>{
    let contents
    if(props.guessedWords.length === 0 ){
        contents = (
            <span data-test="guessed-instructions">
                <h2>Try to guess the secret word!</h2>
            </span>
        )
    } else {
        const guessedWordsRows = props.guessedWords.map(word =>(
            <tr data-test="guessed-word" key={word.guessedWord}>
                <td> { word.guessedWord } </td>
                <td> { word.letterMatchCount } </td>
            </tr>
        ))

        contents = (
            <div data-test="guessed-words">
                <h3>GuessedWords</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                    </thead>                    
                    <tbody>
                        { guessedWordsRows}
                    </tbody>
                </table>
            </div>
            
        )
    }
    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord : PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,
}

export default GuessedWords