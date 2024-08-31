import BookMark from "../BookMark/BookMark";


const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 m-4 rounded-xl mt-2 pt-4">
            <div>
                <h3 className="text-4xl text-purple-600">Reading Time : {readingTime}</h3>
            </div>
            <h1 className="text-3xl text-center ">BookMarks: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <BookMark 
                
                key={idx}
                bookmark={bookmark}
                > </BookMark>)
            }
        </div>
    );
};

export default BookMarks;