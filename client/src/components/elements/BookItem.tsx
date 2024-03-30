import { Button, Card, CardActions, Typography } from "@mui/material"

const BookItem = ({props, handler}: IBookItemProps) =>{

    return(
        <Card sx={{maxWidth:375}}>
            <Typography>
                {props.title}
            </Typography>
            <Typography>
                {props.author}
            </Typography>
            <Typography>
                {props.genre}
            </Typography>
            <Typography>
                {props.description}
            </Typography>
            <CardActions>
                <Button size="small">Update</Button>
                <Button size="small" onClick={handler}>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default BookItem