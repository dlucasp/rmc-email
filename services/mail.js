"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const configs_1 = require("../configs/configs");
class Mail {
    constructor(to, subject, message) {
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
    sendMail() {
        let mailOptions = {
            from: 'nao-responda@romancini.com.br',
            to: this.to,
            subject: this.subject,
            html: this.message
        };
        const transporter = nodemailer.createTransport({
            host: configs_1.default.host,
            port: configs_1.default.port,
            secure: true,
            auth: {
                user: configs_1.default.user,
                pass: configs_1.default.password
            },
            tls: { rejectUnauthorized: true }
        });
        console.log(mailOptions);
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return error + "Deu erro";
            }
            else {
                return "E-mail enviado com sucesso!";
            }
        });
    }
}
exports.default = new Mail;
