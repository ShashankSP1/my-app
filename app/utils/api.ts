import emailjs from "@emailjs/browser";

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    return { ok: true, data: { message: "Email sent successfully!" } };
  } catch (error: any) {
    return { ok: false, error: error.text || error.message };
  }
};
