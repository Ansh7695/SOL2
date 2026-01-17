import publicationModel from "../models/publicationModel.js";
import fs from 'fs'

// Add Publication
const addPublication = async (req, res) => {
    try {
        let fileUrl = `${req.file.filename}`;

        const publication = new publicationModel({
            title: req.body.title,
            description: req.body.description,
            file: fileUrl,
            date: Date.now()
        })

        await publication.save();
        res.json({ success: true, message: "Publication Added" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// List Publications
const listPublications = async (req, res) => {
    try {
        const publications = await publicationModel.find({});
        res.json({ success: true, publications })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Remove Publication
const removePublication = async (req, res) => {
    try {
        const publication = await publicationModel.findById(req.body.id);
        fs.unlink(`uploads/${publication.file}`, () => { })

        await publicationModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Publication Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addPublication, listPublications, removePublication }
