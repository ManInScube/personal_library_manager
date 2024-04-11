import { useMediaQuery } from "@mui/material";
import { IBooksViewVariant } from "../../types";


interface IBooksView{
    Desktop: React.ComponentType<T>
    Mobile: React.ComponentType<T>
}

const WithBooksView = ({Desktop, Mobile}: IBooksView) =>{
    return function BooksViewComponent(props: IBooksViewVariant){
        const mobile = useMediaQuery('(max-width:600px)');

        return !mobile ? <Desktop {...props}/> : <Mobile {...props}/>

    }
}

export default WithBooksView