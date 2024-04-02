import { IconButton, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditBookForm from "./EditBookForm";
import axios from "axios";
import useSWR from "swr";

interface IEditBookForm{
    id: number
    book: Book
}
const fetcher = (url: string) => axios.get(url).then(res=>res.data)

const BookTabelRow = ({id,props, handler} : IBookItemProps) =>{
    const [editMode, setEditMode] = useState<boolean>(false);
    const {mutate} = useSWR('http://localhost:3001/books', fetcher)

    const editModeOn = () =>{
        setEditMode(true)
    }

    const editModeOff = () =>{
            setEditMode(false)

        console.log('ddd')
    }

    const editBook = (book: Book) =>{
        axios.put(`http://localhost:3001/books/${id}`,{
            book
        })
        .then(function (response) {
            console.log(response)
            mutate()
            setEditMode(false)

        })
    }

    return(
        <>
            {        
                !editMode
                ?
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    <IconButton size="small" onClick={handler}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton size="small" onClick={editModeOn}>
                        <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {props.title}
                  </TableCell>
                  <TableCell align="right">{props.author}</TableCell>
                  <TableCell align="right">{props.genre}</TableCell>
                  <TableCell align="right">{props.description}</TableCell>
                </TableRow>
                :
                <EditBookForm props={props} handler={editModeOff} id={id} editHandler={editBook}/>
            }
        </>
    )
} 

export default BookTabelRow


