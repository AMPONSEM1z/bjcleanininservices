# B&J Professional Cleaning Services Website

A modern, professional, and fully responsive website for B&J Professional Cleaning Services built with React + Next.js for the frontend and Express + Nodemailer for email integration.

![B&J Professional Cleaning Services](https://via.placeholder.com/800x400/0A1A3F/FF7B00?text=B%26J+Professional+Cleaning+Services)

## 🌟 Features

### Frontend (Next.js + TailwindCSS)

- **Modern Design**: Professional dark navy blue and orange theme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Interactive Components**: Smooth animations and hover effects
- **Service Showcase**: Dedicated sections for restaurant, building, hospital, and event cleaning
- **Customer Testimonials**: Rotating testimonial carousel
- **Contact Integration**: Professional booking form with real-time validation
- **Promotional Banner**: 20% OFF promotion with dismissible banner

### Backend (Express + Nodemailer)

- **Booking API**: Handle customer booking form submissions
- **Email Notifications**: Professional HTML email templates
- **Input Validation**: Email and Ghana phone number validation
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Health Monitoring**: API health check endpoint

## 🎨 Design & Branding

- **Primary Color**: Dark Navy Blue (#0A1A3F)
- **Accent Color**: Orange (#FF7B00)
- **Typography**: Montserrat (headings) + Open Sans (body)
- **Theme**: Professional, trustworthy, modern aesthetic
- **Responsive**: Mobile-first design approach

## 📁 Project Structure

\`\`\`
bj-cleaning-website/
├── app/ # Next.js App Router
│ ├── globals.css # Global styles with design tokens
│ ├── layout.tsx # Root layout with fonts
│ └── page.tsx # Home page
├── components/ # React components
│ ├── ui/ # shadcn/ui components
│ ├── about.tsx # About section
│ ├── contact.tsx # Contact form with API integration
│ ├── footer.tsx # Footer component
│ ├── hero.tsx # Hero section
│ ├── navbar.tsx # Navigation bar
│ ├── promo-banner.tsx # Promotional banner
│ ├── services.tsx # Services showcase
│ └── testimonials.tsx # Customer testimonials
├── public/ # Static assets
│ └── \*.png # Professional service images
├── server/ # Express backend
│ ├── routes/
│ │ └── booking.js # Booking API routes
│ ├── .env # Environment variables
│ ├── package.json # Backend dependencies
│ ├── server.js # Express server
│ └── README.md # Backend documentation
└── README.md # This file
\`\`\`

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Gmail account with App Password enabled

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd bj-cleaning-website
   \`\`\`

2. **Install frontend dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Install backend dependencies**
   \`\`\`bash
   cd server
   npm install
   cd ..
   \`\`\`

4. **Configure environment variables**

   Create `server/.env` file:
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

### Running the Application

1. **Start the backend server**
   \`\`\`bash
   cd server
   npm run dev
   \`\`\`
   Server will run on http://localhost:3001

2. **Start the frontend (in a new terminal)**
   \`\`\`bash
   npm run dev
   \`\`\`
   Frontend will run on http://localhost:3000

3. **Visit the website**
   Open http://localhost:3000 in your browser

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in the `EMAIL_PASS` variable

### Email Templates

The system sends two types of emails:

- **Business Notification**: Detailed booking information sent to the business owner
- **Customer Confirmation**: Confirmation email with booking details and contact information

Both emails feature:

- Professional HTML templates with B&J branding
- Company colors (navy blue and orange)
- Booking details table
- Contact information
- 20% discount reminder

## 🛠️ API Endpoints

### Health Check

- **GET** `/api/health`
- Returns server status and timestamp

### Booking Submission

- **POST** `/api/booking/submit`
- Accepts booking form data and sends email notifications
- **Required fields**: `fullName`, `phone`, `email`, `address`, `service`
- **Optional field**: `notes`

### Email Test

- **GET** `/api/booking/test`
- Tests email configuration and connectivity

## 📱 Services Offered

1. **Restaurant Cleaning**

   - Complete kitchen and dining area sanitization
   - Health department standards compliance
   - Professional equipment cleaning

2. **Building Maintenance**

   - Comprehensive office cleaning
   - Commercial building maintenance
   - Regular cleaning schedules

3. **Hospital Cleaning**

   - Medical-grade sanitization
   - Healthcare facility disinfection
   - Specialized medical cleaning protocols

4. **Event Cleaning**
   - Pre and post-event cleaning
   - Venue preparation and cleanup
   - All event sizes supported

## 📞 Contact Information

- **Phone**: 0206 764 690 / 0257 597 957
- **Address**: Opp. Nana Saah School, Kwabenya - Accra
- **Social Media**: TikTok - bj cleaning services
- **Hours**: 24/7 Emergency Services Available
- **Regular Hours**: Mon-Sat 8AM-6PM

## 🚀 Deployment

### Frontend Deployment (Vercel - Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Backend Deployment Options

#### Option 1: Railway

1. Create account at railway.app
2. Connect your GitHub repository
3. Set environment variables in Railway dashboard
4. Deploy automatically

#### Option 2: Heroku

1. Create Heroku app
2. Set environment variables
3. Deploy using Git or GitHub integration

#### Option 3: DigitalOcean App Platform

1. Create app on DigitalOcean
2. Connect repository
3. Configure environment variables
4. Deploy

### Environment Variables for Production

\`\`\`env
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-app-password
TO_EMAIL=business-email@gmail.com
PORT=3001
NODE_ENV=production
CLIENT_URL=https://your-domain.com
\`\`\`

## 🔧 Development

### Adding New Services

1. Update the services array in `components/services.tsx`
2. Add corresponding service type in `server/routes/booking.js`
3. Update the select options in `components/contact.tsx`

### Customizing Email Templates

Edit the email templates in `server/routes/booking.js`:

- `businessEmailContent` - Email sent to business owner
- `customerEmailContent` - Confirmation email sent to customer

### Styling Changes

- Global styles: `app/globals.css`
- Component styles: Individual component files using TailwindCSS
- Design tokens: CSS custom properties in `globals.css`

## 🧪 Testing

### Backend API Testing

\`\`\`bash

# Test email configuration

curl http://localhost:3001/api/booking/test

# Test booking submission

curl -X POST http://localhost:3001/api/booking/submit \
 -H "Content-Type: application/json" \
 -d '{
"fullName": "Test User",
"phone": "0206764690",
"email": "test@example.com",
"address": "Test Address, Accra",
"service": "restaurant",
"notes": "Test booking"
}'
\`\`\`

## 📈 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Optimization**: TailwindCSS purging unused styles
- **Font Optimization**: Google Fonts optimization with Next.js
- **Responsive Images**: Proper image sizing for different devices

## 🔒 Security Features

- **Input Validation**: Server-side validation for all form inputs
- **CORS Configuration**: Restricted to specific origins
- **Environment Variables**: Sensitive data stored securely
- **Error Handling**: No sensitive information exposed in error messages
- **Rate Limiting**: Consider adding rate limiting for production

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending**

   - Check Gmail App Password configuration
   - Verify environment variables
   - Test with `/api/booking/test` endpoint

2. **CORS errors**

   - Ensure `CLIENT_URL` matches your frontend URL
   - Check CORS configuration in `server/server.js`

3. **Form submission fails**
   - Check network connectivity
   - Verify backend server is running
   - Check browser console for errors

### Support

For technical support or questions, contact the development team or refer to the individual component documentation.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern cleaning service websites
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Montserrat, Open Sans)
- **Email Service**: Gmail SMTP with Nodemailer

---

**B&J Professional Cleaning Services** - Your trusted partner for professional cleaning in Accra, Ghana.

_Built using Next.js, Express, and modern web technologies._
