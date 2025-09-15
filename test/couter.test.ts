import { describe, beforeEach, afterEach, test, expect } from '@jest/globals'
import Counter from '../src/couter'

/** ❗️TODO:: 요구사항을 만족하도록 코드를 작성하세요
 * - Counter의 테스트들을 하나의 그룹으로 묶어 관리
 * - `Counter` 인스턴스의 `count` 속성값을 테스트마다 일정한 값(`2`)으로 설정
 * - 증가/감소 함수는 독립적으로 테스트 진행
 */
describe('[Counter] 그룹 테스트', () => {
    let counter: Counter = new Counter()

    beforeEach(() => {
        counter.set(2)
    })

    test('[증가]', () => {
        counter.increment()
        const result = counter.get()
        expect(result).toBe(3)
    })

    test('[감소]', () => {
        counter.decrement()
        const result = counter.get()
        expect(result).toBe(1)
    })
})