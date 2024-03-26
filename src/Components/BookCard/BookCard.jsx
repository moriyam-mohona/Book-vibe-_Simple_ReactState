import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book, className }) => {

    const { bookId, image, bookName, author, category, rating } = book;

    // You can also add a condition to check if the book object exists
    // This is helpful to prevent errors if book object is missing
    if (!book) {
        return <div>No book data available</div>;
    }

    return (
        <div className={`card w-auto bg-base-100 border border-gray-300 shadow-xl flex flex-col justify-between mx-4 ${className}`}> {/* Add margin on both sides */}
            <Link to={`/book/${bookId}`} className="">
                <figure className="px-10 pt-10 mb-10">
                    <img src={image} alt={bookName} className="rounded-xl w-full h-80 object-cover" /> {/* Set fixed height and width */}
                </figure>
                <div className="card-actions ml-5">
                    {/* Render tags if available */}
                    {book.tags && book.tags.map((tag, index) => (
                        <div key={index} className="badge badge-outline text-base text-[#23BE0A] p-4 border-[#23BE0A]">{tag}</div>
                    ))}
                </div>
                <div className="card-body text-xl px-6 pb-6">
                    <h2 className="card-title">{bookName}</h2>
                    <p>by: {author}</p>
                    <div className="flex flex-grow">
                        <p>{category}</p>
                        <div className="flex items-center gap-3">
                            <p><FaRegStar /></p>
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;
