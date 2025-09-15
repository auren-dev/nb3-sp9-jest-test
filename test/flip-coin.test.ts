import { describe, it, test, expect, jest } from '@jest/globals'
import { flipCoin } from '../src/flip-coin'

const spy = jest.spyOn(Math, 'random')

test('[동전던지기]', () => {
    spy.mockReturnValue(0.6)
    const result1 = flipCoin()
    expect(result1).toBe('Head')

    spy.mockReturnValue(0.5)
    const result2 = flipCoin()
    expect(result2).toBe('Tail')

    console.log(result1, result2)

    spy.mockRestore()
    const result3 = flipCoin()
    console.log(result3)
})