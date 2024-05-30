const books = [

    {
        name : "Rouge",
        price : "$28.99",
        author : "Mona Awad",
        id : "1"
    }
    ,
    {
        name : "James",
        price : "$25.99",
        author : "Mona Awad",
        id : "2"
    }
    ,
    {
        name : "Clear",
        price : "$29.99",
        author : "Mona Awad",
        id : "3"
    }

]
export const getBooks = ()=>{
    return books
}
export const getBook = (id) =>{
    return books.find(book => book.id === id)
}