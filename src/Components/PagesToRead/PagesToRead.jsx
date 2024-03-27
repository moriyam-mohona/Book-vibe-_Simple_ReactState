import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';
import { getBooks } from '../../utils'; // Assuming you have a utility function to get books from local storage

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const BookChart = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {

        const storedBooks = getBooks();

        const formattedData = storedBooks.map((book, index) => ({
            name: book.bookName,
            uv: book.totalPages,
            fill: colors[index % colors.length],
        }));

        setBookData(formattedData);
    }, []);

    return (
        <div className='bg-gray-100 px-10 py-20'>
            <BarChart width={1000} height={400} data={bookData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-90} interval={0} textAnchor="end" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />

                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar></TriangleBar>} >
                    {bookData.map((entry, index) => (

                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default BookChart;
