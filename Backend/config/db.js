import mongoose from 'mongoose'
import color from 'colors'

const connectDB = async () => {
     await mongoose.connect(process.env.MONGO_URI)
          .then(() => {
               console.log("Connected to the Database".yellow.bold.underline);
          })
          .catch((err) => {
               console.log(err)
          });
}

export default connectDB;