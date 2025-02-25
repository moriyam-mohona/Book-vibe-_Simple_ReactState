import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getBooks } from "../../utils";

const ReadBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getBooks();
        setBooks(storedBooks);
    }, []);

    return (
        <div>
            {books.map(book => (
                <div key={book.bookId} className="flex flex-col lg:flex-row gap-5 my-5 rounded-xl p-5 border border-slate-300 w-auto">
                    <div>
                        <img className='h-48 mx-auto lg:w-40 rounded-xl ' src={book.image} alt={book.bookName} />
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className='text-2xl font-semibold font-play '>{book.bookName}</h2>
                        <p className='text-lg '>By : {book.author}</p>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-5 text-lg my-3">
                            <p className='font-bold flex gap-3'>Tags: {book.tags && book.tags.map((tag, index) => (
                                <div key={index} className="badge text-base text-[#23BE0A] p-4 bg-[#ebf8e9]">#{tag}</div>
                            ))}</p>
                            <p className="flex items-center gap-1 "><CiLocationOn /> Year of Publishing: {book.yearOfPublishing}</p>
                        </div>
                        <hr className="my-3 border border-l-neutral-900 w-full" />
                        <div className="flex gap-5">
                            <button className="btn rounded-full  px-4 py-1 text-base bg-[#d1dbe7] text-[#328EFF]">Category: {book.category}</button>
                            <button className="btn rounded-full  px-4 py-1 text-base bg-[#f7e9d5] text-[#FFAC33]">Rating: {book.rating}</button>
                            <Link to={`/book/${book.bookId}`}><button className="btn rounded-full px-4 py-1 text-base bg-[#23BE0A] text-white">View Details</button></Link>
                        </div>
                    </div>

                </div>

            ))}
        </div>
    );
};

export default ReadBooks;
