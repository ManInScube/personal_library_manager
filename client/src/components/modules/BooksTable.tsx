import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import useSWR from "swr"


const fetcher = (url: string) => axios.get(url).then(res =>res.data)


interface IInputBook{
    id: number
    book: Book
}

const BooksTable = () =>{
    const { data, error, mutate, isLoading, isValidating } = useSWR('http://localhost:3001/books', fetcher)

    // useEffect(()=>{
    //     console.log(data)
    //     //console.log('Изменения', isLoading, isValidating)
    // }, [])

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Author</TableCell>
                <TableCell align="right">Genre</TableCell>
                <TableCell align="right">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data&&data.map((row: IInputBook) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.book.title}
                  </TableCell>
                  <TableCell align="right">{row.book.author}</TableCell>
                  <TableCell align="right">{row.book.genre}</TableCell>
                  <TableCell align="right">{row.book.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default BooksTable