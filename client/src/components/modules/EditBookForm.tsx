import { Box, Button, FormControl, TableCell, TableRow, TextField } from "@mui/material"
import axios from "axios";
import { useFormik } from 'formik';
import useSWR from "swr";

// const event = new EventEmitter();

const fetcher = (url: string) => axios.get(url).then(res=>res.data)

const EditBookForm = () =>{
    const {mutate} = useSWR('http://localhost:3001/books', fetcher)

    const editBook = (book: Book) =>{
        axios.put('http://localhost:3001/books',{
            book
        })
        .then(function (response) {
            console.log(response);
            mutate()
        })
    }

    const validate = (values: Book) =>{
        const errors = {}
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
            editBook(values);
        },
      });

    
    
    return(
        <>
            <form action="submit" id="table-form" onSubmit={formik.handleSubmit}></form>
            <TableRow>
                <TableCell>
                        <Button variant="contained" form="table-form" type="submit">Add</Button> 
                </TableCell>
                <TableCell>
                    <TextField error={Boolean(formik.errors.title)} id="title" label="Title" helperText={formik.errors.title} variant="filled" onChange={formik.handleChange} value={formik.values.title}/>
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
            
        </>
             
    )
}

export default EditBookForm