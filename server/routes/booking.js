const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Create reusable transporter object using Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number (basic validation for Ghana numbers)
const isValidPhone = (phone) => {
  const phoneRegex = /^(\+233|0)[2-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ""));
};

// POST /api/booking/submit - Handle booking form submission
router.post("/submit", async (req, res) => {
  try {
    const { fullName, phone, email, address, service, notes } = req.body;

    // Validation
    if (!fullName || !phone || !email || !address || !service) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid Ghana phone number",
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Service type mapping
    const serviceTypes = {
      restaurant: "Restaurant Cleaning",
      building: "Building Maintenance",
      hospital: "Hospital Cleaning",
      event: "Event Cleaning",
      other: "Other Services",
    };

    const serviceName = serviceTypes[service] || service;

    // Email content for business owner
    const businessEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7;">
        <div style="background-color: #0a1a3f; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">🧹 New Booking Request</h1>
          <p style="margin: 10px 0 0 0; color: #ff7b00;">B&J Professional Cleaning Services</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #0a1a3f; margin-top: 0;">Customer Details</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #0a1a3f; width: 30%;">Full Name:</td>
              <td style="padding: 10px 0;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #0a1a3f;">Phone:</td>
              <td style="padding: 10px 0;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #0a1a3f;">Email:</td>
              <td style="padding: 10px 0;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #0a1a3f;">Address:</td>
              <td style="padding: 10px 0;">${address}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #0a1a3f;">Service:</td>
              <td style="padding: 10px 0;">${serviceName}</td>
            </tr>
            ${
              notes
                ? `
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #0a1a3f; vertical-align: top;">Notes:</td>
              <td style="padding: 10px 0;">${notes}</td>
            </tr>
            `
                : ""
            }
          </table>
          
          <div style="background-color: #ff7b00; color: white; padding: 15px; border-radius: 6px; text-align: center; margin-top: 20px;">
            <p style="margin: 0; font-weight: bold;">⏰ Please respond within 24 hours</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 20px; text-align: center;">
            This booking request was submitted on ${new Date().toLocaleString(
              "en-GB",
              { timeZone: "Africa/Accra" }
            )} (Ghana Time)
          </p>
        </div>
      </div>
    `;

    // Email content for customer confirmation
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f7f7;">
        <div style="background-color: #0a1a3f; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">✅ Booking Request Received</h1>
          <p style="margin: 10px 0 0 0; color: #ff7b00;">B&J Professional Cleaning Services</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p style="font-size: 16px; color: #0a1a3f; margin-top: 0;">Dear ${fullName},</p>
          
          <p style="color: #333; line-height: 1.6;">
            Thank you for choosing B&J Professional Cleaning Services! We have received your booking request for <strong>${serviceName}</strong> and will contact you within 24 hours to confirm your appointment.
          </p>
          
          <div style="background-color: #f0f8ff; border-left: 4px solid #ff7b00; padding: 15px; margin: 20px 0;">
            <h3 style="color: #0a1a3f; margin-top: 0;">Your Booking Details:</h3>
            <ul style="color: #333; margin: 0; padding-left: 20px;">
              <li><strong>Service:</strong> ${serviceName}</li>
              <li><strong>Location:</strong> ${address}</li>
              <li><strong>Contact:</strong> ${phone}</li>
              ${
                notes
                  ? `<li><strong>Special Requirements:</strong> ${notes}</li>`
                  : ""
              }
            </ul>
          </div>
          
          <div style="background-color: #ff7b00; color: white; padding: 15px; border-radius: 6px; text-align: center; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold;">🎉 Don't forget - you're eligible for 20% OFF your first service!</p>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px;">
            <h3 style="color: #0a1a3f;">Contact Us:</h3>
            <p style="color: #333; margin: 5px 0;">📞 0206 764 690 / 0257 597 957</p>
            <p style="color: #333; margin: 5px 0;">📍 Opp. Nana Saah School, Kwabenya - Accra</p>
            <p style="color: #333; margin: 5px 0;">📱 TikTok: bj cleaning services</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 20px; text-align: center;">
            We look forward to serving you!<br>
            <em>B&J Professional Cleaning Services Team</em>
          </p>
        </div>
      </div>
    `;

    // Send email to business owner
    const businessMailOptions = {
      from: `"B&J Cleaning Website" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `🧹 New Booking Request - ${serviceName} (${fullName})`,
      html: businessEmailContent,
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: `"B&J Professional Cleaning Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject:
        "✅ Booking Request Confirmed - B&J Professional Cleaning Services",
      html: customerEmailContent,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    console.log(
      `📧 Booking emails sent successfully for ${fullName} (${serviceName})`
    );

    res.status(200).json({
      success: true,
      message:
        "Booking request submitted successfully! We will contact you within 24 hours.",
      data: {
        bookingId: `BJ-${Date.now()}`,
        service: serviceName,
        customerName: fullName,
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Booking submission error:", error);

    // Handle specific nodemailer errors
    if (error.code === "EAUTH") {
      return res.status(500).json({
        success: false,
        message:
          "Email authentication failed. Please try again later or contact us directly.",
      });
    }

    if (error.code === "ECONNECTION") {
      return res.status(500).json({
        success: false,
        message: "Unable to connect to email service. Please try again later.",
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Failed to submit booking request. Please try again or contact us directly.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// GET /api/booking/test - Test email configuration
router.get("/test", async (req, res) => {
  try {
    const transporter = createTransporter();
    await transporter.verify();

    res.json({
      success: true,
      message: "Email configuration is working correctly",
      config: {
        service: "Gmail",
        user: process.env.EMAIL_USER,
        recipient: process.env.TO_EMAIL,
      },
    });
  } catch (error) {
    console.error("Email test error:", error);
    res.status(500).json({
      success: false,
      message: "Email configuration test failed",
      error: error.message,
    });
  }
});

module.exports = router;
