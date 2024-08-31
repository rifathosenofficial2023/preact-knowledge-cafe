import { useEffect ,useState} from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleAddToBookmark ,handleMarkAsRead}) => {
    const [blog, setBlog] = useState([]);

    useEffect (() => {

        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data));

    }, []);
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs-{blog.length}</h1>
            {
                blog.map(blog => <Blog key={blog.id } blog ={blog}
                    handleAddToBookmark ={handleAddToBookmark}
                    handleMarkAsRead ={handleMarkAsRead}
                
                ></Blog>)
            }
        </div>
    );
};
export default Blogs;


