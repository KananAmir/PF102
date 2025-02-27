export interface Book{
    id: string;
    title: string;
    author:string;
    price: number;
    description?: string;
    stock?: string;
    genre?: string;
    language?: string;
    coverImageURL?: string;
    rating?: number;
    sold?: number;
}

export enum Endpoints{
    books = 'books',
    genres = 'genres',
    users = 'users',
    orders = 'orders',
}