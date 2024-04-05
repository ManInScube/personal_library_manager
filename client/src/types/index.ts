export type Book = {
    title: string
    author: string
    genre: string
    description: string
}

export type ErrorType = {
    title?: string
}

export interface IInputBook{
    id: number
    book: Book
}

export interface IBookItemProps{
    id: number 
    props: Book
    handler: ()=>void
}

export interface IEditBookForm{
    id: number
    props: Book
    handler: ()=>void
    editHandler: (args: Book)=>void
}