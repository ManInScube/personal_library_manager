type Book = {
    title: string
    author: string
    genre: string
    description: string
}

interface IBookItemProps{
    id: number 
    props: Book
    handler: ()=>void
}