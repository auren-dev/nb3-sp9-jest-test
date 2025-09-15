export interface Product {
    id: number;
    name: string;
    price: number;
}

export type FindByIdType = (id: number) => Product | null;

export interface ProductRepository {
    findById: FindByIdType
}

export const getProduct = (repository: ProductRepository, productId: number) => {
    const product = repository.findById(productId)  // 조회 결과 있을 경우 👉🏻 데이터 반환, 조회 결과 없을 경우 👉🏻 null 반환
    return product
}