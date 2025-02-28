export interface Category {
    id: number
    name: string
    description: string
  }
  
  // export interface CategoryFormData {
  //   name: string
  //   description: string
  // }
  
  export type CategoryFormData = Omit<Category, 'id'>
