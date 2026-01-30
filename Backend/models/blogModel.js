import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String },
    category: { type: String, default: "General" },
    date: { type: Number, required: true }
});

const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default blogModel;
