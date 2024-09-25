import { create } from 'zustand'

// Define a type for the Product
interface Product {
  id: string
  [key: string]: any
}

// Define the state type
interface BasketState {
  products: Product[]
  addProduct: (product: Product) => void
  removeProduct: (id: string) => void
}

export const useBasketStore = create<BasketState>((set) => ({
  products: [],
  addProduct: (product: Product) =>
    set((state) => {
      const productId = product.id

      const selectedProduct = state.products.find((item) => item.id === productId)

      if (selectedProduct) {
        return {
          products: state.products.map((item) =>
            item.id === productId ? product : item
          )
        }
      }

      return {
        products: [...state.products, { ...product, count: 1 }]
      }
    }),
  removeProduct: (id: string) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id)
    }))
}))
