import repository from "./repository"

export const getProduct = (productId: number) => {
    const product = repository.findById(productId)
    return product
}