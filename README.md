# Authentication REST API using NodeJS, MongoDb & JWT
Example of Authentication REST API of User using NODE JWT MongoDB(Mongoose) 

Prerequisites:<br>
- Install [NodeJs](https://nodejs.org/en/)<br>
- Install Nodemon <br>
<code>npm i -g nodemon</code>
- USE [MongoDB - MongoDB Atlas Cloud](https://www.mongodb.com/download-center/cloud) OR Do Local Setup [MongoDB Server](https://www.mongodb.com/download-center/community)

NPM Packages Used
   - @hapi/joi    //used for Validation
   - bcryptjs     //Used for Password Encryption
   - dotenv       //Used to Setting Environment Variables
   - express      //Management of everything, from routes, to handling requests and views
   - jsonwebtoken //Authentication Token Generation and Expiry Management
   - mongoose     // Get & Put in data in MongoDB



Create .env file in root of Directory with 2 vairiables
  - DB_CONNECT = [username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]   // specify the mongodb connection URI  
  - TOKEN_SECRET = EXAMPLETEXTTOENCODE   // Unique JWT encode KEY



To Download Dependency use
<code>
npm i
</code>
OR
<code>
npm install
</code>

To run Application Use
<code>
npm Start
</code>



