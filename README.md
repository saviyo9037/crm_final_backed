#CRM Backend

A comprehensive Node.js backend application for customer relationship management (CRM) and business operations management.

## Features

- **User Management**: Authentication, authorization, and role-based access control
- **Lead Management**: Lead tracking, form fields configuration, and source management
- **Customer Management**: Customer data handling and status tracking
- **Staff & Team Management**: Staff administration and team organization
- **Task Management**: Task assignment and tracking system
- **Payment Processing**: Payment handling and status management
- **Notification System**: Real-time notifications and follow-up reminders
- **Settings Management**: Configurable business settings and preferences
- **File Upload**: Cloudinary integration for file storage
- **Automated Tasks**: Cron jobs for scheduled operations

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **File Storage**: Cloudinary
- **Email**: Nodemailer
- **Scheduled Tasks**: node-cron
- **Development**: Nodemon for hot reloading

## Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- Cloudinary account (for file uploads)
- SMTP server configuration (for emails)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Irohub_Backend-main
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_HOST=your_smtp_host
EMAIL_PORT=your_smtp_port
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
```

## Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on the specified PORT (default: 5000).

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout

### Admin Management
- `POST /admin/register` - Register new admin

### Lead Management
- `GET /leads` - Get all leads
- `POST /leads` - Create new lead
- `PUT /leads/:id` - Update lead
- `DELETE /leads/:id` - Delete lead

### Customer Management
- `GET /customers` - Get all customers
- `POST /customers` - Create new customer
- `PUT /customers/:id` - Update customer
- `DELETE /customers/:id` - Delete customer

### Staff Management
- `GET /staffs` - Get all staff members
- `POST /staffs` - Create new staff member
- `PUT /staffs/:id` - Update staff member
- `DELETE /staffs/:id` - Delete staff member

### Team Management
- `GET /teams` - Get all teams
- `POST /teams` - Create new team
- `PUT /teams/:id` - Update team
- `DELETE /teams/:id` - Delete team

### Task Management
- `GET /tasks` - Get all tasks
- `POST /tasks` - Create new task
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

### Payment Management
- `GET /payment` - Get payment records
- `POST /payment` - Process payment
- `GET /paymentstatus` - Get payment status

### Notification System
- `GET /notification` - Get notifications
- `POST /notification` - Create notification

### Settings Management
- `GET /customer-statussettings` - Customer status settings
- `GET /lead-formfieldssettings` - Lead form fields settings
- `GET /lead-sourcesettings` - Lead source settings
- `GET /document-settings` - Document settings
- `GET /product-setting` - Product settings
- `GET /gst` - GST settings

### Other Features
- `POST /impersonate` - User impersonation
- `GET /nextfollowup` - Next follow-up management
- `POST /password` - Password management
- `GET /permission` - Permission management

## Project Structure

```
Irohub_Backend-main/
├── controllers/          # Request handlers and business logic
├── cron/                # Scheduled tasks and cron jobs
├── database/            # Database connection and configuration
├── middleware/          # Custom middleware functions
├── models/              # MongoDB/Mongoose data models
├── routes/              # API route definitions
├── scripts/             # Utility scripts
├── uploads/             # File upload directory
├── index.js             # Application entry point
├── package.json         # Project dependencies and scripts
└── .gitignore          # Git ignore rules
```

## Key Dependencies

- **express**: Web application framework
- **mongoose**: MongoDB object modeling
- **jsonwebtoken**: JWT implementation
- **bcryptjs**: Password hashing
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **cloudinary**: Cloud-based image and video management
- **multer**: File upload handling
- **nodemailer**: Email sending capability
- **node-cron**: Task scheduling
- **csv-parser**: CSV file parsing

## Development

The application uses nodemon for development, which automatically restarts the server when file changes are detected.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC License

## Support

For support and questions, please contact the development team.
