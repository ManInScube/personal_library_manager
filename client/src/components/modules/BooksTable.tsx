import { Button, Grid, List, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, useMediaQuery } from "@mui/material"
import axios from "axios"
import useSWR from "swr"
import AddBookForm from "./AddBookForm";
import BookTabelRow from "./BookTableRow";
import { IInputBook } from "../../types";
import {useState } from "react";

interface IBooksList{
    props:IInputBook[]
    formRef: React.ForwardedRef<HTMLElement>
}
const fetcher = (url: string) => axios.get(url).then(res =>res.data)

const BooksTable = ({props, formRef}: IBooksList) =>{
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const { mutate } = useSWR('http://localhost:3001/books', fetcher)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const deleteBook = (id: number) =>{
        axios.delete(`http://localhost:3001/books/${id}`)
        .then(function (response) {
            console.log(response);
            mutate()
        })
    }
    
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return(
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">Genre</TableCell>
                        <TableCell align="right">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: IInputBook) => {
                    return(
                        <BookTabelRow key={row.id} props={row.book} handler={() => deleteBook(row.id)} id={row.id}/>
                    )
                    })}
                    <AddBookForm formRef={formRef}/>
                </TableBody>
            </Table>
        </TableContainer>

        <TablePagination
        rowsPerPageOptions={[5, 20, 40]}
        component="div"
        count={props.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />
        </Paper>
    )
}

export default BooksTable