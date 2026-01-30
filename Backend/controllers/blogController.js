import blogModel from "../models/blogModel.js";
import fs from 'fs'

// Add Blog
const addBlog = async (req, res) => {
    try {
        let image_filename = req.file ? `${req.file.filename}` : "";

        const blog = new blogModel({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            category: req.body.category,
            image: image_filename,
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

// Update Blog
const updateBlog = async (req, res) => {
    try {
        const { id, title, content, author, category } = req.body;

        let updateData = {
            title,
            content,
            author,
            category
        };

        if (req.file) {
            updateData.image = req.file.filename;

            // Optionally delete old image
            const oldBlog = await blogModel.findById(id);
            if (oldBlog && oldBlog.image) {
                fs.unlink(`uploads/${oldBlog.image}`, () => { });
            }
        }

        await blogModel.findByIdAndUpdate(id, updateData);
        res.json({ success: true, message: "Blog Updated" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Remove Blog
const removeBlog = async (req, res) => {
    try {
        await blogModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Blog Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addBlog, listBlogs, removeBlog, updateBlog }
