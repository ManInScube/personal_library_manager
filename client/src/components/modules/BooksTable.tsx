import { Button, Grid, List, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, useMediaQuery } from "@mui/material"
import axios from "axios"
import useSWR from "swr"
import AddBookForm from "./AddBookForm";
import BookTableRow from "./BookTableRow";
import { Book, IBooksViewVariant, IInputBook } from "../../types";
import {useEffect, useState } from "react";
import { fetcher } from "../../api";

// interface IBooksList{
//     props:IInputBook[]
//     formRef: React.ForwardedRef<HTMLElement>
//     editHandler: (book: Book, id: number)=>void
// }



const BooksTable = ({data, deleteBook, editBook, editMode, editModeOn, editModeOff, formRef}: IBooksViewVariant) =>{
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const { mutate } = useSWR('http://localhost:3001/books', fetcher)

    useEffect(()=>{
        console.log(data)
    },[])

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    
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
                    {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: IInputBook) => {
                        return(
                            <BookTableRow key={row.id} props={row.book} deleteHandler={() => deleteBook(row.id)} editModeHandler={editModeOn} editMode={editMode} id={row.id} editHandler={editBook}/>
                        )
                        })}
                        <AddBookForm formRef={formRef}/>
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
            rowsPerPageOptions={[5, 20, 40]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default BooksTable