import { IconButton, TableCell, TableRow } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IBookItemProps } from "../../types";

interface IBookRowMobileProps extends IBookItemProps{
    editHandler: ()=>void
}

const BookRowDesktop = ({props, id, handler, editHandler}: IBookRowMobileProps)=>{
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
        <TableCell component="th" scope="row">
          {props.title}
        </TableCell>
        <TableCell align="right">{props.author}</TableCell>
        <TableCell align="right">{props.genre}</TableCell>
        <TableCell align="right">{props.description}</TableCell>
        </TableRow>
    )
}

export default BookRowDesktop