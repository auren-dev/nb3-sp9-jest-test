import { describe, test, expect } from '@jest/globals'
import { hello } from '../src/hello'

// describe('[그룹] Hello 테스트입니다.', () => {
//     test('안녕 Jest', () => {
//         const value = hello()
//         expect(value).toEqual('Hello Jest')
//     })

//     test('안녕 KimCode', () => {
//         const value = hello('KimCode')
//         expect(value).toEqual('Hello KimCode')
//     })
// })

describe('Truthy 테스트', () => {
    test('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });
})