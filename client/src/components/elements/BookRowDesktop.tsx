import { IconButton, TableCell, TableRow } from "@mui/material"
import { Book } from "../../types";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface IBookRowMobileProps{
    props: Book
    id: number
    editHandler: ()=>Function
    deleteHandler: (id: number,props: Book)=>Function
}

const BookRowDesktop = ({props, id, editHandler, deleteHandler}: IBookRowMobileProps)=>{

    return(
        <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {/* <BookOptions/>     */}
            <IconButton size="small" onClick={()=>deleteHandler(id, props)}>
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