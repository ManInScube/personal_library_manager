import { Button, Grid, useMediaQuery } from "@mui/material"
import axios from "axios"
import useSWR from "swr"
import { useRef } from "react";
import BooksList from "./BookList";
import BooksTable from "./BooksTable";
import WithBooksView from "./BooksView";

const fetcher = (url: string) => axios.get(url).then(res =>res.data)

const BooksViewVariant = WithBooksView({
    Desktop: BooksTable,
    Mobile: BooksList
})

const BooksPage = () =>{
    const { data, mutate } = useSWR('http://localhost:3001/books', fetcher)
    const formRef = useRef<HTMLElement>(null)

    const onNewBook = () => {
        formRef.current?.focus();
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
                    formRef={formRef}  />
                }
            </Grid>
        </>

      );
}

export default BooksPage