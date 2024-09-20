const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const cors=require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const PORT = process.env.PORT || 8080;
const session=require('express-session');
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const OAuth2StrategyFacebook = require("passport-facebook").Strategy;
const OAuth2StrategyTwitter = require("passport-twitter").Strategy;
const OAuth2StrategyLinkedIn = require("passport-linkedin-oauth2").Strategy;



const clientid="1007426022468-g6o4qh3q3oco0tkev4q6os859mljpvgn.apps.googleusercontent.com";
const clientsecret="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";

app.get('/ping',(req,res)=>{
    res.send("komal");
})

app.use(bodyParser.json());
app.use(cors({
    origin:"https://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));
app.use(express.json());
app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);

// Session
app.use(session({
    secret:"uhgeritjfjidje3446fhue5f7dfr4uwehw7hwefrh7ruwr74werfbdjb"
}))

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})