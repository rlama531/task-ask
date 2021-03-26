import React from 'react';
import { Link } from "react-router-dom";
import "./CreatePosts.css";
import IconButton from '@material-ui/core/IconButton'; 

function CreatePosts() {
    return (
        <div className="createPostsButton">
            <IconButton>
                <Link to="/upload" style= {{textDecoration: 'none'}}> 
                    <h1>Click to Upload Task</h1>
                </Link>
                
            </IconButton> 
        </div>
    )
}

export default CreatePosts
