import { Button, ListItem, TableCell, TableRow, TextField, useMediaQuery } from "@mui/material"
import axios from "axios";
import { useFormik } from 'formik';
import useSWR from "swr";
import { Book, ErrorType } from "../../types";
import React from "react";
import { fetcher } from "../../api";


interface IAddBookForm{
    formRef: React.ForwardedRef<HTMLElement>
}

const AddBookForm = ({formRef}:IAddBookForm) =>{
    const {mutate} = useSWR('http://localhost:3001/books', fetcher)

    const mobile = useMediaQuery('(max-width:600px)');


    const addBook = (book: Book) =>{
        axios.post('http://localhost:3001/books',{
            book
        })
        .then(function (response) {
            console.log(response);
            mutate()
        })
    }

    const validate = (values: Book) =>{
        const errors: ErrorType = {}
        if(!values.title){
            errors.title = 'Enter the title'
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
          title: '',
          author: '',
          genre: '',
          description: ''
        },
        validate,
        onSubmit: values => {
            addBook(values);
        },
    });
    
    return(
        <>
            <form action="submit" id="table-form"  onSubmit={formik.handleSubmit}></form>
            {
                !mobile
                ?
                <TableRow>
                    <TableCell>
                            <Button ref={formRef} variant="contained"  form="table-form" type="submit">Add</Button> 
                    </TableCell>
                    <TableCell>
                        <TextField error={Boolean(formik.errors.title)} id="title" label="Title" helperText={formik.errors.title} variant="filled"  onChange={formik.handleChange} value={formik.values.title}/>
                    </TableCell>
                    <TableCell>
                    <TextField id="author" label="Author" variant="filled" onChange={formik.handleChange} value={formik.values.author}/>
                    </TableCell>
                    <TableCell>
                    <TextField id="genre" label="Genre" variant="filled" onChange={formik.handleChange} value={formik.values.genre}/>
                    </TableCell>
                    <TableCell>
                    <TextField id="description" label="Description" variant="filled" onChange={formik.handleChange} value={formik.values.description}/>
                    </TableCell>
                </TableRow>   
                :
                <ListItem sx={{display: 'flex', flexDirection:'column'}}>
                    <TextField sx={{width:'100%', marginTop:1}} error={Boolean(formik.errors.title)} id="title" label="Title" helperText={formik.errors.title} variant="filled"  onChange={formik.handleChange} value={formik.values.title}/>
                    <TextField sx={{width:'100%', marginTop:1}} id="author" label="Author" variant="filled" onChange={formik.handleChange} value={formik.values.author}/>
                    <TextField sx={{width:'100%', marginTop:1}} id="genre" label="Genre" variant="filled" onChange={formik.handleChange} value={formik.values.genre}/>
                    <TextField sx={{width:'100%', marginTop:1}} id="description" label="Description" variant="filled" onChange={formik.handleChange} value={formik.values.description}/>
                    <Button sx={{width:'100%', marginTop:2}} ref={formRef} variant="contained" form="table-form" type="submit">Add</Button> 
                </ListItem>

            }

            
        </>
             
    )
}

export default AddBookForm