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
    editMode?: boolean
    deleteHandler: ()=>void
    editHandler: ()=>void
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
    editBook:(args)=>Function
    editMode: boolean
    editModeOn: ()=>Function
    editModeOff: ()=>Function
    formRef: React.ForwardedRef<HTMLElement>
}