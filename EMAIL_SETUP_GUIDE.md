# 📧 EmailJS Setup Guide for Your Portfolio

This guide will help you set up EmailJS so that recruiter messages from your contact form are sent directly to your email inbox.

## 🔧 Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Set Up Email Service
1. After logging in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail is recommended)
4. Connect your Gmail account:
   - Click "Connect Account"
   - Sign in with your Gmail account
   - Allow EmailJS permissions
5. Name your service (e.g., "Portfolio Contact Form")
6. Save the service

### 3. Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message - {{from_name}}

Hi Jyoshika,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Website
```

4. Save the template and note the template ID

### 4. Get Your Credentials
1. Go to "Account" → "General" in the dashboard
2. Find your "Public Key" (this is your User ID)
3. Note down:
   - Service ID (from step 2)
   - Template ID (from step 3)
   - Public Key/User ID (from step 4)

### 5. Update Your Code
Replace the placeholder values in `/src/components/Contact.js`:

```javascript
const serviceID = 'your_actual_service_id';     // Replace with your Service ID
const templateID = 'your_actual_template_id';  // Replace with your Template ID
const userID = 'your_actual_public_key';        // Replace with your Public Key
```

## 🧪 Test Your Setup

1. Save all changes
2. Restart your development server: `npm start`
3. Go to your contact form at `http://localhost:3000`
4. Fill out the form and submit
5. Check your email inbox (including spam folder)

## 🆓 Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- 2 email templates
- 50MB attachment storage
- Basic support

This should be sufficient for a personal portfolio website.

## 🛠️ Troubleshooting

### If emails aren't arriving:
1. Check your EmailJS dashboard for delivery status
2. Verify your email template variables match the form field names
3. Check your spam/junk folder
4. Ensure your Gmail account allows less secure apps (if using Gmail)
5. Verify all credentials are correctly copied

### Common Issues:
- **"Service not found"**: Check your Service ID
- **"Template not found"**: Check your Template ID
- **"Invalid user"**: Check your Public Key
- **Emails in spam**: Add your email to contacts or mark as not spam

## 📞 Need Help?

If you encounter issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. EmailJS support: support@emailjs.com
3. Or ask me for help!

---

Once set up, recruiters' messages will go directly to your email inbox! 🎉