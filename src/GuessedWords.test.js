import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps} from '../test/testUtils'
import GuessedWords from './GuessedWords'
import { restElement } from '@babel/types';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3}],
}


/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {*} props 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) =>{
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', ()=>{
    checkProps(GuessedWords, defaultProps)
})

describe('if there are not words guessed', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = setup({ guessedWords: [] });
    })

    test('renders without error', ()=>{
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders instruction to guess a word', ()=>{
        const instructions = findByTestAttr(wrapper, 'guessed-instructions')
        expect(instructions.text().length).not.toBe(0)
    })
})

describe('if there are words guessed', ()=>{
    let wrapper

    const guessedWords = [
        {guessedWord : "train", letterMatchCount : 3},
        {guessedWord : "agile", letterMatchCount : 1},
        {guessedWord : "party", letterMatchCount : 5},
    ]

    beforeEach(()=>{
        wrapper = setup({ guessedWords })
    })


    test('renders without error', ()=>{
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders "guessed words" section', ()=>{
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordsNode.length).toBe(1)
    })

    test('correct number of guessed words', ()=>{
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordsNodes.length).toBe(guessedWords.length)

    })

})