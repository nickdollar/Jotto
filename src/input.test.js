import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input, { UnconnectedInput } from './Input'


/**
 * 
 * @param {object} initialState - initial state for this  
 */

const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={ store }/>).dive().dive()
    return wrapper
}

describe('render', ()=>{
    describe('word had not been guessed', ()=>{

        let wrapper;
        beforeEach(()=>{

            const initialState = {success : false}
            wrapper = setup(initialState)

        })
        test('renders component without error', ()=>{
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })

        test('renders input box', ()=>{
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).toBe(1)
        })

        test('renders submit button', ()=>{
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(1)
        })
    })

    describe('word had been guessed', ()=>{
        let wrapper

        beforeEach(()=>{
            const initialState = { success : true }
            wrapper = setup(initialState)
        })
  
        test('renders component without error', ()=>{
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })

        test('does not renders input box', ()=>{
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).toBe(0)
        })

        test('does not renders submit button', ()=>{
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(0)
        })
    })
})



describe('redux props', ()=>{
    test('has success piece of state as prop',()=>{
        const success = true;
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(true) 
    })

    test('`guessWord` action creator is a function prop', ()=>{
        const wrapper = setup()
        const guessWordProp = wrapper.instance().props.guessWord
        expect(guessWordProp).toBeInstanceOf(Function)
    })

})


describe('`guessWord` action creator call', ()=>{
    let guessWordMock
    let wrapper
    const guessedWord = 'train'

    beforeEach(()=>{
        //set up mock for `guessWord`
        guessWordMock = jest.fn()
        const props = {
            guessWord: guessWordMock,
        }

        //Setup input component with  guessWordMock as the guessWordMock prop
        wrapper = shallow(<UnconnectedInput {...props} />)

        //add value to input box
        wrapper.instance().inputBox.current = { value : guessedWord}

        //Simulate a click
        const submitButton = findByTestAttr(wrapper, 'submit-button')
        submitButton.simulate("click", { preventDefault(){}})

    })

    it('calls `guessWord` when button is clicked', ()=>{

        //check to see if mock ran
        const guessWordMockCount = guessWordMock.mock.calls.length
        expect(guessWordMockCount).toBe(1)
    
    })

    it('calls `guessWord` with input value as argument', ()=>{
        const guessWordArg = guessWordMock.mock.calls[0][0]
        expect(guessWordArg).toBe(guessedWord)
    })

    it('input box clears on submit', ()=>{
        expect(wrapper.instance().inputBox.current.value.toBe(''))
    })

})
