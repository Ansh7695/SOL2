import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    file: { type: String, required: true }, // URL to the PDF file
    thumbnail: { type: String }, // Optional URL to a thumbnail image
    date: { type: Date, default: Date.now }
});

const publicationModel = mongoose.models.publication || mongoose.model("publication", publicationSchema);

export default publicationModel;
