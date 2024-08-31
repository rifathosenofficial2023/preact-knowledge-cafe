
import './App.css'
import Header from './componets/Header/Header'
import Blogs from './componets/Blogs/Blogs';
import BookMarks from './componets/BookMarks/BookMarks';
import { useState } from 'react';



function App() {
  
const [bookmarks,setBookmarks] = useState([]);
const [readingTime,setReadingTime] = useState(0);

const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks,blog]
  setBookmarks (newBookmarks)

}

const handleMarkAsRead = (id,time) => {
  // setReadingTime(readingTime + time)
  const newReadingTime = readingTime +time;
  setReadingTime(newReadingTime);
  // remove the read blog from bookmark
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
  setBookmarks(remainingBookmarks)
}
  return (
    <div>
    <Header> </Header>
    <div className='md:flex max-w-7xl mx-auto '>
      <Blogs handleAddToBookmark ={handleAddToBookmark}
      
      handleMarkAsRead = {handleMarkAsRead}
      
      ></Blogs>
      <BookMarks bookmarks ={bookmarks}
      readingTime={readingTime}
      
      ></BookMarks>
    </div>
   
    </div>
  )
}

export default App
