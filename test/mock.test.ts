// import { describe, it, test, expect, jest } from '@jest/globals'

// // const mock = jest.fn() // () => {}
// // let returnValue = null

// // returnValue = mock() // undefined
// // console.log(returnValue)

// // mock.mockReturnValue(42)
// // returnValue = mock() // 42
// // console.log(returnValue)

// // mock.mockReturnValue(43)
// // returnValue = mock() // 43
// // console.log(returnValue)

// // // mockReturnValue()와 동일하게 동작
// // mock.mockImplementation(() => 100)  // mock.mockReturnValue(100)
// // returnValue = mock() // 100
// // console.log(returnValue)

// test('[mock]', () => {
//     const mock = jest.fn().mockReturnValue('this is default value!')

//     mock('kimcode')
//     mock('hanworld')
//     console.log('[before initialize]: ',mock.mock.calls)

//     // // 1) mockClear()
//     // mock.mockClear()
//     // console.log('[after mockClear]: ', mock.mock.calls)
//     // console.log('[after mockClear]: ', mock())

//     // 2) mockRest()
//     mock.mockReset()
//     console.log('[after mockReset]: ', mock.mock.calls)
//     console.log('[after mockReset]: ', mock())
// })

// import { describe, test, expect, jest } from '@jest/globals'
// import { FindByIdType, getProduct } from '../src/mock'

// const mockFindById = jest.fn() as jest.MockedFunction<FindByIdType>
// const mockProductRepository = {
//     findById: mockFindById,
// }

// describe('[Procut] 상세 조회', () => {
//     test('존재하는 상품 조회', () => {
//         // ❗️TODO:: mock 함수 반환값 설정 1번
//         mockFindById.mockReturnValue({ id: 1, name: '아이폰', price: 800 })
//         const product = getProduct(mockProductRepository, 1)
//         expect(product).toEqual({ id: 1, name: '아이폰', price: 800 })
//     })

//     test('존재하지 않는 상품 조회', () => {
//         // ❗️TODO:: mock 함수 반환값 설정 2번
//         mockFindById.mockReturnValue(null)
//         const product = getProduct(mockProductRepository, 11)
//         expect(product).toBeNull()
//     })
// })

// import { describe, test, expect, jest } from '@jest/globals'
// import { FindByIdType, Product, getProduct } from '../src/mock'

// const mockFindById = jest.fn() as jest.MockedFunction<FindByIdType>
// // ❗️TODO:: mockImplementation으로 동작 정의하기
// mockFindById.mockImplementation((productId) => {
//     if (productId === 1) {
//         return {
//             id: 1,
//             name: '아이폰',
//             price: 800
//         }
//     }

//     return null
// })
// const mockProductRepository = {
//     findById: mockFindById,
// }

// describe('[Procut] 상세 조회', () => {
//     test('존재하는 상품 조회', () => {
//         const product = getProduct(mockProductRepository, 1)
//         expect(product).toEqual({ id: 1, name: '아이폰', price: 800 })
//     })

//     test('존재하지 않는 상품 조회', () => {
//         const product = getProduct(mockProductRepository, 11)
//         expect(product).toBeNull()
//     })
// })


import { describe, test, expect, jest } from '@jest/globals'
import { FindByIdType, Product, getProduct } from '../src/mock'

const implementation: FindByIdType = (productId) => {
    if (productId === 1) {
        return {
            id: 1,
            name: '아이폰',
            price: 800
        }
    }

    return null
}

const mockFindById = jest.fn(implementation)
const mockProductRepository = {
    findById: mockFindById,
}

describe('[Procut] 상세 조회', () => {
    test('존재하는 상품 조회', () => {
        const product = getProduct(mockProductRepository, 1)
        expect(product).toEqual({ id: 1, name: '아이폰', price: 800 })
    })

    test('존재하지 않는 상품 조회', () => {
        const product = getProduct(mockProductRepository, 11)
        expect(product).toBeNull()
    })
})