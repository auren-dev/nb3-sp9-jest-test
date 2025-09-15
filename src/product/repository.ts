import { PRODUCTS } from "../data"

const repository = {
    findById: (productId: number) => PRODUCTS.find((product) => product.id === productId) || null,
}

export default repository