import { describe, it, test, expect, jest } from '@jest/globals'
import { isPass } from "../src/grade"

// test('성적 PASS', () => {
//     const score = 70
//     const isPassResult = isPass(70)
//     expect(isPassResult).toEqual('PASS')
//     expect(isPassResult).toBeTruthy()
// })

const data = [
    {
        id: 1,
        name: 'Kimcode',
        gender: 'F'
    },
    {
        id: 2,
        name: 'HanWorld',
        gender: 'M'
    }
]

const stub = () => {
    return {
        id: 1,
        name: 'Kimcode',
        gender: 'F'
    }
}
describe('[성적] PASS 여부 확인', () => {
    it('60점 이상은 PASS', () => {
        isPass(0)
        expect(isPass(60)).toEqual('PASS')
        expect(isPass(80)).toEqual('PASS')
        expect(isPass(100)).toEqual('PASS')
    })

    test('60점 미만은 FAIL', () => {
        expect(isPass(40)).toEqual('FAIL')
        expect(isPass(30)).toEqual('FAIL')
        expect(isPass(0)).toEqual('FAIL')
    })
})