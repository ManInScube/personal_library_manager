import { Box, Divider, IconButton, ListItem, ListItemText, Typography } from "@mui/material"
import React from "react"
import { IBookItemProps } from "../../types"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditBookForm from "../modules/EditBookForm";
import useEdit from "../../hooks/useEdit";



const BooksListItem = ({id, props, handler}: IBookItemProps) =>{

    const {editMode, enterEditMode, exitEditMode, editBook} = useEdit(id)

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
            <IconButton size="small" onClick={enterEditMode}>
                <EditIcon />
            </IconButton>
            </Box>
            </ListItem>
            :
            <EditBookForm props={props} editModeHandler={exitEditMode} id={id} editHandler={editBook}/>
        }
            <Divider component="li" />
        </>
    )
}

export default BooksListItem