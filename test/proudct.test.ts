import { describe, it, test, expect, jest } from '@jest/globals'
import { getProduct } from '../src/product/service'
import repository from '../src/product/repository'

jest.mock('../src/product/repository');
(repository.findById as jest.Mock).mockReturnValue({ id: 1, name: 'iPhone', price: 800 });

describe('[상품] 그룹 테스트', () => {
    test('존재하는 상품 조회', () => {
        const product = getProduct(1)
        console.log('존재하는 상품 조회: ', product)

        expect(product).toEqual({ id: 1, name: 'iPhone', price: 800 })
    })
    
    test('존재하지 않는 상품 조회', () => {
        (repository.findById as jest.Mock).mockReturnValue(null)
        const product = getProduct(11)
        console.log('존재하지 않는 상품 조회: ', product)
        expect(product).toBeNull()
    })
})