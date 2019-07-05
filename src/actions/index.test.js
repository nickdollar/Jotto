import moxios from 'moxios'
import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from '.';

describe('secretWord action creator', ()=>{
    beforeEach(()=>{
        moxios.install()
    })
    
    afterEach(()=>{
        moxios.uninstall()
    })

    test('add response word to state', ()=>{
        const secretWord = 'party'
        const store = storeFactory()

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent() 

            return request.respondWith({
                status : 200,
                response : secretWord
            })
        })

        return store.dispatch(getSecretWord())
                .then(()=>{
                    const newState = store.getState()
                    expect(newState.secretWord).toBe(secretWord)
                })
    });

})