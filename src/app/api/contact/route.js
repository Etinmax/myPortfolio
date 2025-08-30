import nodemailer from 'nodemailer';

export async function POST(request) {
  const { fullname, email, phone, message } = await request.json();
  
  // Configure your email service (Gmail, SendGrid, etc.)
  const transporter = nodemailer.createTransporter({
    // Your email configuration
  });
  
  await transporter.sendMail({
    to: 'maxwelletinosa@gmail.com',
    subject: `Contact Form: ${fullname}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  });
  
  return Response.json({ success: true });
}