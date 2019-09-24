import {Schema, model, Document} from 'mongoose'

const schema = new Schema({
    accountSid: String,
    apiVersion : String,
    body : String,
    dateCreated : Date,
    dateUpdated : Date,
    errorMessage : String,
    from : String,
    sid : String,
    status : String,
    to : String,
    type : String
});


interface ISms extends Document{
    accountSid: string;
    apiVersion : string;
    body : string;
    dateCreated : Date;
    dateUpdated : Date;
    errorMessage : string;
    from : string;
    sid : string;
    status : string;
    to : string;
    type : string;
}

export default model<ISms>('Sms', schema);
