import React from 'react'
import Header from "./homepageSrc/Header.js";
import Posts from "./homepageSrc/Posts.js";
import CreatePosts from "./homepageSrc/CreatePosts.js"; 

function HomePage() {
    return (
        <div className="homepage">
            <Header/>
            <CreatePosts/>
            <Posts/> 
        </div>
    )
}

export default HomePage
