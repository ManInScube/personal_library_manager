import { Button, Grid, List, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, useMediaQuery } from "@mui/material"
import axios from "axios"
import useSWR from "swr"
import {useRef } from "react";
import BooksList from "./BookList";
import BooksTable from "./BooksTable";


const fetcher = (url: string) => axios.get(url).then(res =>res.data)

const BooksPage = () =>{
    const { data } = useSWR('http://localhost:3001/books', fetcher)
    const formRef = useRef<HTMLElement>(null)

    const mobile = useMediaQuery('(max-width:600px)');

    const onNewBook = () => {
        formRef.current?.focus();
    }
  
    return (
        <>
            <Button variant="contained" onClick={onNewBook}>Add Book</Button>
            <Grid container>
                {
                !mobile
                ?
                data&&<BooksTable props={data} formRef={formRef}  />
                :
                data&&<BooksList props={data} formRef={formRef}/>
                }
            </Grid>
        </>

      );
}

export default BooksPage