import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import AddBookForm from "./AddBookForm";
import BookTableRow from "./BookTableRow";
import {IBooksViewVariant, IInputBook } from "../../types";
import {useState } from "react";




const BooksTable = ({data, deleteBook, formRef}: IBooksViewVariant) =>{
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
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
                            <BookTableRow key={row.id} props={row.book} deleteHandler={() => deleteBook(row.id)}  id={row.id} />
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