import mongoose from "mongoose"; 

const postSchema = mongoose.Schema({
    name: String, 
    imgUrl: String, 
    name: String, 
    category: String,
    task: String, 
    budget: Number 
});

export default mongoose.model("posts", postSchema)