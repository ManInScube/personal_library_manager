import { Divider, List } from "@mui/material"
import { Book, IInputBook } from "../../types"
import BookListItem from "../elements/BookListItem"
import AddBookForm from "./AddBookForm"

interface IBooksList{
    props:IInputBook[]
    formRef: React.ForwardedRef<HTMLElement>
}

const BooksList = ({props, formRef}: IBooksList) =>{
    return (
        <List sx={{overflow: 'auto', maxHeight: '90vh'}}>
            {props.map((item: IInputBook)=>(
                <BookListItem key={item.id} props={item.book}/>
            ))}
            <AddBookForm formRef={formRef}/>
        </List>

    )
}

export default BooksList