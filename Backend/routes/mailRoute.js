import express from 'express';
import multer from 'multer';
import { sendEnrollmentEmail, sendContactEmail } from '../controllers/mailController.js';

const mailRouter = express.Router();

// Multer storage for temporary file holding
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

mailRouter.post('/enroll', upload.single('cv'), sendEnrollmentEmail);
mailRouter.post('/contact', sendContactEmail);

export default mailRouter;
