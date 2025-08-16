
import nodemailer from 'nodemailer';

const emailConfig = {
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true, // 使用 SSL
  auth: {
    user: 'print@neu-ink.com',
    pass: 'gafQom-cagbob-gihqi4',
  },
};

// const emailConfig = {
//   host: "smtp.163.com", //邮箱服务器  这里我用的QQ邮箱
//   port: 465, //邮箱使用端口
//   secure: true, //是否使用默认的465端口
//   auth: {
//     user: "13237040569@163.com", // 发送方邮箱地址
//     pass: "EUADWNENNGSOVXPE", // smtp 验证码
//   },
// };

const transporter = nodemailer.createTransport(emailConfig);

async function sendEmail(req, res) {
  console.log('req.body---',req.body)
  try {
    await transporter.sendMail({
      to: 'silent@waltknit.com',
      // to: '15170702455@163.com',
      from: emailConfig.auth.user,
      subject: 'Walttec.org Contact Form',
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
      <h2 style="text-align: center; color: #007BFF;">Contact Form Submission</h2>
      <p><strong>Name:</strong> ${req.body.name || 'N/A'}</p>
      <p><strong>Email:</strong> ${req.body.email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${req.body.number || 'N/A'}</p>
      <p><strong>Company:</strong> ${req.body.company || 'N/A'}</p>
      <p><strong>Google Drive:</strong> ${req.body.googleDrive || 'N/A'}</p>
      <p><strong>Message:</strong><br />${req.body.message || 'N/A'}</p>
      <p><strong>City:</strong> ${req.body.city || 'N/A'}</p>
      <p><strong>Region:</strong> ${req.body.region || 'N/A'}</p>
      <p><strong>Country:</strong> ${req.body.country || 'N/A'}</p>
      <p><strong>Hostname:</strong> ${req.body.hostname || 'N/A'}</p>
      <p><strong>Browser Name:</strong> ${req.body.browserName || 'N/A'}</p>
      <p><strong>Platform:</strong> ${req.body.platform || 'N/A'}</p>
    </div>
  `,
    });
    res.status(200).json({ error: '' });
  } catch (error) {
    console.error('Error occurred:', error.message);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}


export default sendEmail;
