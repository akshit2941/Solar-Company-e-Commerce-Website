// app/api/contact/route.js
import nodemailer from 'nodemailer'

export async function POST(req) {
    const { name, email, phone, budget, message } = await req.json()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    const mailOptions = {
        from: email,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Contact Form Submission',
        text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Budget: ${budget}
      Message: ${message}
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 })
    } catch (error) {
        console.error('Error sending email', error)
        return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 })
    }
}
