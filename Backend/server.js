import express from 'express'; // Server entry
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import mailRouter from './routes/mailRoute.js';
import publicationRouter from './routes/publicationRoute.js';
import blogRouter from './routes/blogRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/mail', mailRouter);
app.use('/api/publication', publicationRouter);
app.use('/api/blog', blogRouter);
app.use('/images', express.static('uploads'));

app.get('/', (req, res) => {
    res.send("API Working 🚀");
});

// Start Server
app.listen(port, () => console.log(`Server started on PORT ${port}`));
