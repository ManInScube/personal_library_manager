import { Divider, ListItem, ListItemText, Typography } from "@mui/material"
import React from "react"
import { Book } from "../../types"

interface IBookListItem{
    props: Book
}

const BooksListItem = ({props}: IBookListItem) =>{
    return(
        <>
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
            </ListItem>
            <Divider component="li" />
        </>


    )
}

export default BooksListItem