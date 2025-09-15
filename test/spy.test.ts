import { test, expect, jest } from '@jest/globals';
import { hello } from '../src/hello'

const greet = {
    hello
}

test('[Spy]', () => {
    const spy = jest.spyOn(greet, 'hello')

    const result = greet.hello('KimCode')
    console.log(result)
    console.log(spy.mock.calls)
    
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith('KimCode')
    expect(result).toEqual('Hello KimCode')
})