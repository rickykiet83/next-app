import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeTemplate from '@/emails/WelcomeTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	await resend.emails.send({
		from: 'kietpham.dev@gmail.com',
		to: 'fafrellarezo-1588@yopmail.com',
		subject: 'Welcome on board',
		react: <WelcomeTemplate name='Kiet' />,
	});

	return NextResponse.json({});
}
