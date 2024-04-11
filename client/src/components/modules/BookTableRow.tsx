import EditBookForm from "./EditBookForm";
import BookRowDesktop from "../elements/BookRowDesktop";
import { Book } from "../../types";
import useEdit from "../../hooks/useEdit";

export interface IBookItemProps{
    id: number 
    props: Book
    deleteHandler: (id:number)=>void
}

const BookTableRow = ({id,props, deleteHandler} : IBookItemProps) =>{

    const {editMode, enterEditMode, exitEditMode, editBook} = useEdit(id)

    return(
        <>
            {        
                !editMode
                ?
                <BookRowDesktop props={props} deleteHandler={deleteHandler} editHandler={enterEditMode} id={id}/>
                :
                <EditBookForm props={props} editModeHandler={exitEditMode} id={id} editHandler={editBook}/>
            }
        </>
    )
} 

export default BookTableRow


