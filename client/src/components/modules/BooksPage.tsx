import { Button, Grid, useMediaQuery } from "@mui/material"
import axios from "axios"
import useSWR from "swr"
import {createContext, useEffect, useRef, useState } from "react";
import BooksList from "./BookList";
import BooksTable from "./BooksTable";
import { Book, IInputBook } from "../../types";
import WithBooksView from "./BooksView";

const fetcher = (url: string) => axios.get(url).then(res =>res.data)

const BooksViewVariant = WithBooksView({
    Desktop: BooksTable,
    Mobile: BooksList
})

const BooksPage = () =>{
    
    const { data, mutate } = useSWR('http://localhost:3001/books', fetcher)
    const formRef = useRef<HTMLElement>(null)
    const [editMode, setEditMode] = useState<boolean>(false);


    const editModeOn = () =>{
        setEditMode(true)
    }

    const editModeOff = () =>{
        setEditMode(false)
    }

    const onNewBook = () => {
        formRef.current?.focus();
    }

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
            mutate()
        })
    }
  


    return (
        <>
            <Button variant="contained" onClick={onNewBook}>Add Book</Button>
            <Grid container>
                {
                    data&&
                    <BooksViewVariant data={data} 
                    deleteBook={deleteBook} 
                    editBook={editBook} 
                    editMode={editMode} 
                    editModeOn={editModeOn}
                    editModeOff={editModeOff} formRef={formRef}  />
                
                }
            </Grid>
        </>

      );
}

export default BooksPage