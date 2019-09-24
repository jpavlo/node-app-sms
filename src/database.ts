import mongoose from 'mongoose';


const bdpassword = process.env.MONGO_PASS;

export async function startConection(){
    await mongoose.connect('mongodb+srv://YOURUSER:'+bdpassword+'@cluster0-szfr8.gcp.mongodb.net/smsdb?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useFindAndModify : false
      });
      
    console.log("DB is connected");
}