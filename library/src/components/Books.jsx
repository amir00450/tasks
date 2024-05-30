import { getBooks } from "../data/data";
import { NavLink, Outlet} from "react-router-dom"

const Books = () => {
    let books= getBooks();
    return (
        <div className="Books">
            {
                books.map(book => (
                    <NavLink
                        to={book.id} key={book.id}>
                        {book.name}
                    </NavLink>
                ))
            }
            <Outlet />
        </div>
    )
}
export default Books