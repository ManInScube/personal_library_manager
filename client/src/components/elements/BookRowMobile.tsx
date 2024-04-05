import { IconButton, Stack, TableCell, TableRow } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IBookItemProps } from "../../types";

interface IBookRowMobileProps extends IBookItemProps{
    //deleteHandler: ()=>void
    editHandler: ()=>void
}

const BookRowMobile = ({props, id, handler, editHandler}: IBookRowMobileProps) =>{

    return(
        <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
          <TableCell component="th" scope="row">
          <IconButton size="small" onClick={handler}>
              <DeleteIcon />
          </IconButton>
          <IconButton size="small" onClick={editHandler}>
              <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell>
            <Stack>
                <TableCell component="th" scope="row">
                    {props.title}
                </TableCell>
                <TableCell align="right">Title: {props.author}</TableCell>
                <TableCell align="right">Genre: {props.genre}</TableCell>
                <TableCell align="right">{props.description}</TableCell>
            </Stack>
        </TableCell>

      </TableRow>
    )
}

export default BookRowMobile