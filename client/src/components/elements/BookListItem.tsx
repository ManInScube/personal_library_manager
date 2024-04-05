import { Box, Divider, IconButton, ListItem, ListItemText, Typography } from "@mui/material"
import React, { useState } from "react"
import { Book, IBookItemProps } from "../../types"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditBookForm from "../modules/EditBookForm";
import axios from "axios";
import useSWR from "swr";
import { fetcher } from "../../api";


const BooksListItem = ({id, props, handler}: IBookItemProps) =>{
    const [editMode, setEditMode] = useState<boolean>(false);
    const {mutate} = useSWR('http://localhost:3001/books', fetcher)

    const editModeOn = () =>{
        setEditMode(true)
    }

    const editModeOff = () =>{
        setEditMode(false)
    }

    const editBook = (book: Book) =>{
        axios.put(`http://localhost:3001/books/${id}`,{
            book
        })
        .then(function (response) {
            console.log(response)
            mutate()
            setEditMode(false)
        })
    }

    return(
        <>
        {
            !editMode
            ?
            <ListItem alignItems="flex-start" sx={{width: "100%"}}>
                <ListItemText
                primary={props.title}
                secondary={
                    <React.Fragment>
                        Author:
                    <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {props.author}
                    </Typography>
                    Genre:
                    <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {props.genre}
                    </Typography>
                    Description:
                    <Typography
                        sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {props.description}
                    </Typography>
                    </React.Fragment>
                }
                />
            <Box sx={{display: 'flex'}}>
                <IconButton size="small" onClick={handler}>
                <DeleteIcon />
            </IconButton>
            <IconButton size="small" onClick={editModeOn}>
                <EditIcon />
            </IconButton>
            </Box>
            </ListItem>
            :
            <EditBookForm props={props} editModeHandler={editModeOff} id={id} editHandler={editBook}/>
        }
            <Divider component="li" />
        </>
    )
}

export default BooksListItem