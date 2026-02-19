import nodemailer from 'nodemailer';

// Create Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// Helper to send mail
const sendMail = async (to, subject, html, attachments = []) => {
    try {
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: to,
            subject: subject,
            html: html,
            attachments: attachments
        };
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};

// --- Controllers ---

// 1. Enrollment Email (with CV)
export const sendEnrollmentEmail = async (req, res) => {
    try {
        const { name, email, phone, role } = req.body;
        const cvFile = req.file; // From multer

        if (!name || !email || !phone || !role) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        const subject = `New Enrollment Application: ${role} - ${name}`;
        const html = `
            <h2>New Enrollment Application</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Role Applied For:</strong> ${role}</p>
            <p>Please find the attached CV.</p>
        `;

        const attachments = cvFile ? [{
            filename: cvFile.originalname,
            path: cvFile.path
        }] : [];

        // Send to Self (Admin)
        const success = await sendMail(process.env.MAIL_USER, subject, html, attachments);

        if (success) {
            res.json({ success: true, message: "Application submitted successfully" });
        } else {
            res.json({ success: false, message: "Failed to send application email" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// 2. Contact Us Email
export const sendContactEmail = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        const subject = `New Contact Inquiry from ${name}`;
        const html = `
            <h2>New Contact Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `;

        // Send to Self (Admin)
        const success = await sendMail(process.env.MAIL_USER, subject, html);

        if (success) {
            res.json({ success: true, message: "Message sent successfully" });
        } else {
            res.json({ success: false, message: "Failed to send message" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// 3. Order Confirmation Email (Exported for use in orderController)
export const sendOrderEmails = async (order, userEmail) => {
    try {
        const subjectAdmin = `New Order Received: #${order._id}`;
        const htmlAdmin = `
            <h2>New Order Received</h2>
            <p><strong>Order ID:</strong> ${order._id}</p>
            <p><strong>Customer Email:</strong> ${userEmail}</p>
            <p><strong>Amount:</strong> ₹${order.amount}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <h3>Shipping Address:</h3>
            <p>
                ${order.address.firstName} ${order.address.lastName}<br/>
                ${order.address.street}<br/>
                ${order.address.city}, ${order.address.state} - ${order.address.zipcode}<br/>
                Phone: ${order.address.phone}
            </p>
            <h3>Items:</h3>
            <ul>
                ${order.items.map(item => `<li>${item.name} x ${item.quantity} - ${item.size}</li>`).join('')}
            </ul>
        `;

        const subjectUser = `Order Confirmation: #${order._id}`;
        const htmlUser = `
            <h2>Thank You for Your Order!</h2>
            <p>Hi,</p>
            <p>We have received your order #${order._id} and it is being processed.</p>
            <p><strong>Amount:</strong> ₹${order.amount}</p>
            <h3>Shipping Address:</h3>
            <p>
                ${order.address.firstName} ${order.address.lastName}<br/>
                ${order.address.street}<br/>
                ${order.address.city}, ${order.address.state} - ${order.address.zipcode}<br/>
                Phone: ${order.address.phone}
            </p>
            <h3>Order Details:</h3>
            <ul>
                ${order.items.map(item => `<li>${item.name} x ${item.quantity} - ${item.size}</li>`).join('')}
            </ul>
            <p>We will notify you once it ships.</p>
        `;

        // Send to Admin
        await sendMail(process.env.MAIL_USER, subjectAdmin, htmlAdmin);

        // Send to Customer
        await sendMail(userEmail, subjectUser, htmlUser);

        return true;
    } catch (error) {
        console.error("Error sending order emails:", error);
        return false;
    }
};
