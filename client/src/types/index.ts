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

export interface IEditBookForm{
    id: number
    props: Book
    editModeHandler: ()=>void
    editHandler: (args: Book)=>void
}

export interface IBooksViewVariant{
    data: IInputBook[]
    deleteBook: (arg:number)=>Function
    formRef: React.ForwardedRef<HTMLElement>
}

export interface IBookItemProps{
    id: number 
    props: Book
    deleteHandler: (id:number)=>void
}