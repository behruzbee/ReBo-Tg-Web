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
    set((state) => ({
      products: [...state.products, product] // Use spread to add new product
    })),
  removeProduct: (id: string) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id)
    }))
}))
