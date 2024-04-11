import useSWR from "swr";
import { fetcher } from "../api";
import axios from "axios";
import { Book } from "../types";
import { useEffect, useState } from "react";


function useEdit(id: number){
    const [editMode, setEditMode] = useState<boolean>(false)
    // const [save, setSave] = useState<boolean>(false)
    const {mutate} = useSWR('http://localhost:3001/books', fetcher)


    // useEffect(()=>{
    //     editBook;
    // },[])


    const editBook = (book: Book) =>{
        axios.put(`http://localhost:3001/books/${id}`,{
            book
        })
        .then(function (response) {
            console.log(response)
            mutate()
            exitEditMode()
        })
    }

    const exitEditMode = () =>{
        setEditMode(false);
    }

    const enterEditMode = () =>{
        setEditMode(true);
    }





    return {editMode, exitEditMode, enterEditMode, editBook}
}

export default useEdit