import toast from "react-hot-toast";
// import { JSON } from "react-router-dom";

export const getBooks = () => {
    let books = [];
    const storeBooks = localStorage.getItem('books');
    if (storeBooks) {
        books = JSON.parse(storeBooks)
    }
    return books;
}
//save
export const saveBook = book => {
    let books = getBooks()
    const isExist = books.find(b => b.bookId === book.bookId)
    if (isExist) {
        return toast.error("You Have Already Read this Book!")
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Added to ReadList!')
}
//delete
export const deleteBook = id => {
    let books = getBooks()
    const remaining = books.filter(b => b.id !== id)
    localStorage.setItem('books', JSON.stringify(remaining))
    toast.success("Deleted")
}