import { Box, Button } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"
import useSWR from "swr"
import BookItem from "../elements/BookItem"


interface IInputBook{
    id: number
    book: Book
}

const fetcher = (url: string) => axios.get(url).then(res =>res.data)


const BooksList = () =>{
    const { data, error, mutate, isValidating } = useSWR('http://localhost:3001/books', fetcher)

    useEffect(()=>{
        console.log(data)
    })

    const deleteBook = (id: number) =>{
        axios.delete(`http://localhost:3001/books/${id}`)
        .then(function (response) {
            console.log(response);
            mutate()
        })
    }

    return(
        <Box sx={{display: 'flex'}}>
            <ul>
                {data&&data.map((item: IInputBook)=>(
                    <li key={item.id}>
                        <BookItem props={item.book} handler={()=>deleteBook(item.id)}/>
                    </li>
                ))}
            </ul>

            <Button variant="contained" onClick={()=>mutate()}></Button>

        </Box> 
    )
}

export default BooksList