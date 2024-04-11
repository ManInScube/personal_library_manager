import { List } from "@mui/material"
import { IBooksViewVariant, IInputBook } from "../../types"
import BookListItem from "../elements/BookListItem"
import AddBookForm from "./AddBookForm"

const BooksList = ({data, deleteBook, formRef}: IBooksViewVariant) =>{

    return (
        <List sx={{overflow: 'auto', maxHeight: '90vh', width:'100%'}}>
            {data.map((item: IInputBook)=>(
                <BookListItem key={item.id} props={item.book} handler={() => deleteBook(item.id)} id={item.id}/>
            ))}
            <AddBookForm formRef={formRef}/>
        </List>
    )
}

export default BooksList