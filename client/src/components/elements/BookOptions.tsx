import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IInputBook } from "../../types";
import axios from "axios";


const BookOptions = ({book, id}) =>{

    const editBook = (book: Book, id: number) =>{
        axios.put(`http://localhost:3001/books/${id}`,{
            book
        })
        .then(function (response) {
            console.log(response)
            mutate()
            setEditMode(false)
        })
    }

    
    const deleteBook = (id: number) =>{
        axios.delete(`http://localhost:3001/books/${id}`)
        .then(function (response) {
            console.log(response);
            //mutate()
        })
    }

    

    return(
        <>
            <IconButton size="small" onClick={handler}>
              <DeleteIcon />
            </IconButton>
            <IconButton size="small" onClick={editHandler}>
              <EditIcon />
            </IconButton>
        </>
    )
}

export default BookOptions