import express from "express";
import { addPublication, listPublications, removePublication } from "../controllers/publicationController.js";
import multer from "multer";

const publicationRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

publicationRouter.post("/add", upload.single("file"), addPublication);
publicationRouter.get("/list", listPublications);
publicationRouter.post("/remove", removePublication);

export default publicationRouter;
