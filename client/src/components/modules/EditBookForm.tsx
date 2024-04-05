import { Button, ListItem, TableCell, TableRow, TextField, useMediaQuery } from "@mui/material"
import { useFormik } from 'formik';
import { Book, ErrorType, IEditBookForm } from "../../types";


const EditBookForm = ({id, props, editHandler, editModeHandler}: IEditBookForm) =>{

    const mobile = useMediaQuery('(max-width:600px)');

    const validate = (values: Book) =>{
        const errors: ErrorType = {}
        if(!values.title){
            errors.title = 'Enter the title'
        }
        return errors
    }

    const formik = useFormik({
        initialValues: props,
        validate,
        onSubmit: values => {
            editHandler(values)
            editModeHandler
        },
      });
    
    return(
        <>
            <form action="submit" id="table-form" onSubmit={formik.handleSubmit}></form>
            {
                !mobile
                ?
                <TableRow>
                <TableCell>
                        <Button variant="contained" form="table-form" type="submit">Save</Button> 
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
                :
                <ListItem sx={{display: 'flex', flexDirection:'column'}}>
                    <TextField error={Boolean(formik.errors.title)} id="title" label="Title" helperText={formik.errors.title} variant="filled"  onChange={formik.handleChange} value={formik.values.title}/>
                    <TextField id="author" label="Author" variant="filled" onChange={formik.handleChange} value={formik.values.author}/>
                    <TextField id="genre" label="Genre" variant="filled" onChange={formik.handleChange} value={formik.values.genre}/>
                    <TextField id="description" label="Description" variant="filled" onChange={formik.handleChange} value={formik.values.description}/>
                    <Button variant="contained" form="table-form" type="submit">Save</Button> 
                </ListItem>
            }
        </>
             
    )
}

export default EditBookForm