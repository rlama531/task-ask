import React, { useState, useEffect } from 'react';
import './Posts.css';
import axios from './axios';
function Posts() {
    const [allPosts, setPosts] = useState([]); 
    
    useEffect(() => {
        async function fetchData() { 
            const req = await axios.get('/upload');
            setPosts(req.data);

        }

        fetchData(); 

    }, []);

    return (
        <div className="allPosts">
            <div className="postsContainer" > 
                {allPosts.map((post) => (
                    <div 
                        className="clickablePost" 
                        key={post._id}
                    >

                        <div className="individualPost"> 
                            <h1> 
                                {post.category}   
                            </h1> 
                            <h2>
                                Name: {post.name}
                            </h2> 
                            <h3> 
                                Task Description: {post.description}
                            </h3> 

                            <h4> 
                                Budget: {post.budget} 
                            </h4> 

                        </div> 

                    </div> 
                
                ))}
            </div>
        </div>
    )
}

export default Posts
