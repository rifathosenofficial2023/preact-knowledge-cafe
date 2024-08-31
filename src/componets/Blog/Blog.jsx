import PropTypes from 'prop-types'; // ES6
import { FaRegBookmark  } from "react-icons/fa";


const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex '>
                    <img className='w-14 ' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'> {author}</h3>
                        <p>{posted_date}</p>

                    </div>

                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button 
                    onClick={()=> handleAddToBookmark (blog)}
                    
                    className='ml-2'><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash ,idx) => <span key={idx}> <a> # {hash}</a></span>)
                }

            </p>
            <button 
            
            onClick={ () =>handleMarkAsRead(id,reading_time)}
            className='text-purple-600 font-bold underline '>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;