# API Rest / Node js + Atlas MongoDB + Twilio SMS + Twilio Whatsapp + JWT + Upload image + Typescript 

This project was generated with [Node js](https://nodejs.org/en/docs/) version 10.16.0.

## Install

`npm install`

## Create .env file

create an **.env** file in the root folder defining the following variables

> ACCOUNT_SID='XXXXX' // From twilio
> AUTH_TOKEN='XXXXXX' // From Twilio
> MY_PHONE_NUMBER='+XXXXXXXXXXXX' // From Twilio
> FROM_PHONE='+XXXXXXXXXXX' // From Twilio
> MONGO_PASS='XXXXXXXXXXXXX' // From Atlas MongoDB
> FROM_WHATSAPP='XXXXXXXXXXX' // From Twilio
> APPLICATION_SECRET='UE9tCaxtgBKXNSsagEds9GcqGYaqvdfs9DEsWXKvCtmvnFxdxPj1S3iQeDNKp99e5' // For JWT


## Development server

Run `nmp start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


## Consume API

Go to Postman and GET to `http://localhost:3000/api/` to receive greetings from me.

___

Go to Postman and POST to `http://localhost:3000/api/user` to get a Token based on JWT.
___

Go to Postman and GET/POST to `http://localhost:3000/api/photos` to get/upload a file using **multer**

###### POST
> Body (form-data)
> Key (image) , Value (File)
> Key (title), Value (String)
> Key (description), Value (String) 

___

Go to Postman and GET/DELETE/PUT to `http://localhost:3000/api/photos/:id` to get/delete/update title and description.

###### PUT
> Body (application/json)
```json
{
	"title" : "new title",
	"description" : "new description" 
}
```
___

Go to Postman and POST to `http://localhost:3000/api/sms/` to send a message.

###### POST
> Body (application/json)
```json
{
	"message" : "new title",
	"phone" : "XXXXXXXXXX",
	"type" : "Sms | Whatsapp"
}
```
___





## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Further help

To get more help on Node js  `node --help` or go check out the [Node js Documentation](https://nodejs.org/en/docs/).


> **By @JPavlo**.



