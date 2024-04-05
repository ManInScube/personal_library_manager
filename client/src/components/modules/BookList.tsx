import { List } from "@mui/material"
import { IInputBook } from "../../types"
import BookListItem from "../elements/BookListItem"
import AddBookForm from "./AddBookForm"
import axios from "axios"
import useSWR from "swr"
import { fetcher } from "../../api"

interface IBooksList{
    props:IInputBook[]
    formRef: React.ForwardedRef<HTMLElement>
}

const BooksList = ({props, formRef}: IBooksList) =>{
    const { mutate } = useSWR('http://localhost:3001/books', fetcher)

    const deleteBook = (id: number) =>{
        axios.delete(`http://localhost:3001/books/${id}`)
        .then(function (response) {
            console.log(response);
            mutate()
        })
    }
    return (
        <List sx={{overflow: 'auto', maxHeight: '90vh'}}>
            {props.map((item: IInputBook)=>(
                <BookListItem key={item.id} props={item.book} handler={() => deleteBook(item.id)} id={item.id}/>
            ))}
            <AddBookForm formRef={formRef}/>
        </List>
    )
}

export default BooksList