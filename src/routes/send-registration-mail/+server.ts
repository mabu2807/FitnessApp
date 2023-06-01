import registrationMail from '$lib/emails/registration.svelte';
import { render } from 'svelte-email';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'adrian.mwh100@gmail.com',
		pass: 'mxffwyqrrmwssjii'
	}
});

const emailHtml = await render({
	template: registrationMail
});

const options = {
	from: 'sender@server.com',
	to: 'aleksgeorg@outlook.de',
	subject: 'Welcome to FitnessHub',
	text: 'Plaintext version of the message',
	html: emailHtml
};

transporter.sendMail(options);
