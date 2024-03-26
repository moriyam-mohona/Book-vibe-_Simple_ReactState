import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const Books = () => {
    const books = useLoaderData();

    // Check if books is an array and has items
    if (!Array.isArray(books) || books.length === 0) {
        return <div>No books found</div>;
    }

    return (
        <div className='mt-10'>
            <h3 className='text-5xl font-bold flex justify-center items-center'>Books : {books.length}</h3>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 '>
                {
                    books.map(book => (
                        <BookCard book={book} key={book.bookId} className="mb-4" />
                    ))
                }
            </div>

        </div>
    );
};

export default Books;
