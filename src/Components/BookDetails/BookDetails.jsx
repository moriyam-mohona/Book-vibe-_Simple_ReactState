import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const allBooks = useLoaderData(); // Assuming useLoaderData is a custom hook or function to fetch all books
    console.log(allBooks);

    const { bookId } = useParams(); // Correcting useParams

    const book = allBooks.find(b => b.bookId === parseInt(bookId)); // Correcting find method

    return (
        <div className="lg:p-8">
            {book && (
                <div className=" flex flex-col lg:flex-row">
                    <img src={book.image} alt={book.bookName} className="p-6 w-96 h-fit mr-8" />
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{book.bookName}</h1>
                        <p className="text-lg font-medium mb-2">By :  {book.author}</p>
                        <hr className="my-4" />
                        <p className="text-lg">{book.category}</p>
                        <hr className="my-4" />
                        <div className="mb-4">
                            <p><span className='font-bold'>Review: </span>{book.review}</p>
                        </div>
                        <div className="mb-4 flex flex-wrap">
                            {book.tags.map((tag, index) => (
                                <span key={index} className="bg-gray-100 text-[#23BE0A] px-4 py-1 rounded-full mr-2 mb-2 font-semibold">#{tag}</span>
                            ))}
                        </div>
                        <hr className="my-4" />
                        <div className="mb-4">
                            <p className=""><span className="font-bold">Number of Pages:</span>  {book.totalPages}</p>
                            <p className=""> <span className="font-bold">Publisher:</span> {book.publisher}</p>
                            <p className=""> <span className="font-bold">Year of Publishing: </span>{book.yearOfPublishing}</p>
                            <p className=""><span className="font-bold">Rating: </span> {book.rating}</p>
                        </div>
                        <div className="flex gap-7">
                            <Link to='/listedBooks'><button className="btn btn-outline px-5 text-md rounded-xl py-1">Read</button></Link>
                            <Link to='/listedBooks'><button className="btn btn-info px-5 text-md rounded-xl py-1 text-white">Wishlist</button></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetails;
