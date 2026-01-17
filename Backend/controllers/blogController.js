import blogModel from "../models/blogModel.js";
import fs from 'fs'

// Add Blog
const addBlog = async (req, res) => {
    try {
        let image_filename = `${req.file.filename}`;

        const blog = new blogModel({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            image: image_filename,
            category: req.body.category,
            date: Date.now()
        })

        await blog.save();
        res.json({ success: true, message: "Blog Added" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// List Blogs
const listBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        res.json({ success: true, blogs })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Remove Blog
const removeBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.body.id);
        fs.unlink(`uploads/${blog.image}`, () => { })

        await blogModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Blog Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addBlog, listBlogs, removeBlog }
