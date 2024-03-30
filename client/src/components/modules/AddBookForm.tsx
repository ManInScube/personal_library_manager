import { Box, Button, FormControl, TextField } from "@mui/material"
import axios from "axios";
import { error } from "console";
import { useFormik } from 'formik';
import useSWR from "swr";

// const fetcher = (url: string) => axios.post(url).then(res => res.data)

const AddBookForm = () =>{

    // const { data, error } = useSWR('http://localhost:3000/books', fetcher)

    const addBook = (book: Book) =>{
        axios.post('http://localhost:3001/books',{
            book
        })
        .then(function (response) {
            console.log(response);
        })
    }

    const validate = values =>{
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
            addBook(values);
        },
      });
    
    return(
       <Box sx={{display: 'flex'}}>
            <FormControl component="form" onSubmit={formik.handleSubmit}>
                <TextField error={Boolean(formik.errors.title)} id="title" label="Title" helperText={formik.errors.title} variant="filled" onChange={formik.handleChange} value={formik.values.title}/>
                <TextField id="author" label="Author" variant="filled" onChange={formik.handleChange} value={formik.values.author}/>
                <TextField id="genre" label="Genre" variant="filled" onChange={formik.handleChange} value={formik.values.genre}/>
                <TextField id="description" label="Description" variant="filled" onChange={formik.handleChange} value={formik.values.description}/>
                {/*TODO: Color: success  */}
                <Button variant="contained" type="submit">Contained</Button> 
            </FormControl>
        </Box> 
    )
}

export default AddBookForm