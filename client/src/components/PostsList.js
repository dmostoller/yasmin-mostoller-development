import React, {useState, useEffect} from "react";
import Post from "./Post";
import { Link } from "react-router-dom"

function PostsList ({user, isAdmin}) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      fetch(`/posts`)
      .then((res) => res.json())
      .then((posts) => {setPosts(posts)})
    }, []);

    const sortedPosts = posts.sort((a, b) => (a.date_added) > (b.date_added) ? -1 : 1)

    const blog = sortedPosts.map((post) => {
        return <Post 
        key={post.id}
        id={post.id} 
        title={post.title}
        content={post.content}
        image_url={post.image_url}
        video_url={post.video_url}
        date_added={post.date_added}
        isAdmin={isAdmin}
        />
    })

    return (
        <div className="ui container fluid">
        <h2 className="ui dividing header" style={{textAlign: "left", padding: "10px"}}>My Blog</h2>    
        {(user && isAdmin) ?  
            <div style={{paddingBottom:"25px", textAlign:"center"}} className="ui container">   
                <Link to={`/posts/new`} className="ui circular animated fade icon button teal small" style={{width: "150px"}} tabindex="0">
                    <div className="visible content"><i className="plus icon"></i></div>
                    <div className="hidden content">
                        Create New Post
                    </div> 
                </Link>

            </div>
            : <div></div>
        }
            <div className="ui grid">{blog}</div> 
        </div>
    )
}

export default PostsList