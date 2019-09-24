import Twilio from 'twilio';
import { Request, Response } from 'express';
import { MessageListInstanceCreateOptions } from 'twilio/lib/rest/api/v2010/account/message';
import Sms from '../models/sms'


const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const fromPhone = process.env.FROM_PHONE;
const fromWhatsapp = process.env.FROM_WHATSAPP;

const client = Twilio(accountSid, authToken);

export async function sendText(req: Request, res: Response): Promise<Response> {

    const { message, phone, type } = req.body;

    if(type != "Sms" && type != "Whatsapp"){
        return res.json({
            message : "Verify type"
        });
    }

    if(message.length > 140 || message.length == 0){
        return res.json({
            message : "Verify message"
        });
    }

    if(phone.length != 10){
        return res.json({
            message : "Verify phone"
        });
    }


    var from = fromPhone;
    var to = "+52" + phone;
    
    if(type == "Whatsapp"){
        from = 'whatsapp:+' + fromWhatsapp;
        to = 'whatsapp:+521' + phone;
    }


    const msgData: MessageListInstanceCreateOptions = {
        from,
        to,
        body: message
    };


    const result = await client.messages.create(msgData, (err, result) => {
        console.log(result);
        console.log(err);
    });

    const newSms = {
        accountSid : result.accountSid,
        apiVersion : result.apiVersion,
        body : result.body,
        dateCreated : result.dateCreated,
        dateUpdated : result.dateUpdated,
        errorMessage : result.errorMessage,
        from : result.from,
        sid : result.sid,
        status : result.status,
        to : result.to,
        type : type
    }

    const sms = new Sms(newSms);
    await sms.save();

    return res.json(sms);
}
