# B&J Professional Cleaning Services - Backend API

This is the backend API server for the B&J Professional Cleaning Services website, built with Express.js and Nodemailer for handling booking requests and email notifications.

## Features

- **Booking API**: Handle customer booking form submissions
- **Email Notifications**: Send confirmation emails to customers and notifications to business owners
- **Input Validation**: Validate email addresses and Ghana phone numbers
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Health Check**: API health monitoring endpoint

## Prerequisites

- Node.js (version 16 or higher)
- Gmail account with App Password enabled
- npm or yarn package manager

## Installation

1. Navigate to the server directory:
   \`\`\`bash
   cd server
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the email credentials and other settings

## Environment Variables

Create a `.env` file in the server directory with the following variables:

\`\`\`env
# Email Configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-password
TO_EMAIL=business-email@gmail.com

# Server Configuration
PORT=3001
NODE_ENV=development
CLIENT_URL=http://localhost:3000
\`\`\`

### Gmail Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in the `EMAIL_PASS` variable

## Running the Server

### Development Mode
\`\`\`bash
npm run dev
\`\`\`
This uses nodemon for automatic restarts during development.

### Production Mode
\`\`\`bash
npm start
\`\`\`

The server will start on the port specified in your `.env` file (default: 3001).

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status and timestamp

### Booking Submission
- **POST** `/api/booking/submit`
- Accepts booking form data and sends email notifications
- Required fields: `fullName`, `phone`, `email`, `address`, `service`
- Optional field: `notes`

### Email Test
- **GET** `/api/booking/test`
- Tests email configuration and connectivity

## Request/Response Examples

### Booking Submission Request
\`\`\`json
{
  "fullName": "John Doe",
  "phone": "0206764690",
  "email": "john@example.com",
  "address": "123 Main St, Accra",
  "service": "restaurant",
  "notes": "Need deep cleaning for kitchen"
}
\`\`\`

### Success Response
\`\`\`json
{
  "success": true,
  "message": "Booking request submitted successfully! We will contact you within 24 hours.",
  "data": {
    "bookingId": "BJ-1703123456789",
    "service": "Restaurant Cleaning",
    "customerName": "John Doe",
    "submittedAt": "2023-12-21T10:30:56.789Z"
  }
}
\`\`\`

## Email Templates

The API sends two types of emails:

1. **Business Notification**: Detailed booking information sent to the business owner
2. **Customer Confirmation**: Confirmation email with booking details and contact information

Both emails are professionally formatted with HTML templates including:
- Company branding (navy blue and orange theme)
- Booking details table
- Contact information
- 20% discount reminder

## Error Handling

The API includes comprehensive error handling for:
- Input validation errors (400 status)
- Email authentication failures (500 status)
- Network connectivity issues (500 status)
- General server errors (500 status)

## Phone Number Validation

The API validates Ghana phone numbers in the following formats:
- `0206764690` (local format)
- `+233206764690` (international format)

## Deployment

For production deployment:

1. Set `NODE_ENV=production` in your environment
2. Update `CLIENT_URL` to your production frontend URL
3. Ensure your hosting service supports Node.js
4. Configure environment variables on your hosting platform

## Security Considerations

- Environment variables are used for sensitive data
- CORS is configured to allow specific origins
- Input validation prevents malicious data
- Error messages don't expose sensitive information in production

## Support

For technical support or questions about the API, contact the development team or refer to the main project documentation.
