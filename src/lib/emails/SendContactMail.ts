import contactMail from '$lib/emails/contact-mail.svelte';
import { render } from 'svelte-email';
import nodemailer from 'nodemailer';
import nodemailMailgun from 'nodemailer-mailgun-transport';

const auth = {
	auth: {
		api_key: "key-932948cd2a0ea3fcfac84d84cc8813fb",
		domain: "sandboxa14a572d73a449609d199e892b0a238e.mailgun.org"
	}
}

const transporter = nodemailer.createTransport( nodemailMailgun(auth) );

export async function sendEmail(email: string, message: string) {
	const emailHtml = render({
		template: contactMail,
		props: {
			text: message
		}
	});

	const options = {
		from: email,
		to: 'adrian-hagen@web.de',
		subject: 'Beschwerde an Hagen',
		text: 'Plaintext version of the message',
		html: emailHtml
	};

	await transporter.sendMail(options);
}