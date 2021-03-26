import React, { useState } from 'react'
import './Posts.css'

function Posts() {
    const [allPosts, setPosts] = useState([
        {
            name: "Robert", 
            category: "Editing",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$100", 
            postID: "01",
        }, 
        {
            name: "james", 
            category: "Tutoring",
            task: "I need someone to asdfkajsldfjad", 
            budget: "203", 
            postID: "02", 
        },
        {
            name: "bud", 
            category: "Photography",
            task: "I need someone to asdfkajsldfjad", 
            budget: "50",
            postID: "03",  
        }, 
        {
            name: "quincy", 
            category: "Graphic Design",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$10", 
            postID: "04",
        }, 
        {
            name: "bigdog", 
            category: "Web Development",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$1000000", 
            postID: "05",
        }, 
        {
            name: "bigdog", 
            category: "Web Development",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$1000000", 
            postID: "05",
        },
        {
            name: "bigdog", 
            category: "Web Development",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$1000000", 
            postID: "05",
        },
        {
            name: "bigdog", 
            category: "Web Development",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$1000000", 
            postID: "05",
        },
        {
            name: "bigdog", 
            category: "Web Development",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$1000000", 
            postID: "05",
        },
        {
            name: "bigdog", 
            category: "Web Development",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$1000000", 
            postID: "05",
        },
        {
            name: "bigdog", 
            category: "Web Development",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$1000000", 
            postID: "05",
        },
        {
            name: "bigdog", 
            category: "Web Development",
            task: "I need someone to asdfkajsldfjad", 
            budget: "$1000000", 
            postID: "05",
        },

    
    ]);
    

    return (
        <div className="allPosts">
            <div className="postsContainer" > 
                {allPosts.map((post) => (
                    <div 
                        className="clickablePost" 
                        key={post.postID}
                    >

                        <div className="individualPost"> 
                            <h1> 
                                {post.category}   
                            </h1> 
                            <h2>
                                Name: {post.name}
                            </h2> 
                            <h3> 
                                Task Description: {post.task}
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
