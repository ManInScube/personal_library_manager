import { IconButton, TableCell, TableRow, useMediaQuery } from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditBookForm from "./EditBookForm";
import axios from "axios";
import useSWR from "swr";
import { Book, IBookItemProps } from "../../types";
import BookRowDesktop from "../elements/BookRowDesktop";
import BookRowMobile from "../elements/BookRowMobile";


const fetcher = (url: string) => axios.get(url).then(res=>res.data)

const BookTabelRow = ({id,props, handler} : IBookItemProps) =>{
    const [editMode, setEditMode] = useState<boolean>(false);
    const {mutate} = useSWR('http://localhost:3001/books', fetcher)

    const editModeOn = () =>{
        setEditMode(true)
    }

    const editModeOff = () =>{
            setEditMode(false)
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
                <BookRowDesktop props={props} handler={handler} editHandler={editModeOn} id={id}/>
                :
                <EditBookForm props={props} handler={editModeOff} id={id} editHandler={editBook}/>
            }
        </>
    )
} 

export default BookTabelRow


