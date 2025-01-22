import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './Database/dbConfig.js';
import roomRoutes from './Routers/roomRouter.js';
import paymentRoutes from './Routers/paymentRouter.js';
import userRoutes from './Routers/userRouter.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDb();

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to backend  🎄✨");
})

// Use Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);

// 404 Error Handling (if route doesn't match)
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});


const port = process.env.PORT || 4000
 app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
 });