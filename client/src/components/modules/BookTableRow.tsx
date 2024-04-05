import { useState } from "react";
import EditBookForm from "./EditBookForm";
import axios from "axios";
import useSWR from "swr";
import { Book, IBookItemProps } from "../../types";
import BookRowDesktop from "../elements/BookRowDesktop";
import { fetcher } from "../../api";

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
                <EditBookForm props={props} editModeHandler={editModeOff} id={id} editHandler={editBook}/>
            }
        </>
    )
} 

export default BookTabelRow


