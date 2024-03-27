import toast from "react-hot-toast";

export const getBooks = () => {
    let books = [];
    const storeBooks = localStorage.getItem('books');
    if (storeBooks) {
        books = JSON.parse(storeBooks)
    }
    return books;
}

export const saveBook = book => {
    let books = getBooks();
    console.log(books)
    const isExist = books.find(b => b.bookId == book.bookId)
    if (isExist) {
        return toast.error("You Have Already Read this Book!")
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Added to ReadList!')
}

export const getWishBooks = () => {
    let books = [];
    const storeBooks = localStorage.getItem('wish');
    if (storeBooks) {
        books = JSON.parse(storeBooks)
    }
    return books;
}

export const saveWishBook = book => {
    let books = getBooks();
    console.log(books)
    const isExist = books.find(b => b.bookId == book.bookId)
    if (isExist) {
        return toast.error("You Have Already Read this Book!")
    }
    books.push(book)
    localStorage.setItem('wish', JSON.stringify(books))
    toast.success('Book Added to Wish List!')
}

//delete
// export const deleteBook = id => {
//     let books = getBooks()
//     const remaining = books.filter(b => b.id !== id)
//     localStorage.setItem('books', JSON.stringify(remaining))
//     toast.success("Deleted")
// }
