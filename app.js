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
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ 'result': 'version 0.0.2' });
        });
        this.app.route("/").post((req, res) => {
            const message = Object.assign({}, req.body);
            mail_1.default.to = message.to;
            mail_1.default.subject = message.subject;
            mail_1.default.message = message.message;
            let result = mail_1.default.sendMail();
            res.status(200).json({ 'result': result });
            res.send({ 'result': 'version 0.0.2' });
        });
    }
}
exports.default = new App();
