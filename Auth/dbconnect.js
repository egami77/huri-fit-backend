import mongoose from 'mongoose';

export const connectDB = async () => {
    try {

        const conn = await mongoose.connect('mongodb+srv://gautamimage7:99Te1OoziQCGWjCy@hurifit.qohb2.mongodb.net/?retryWrites=true&w=majority&appName=HuriFit')
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error in mongoconnect: ${error.message}`);
        process.exit(1);
    }
}; 