"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mail_1 = require("./services/mail");
class App {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.routes();


    this.app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    }


    routes() {
    
        this.app.route("/").post((req, res) => {
            const message = Object.assign({}, req.body);
            mail_1.default.to = message.to;
            mail_1.default.subject = message.subject;
            mail_1.default.message = message.message;
            let result = mail_1.default.sendMail();
            res.status(200).json({ 'result': result });
            res.send({ 'result': 'version 0.0.2' });
        });

        this.app.get('/', function (req, res, next) {   
            res.json({msg: 'This is CORS-enabled for a whitelisted domain.'}) 
        });
    }


}
exports.default = new App();
