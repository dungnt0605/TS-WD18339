// export type Product = {
//   id: number
//   title: string
//   description: string
//   price: number
//   discountPercentage?: number
//   rating?: number
//   stock?: number
//   brand?: string
//   category?: string
//   thumbnail?: string
//   images?: string[]
// }

// export type Products = Array<Product>
export type Product = {
  id: number
  category: string
  type: string
  name: string
  brand: string
  size: string
  color: string
  price: number
  image: string
}
