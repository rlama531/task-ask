import mongoose from "mongoose"; 

const postSchema = mongoose.Schema({
    name: String, 
    category: String,
    description: String, 
    budget: Number 
});

export default mongoose.model("posts", postSchema)