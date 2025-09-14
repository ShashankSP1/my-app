// utils/api.ts
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "shashankshiva6361@gmail.com",
          subject: formData.subject,
          text: `From: ${formData.name} <${formData.email}>\n\n${formData.message}`,
        }),
      }
    );

    const data = await res.json();
    return { ok: res.ok, data };
  } catch (error: any) {
    return { ok: false, error: error.message };
  }
};
