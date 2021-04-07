import mongoose from "mongoose"; 

const postSchema = mongoose.Schema(
    {
        name: { type: String, required: true }, 
        category: { type: String, required: true },
        description: { type: String, required: true }, 
        budget: { type: Number, required: true }
    }, 
    { timestamps: true }, 
);

export default mongoose.model("Post", postSchema)