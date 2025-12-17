# Irohub Backend API Documentation

## Base URL
```
http://localhost:5000
```

## Authentication
Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Response Format
All API responses follow this general structure:
```json
{
  "success": true/false,
  "message": "Response message",
  "data": {} // Response data (when applicable)
}
```

---

## Authentication Endpoints

### Login
**POST** `/auth/login`

Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "name": "User Name",
      "email": "user@example.com",
      "role": "Admin"
    }
  }
}
```

---

## Admin Management

### Register Admin
**POST** `/admin/register-admin`

Register a new admin user.

**Request Body:**
```json
{
  "name": "Admin Name",
  "email": "admin@example.com",
  "password": "password123",
  "mobile": "1234567890"
}
```

### Get Admin Count
**GET** `/admin/get-count`

Get the total count of admin users.

---

## Lead Management

### Add Lead
**POST** `/leads/add`
*Requires Authentication*

Create a new lead.

**Request Body:**
```json
{
  "name": "Lead Name",
  "email": "lead@example.com",
  "mobile": "1234567890",
  "source": "source_id",
  "product": "product_id",
  "priority": "hot",
  "userDetails": [
    {
      "leadFormId": "form_field_id",
      "value": "field_value"
    }
  ]
}
```

### Upload Bulk Leads
**POST** `/leads/upload-bulkleads`
*Requires Authentication*

Upload leads in bulk using CSV file.

**Request:** Multipart form data with CSV file
- Field name: `csvfile`

### Download CSV Template
**GET** `/leads/csv-template`

Download CSV template for bulk lead upload.

### List Leads
**GET** `/leads/list`
*Requires Authentication*

Get paginated list of all leads.

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `search` (optional): Search term
- `status` (optional): Filter by status
- `priority` (optional): Filter by priority

### List Open Leads
**GET** `/leads/list-openleads`
*Requires Authentication*

Get list of open leads only.

### View PDF
**GET** `/leads/view-pdf`
*Requires Authentication*

Generate and view PDF report of leads.

### Assign Lead
**PUT** `/leads/assign/:id`
*Requires Authentication*

Assign lead to an agent.

**Request Body:**
```json
{
  "assignedTo": "agent_user_id"
}
```

### Update Lead Details
**PUT** `/leads/update-details/:id`
*Requires Authentication*

Update basic lead information.

### Update User Lead Form
**PUT** `/leads/update-userleadform/:id`
*Requires Authentication*

Update lead form data with file uploads.

**Request:** Multipart form data

### Update Priority
**PUT** `/leads/update-priority/:id`
*Requires Authentication*

Update lead priority.

**Request Body:**
```json
{
  "priority": "hot" // hot, warm, cold, Not Assigned
}
```

### Update Status
**PUT** `/leads/update-status/:id`
*Requires Authentication*

Update lead status.

**Request Body:**
```json
{
  "status": "converted" // new, open, converted, closed, walkin, paused, rejected, unavailable
}
```

### Set Next Follow-up
**PUT** `/leads/set-nextfollowup/:id`
*Requires Authentication*

Set next follow-up date for lead.

**Request Body:**
```json
{
  "nextFollowUp": "2024-12-31T10:00:00Z"
}
```

### Delete Multiple Leads
**DELETE** `/leads/delete-multipleleads`
*Requires Authentication*

Delete multiple leads.

**Request Body:**
```json
{
  "leadIds": ["lead_id_1", "lead_id_2"]
}
```

---

## Customer Management

### Add Customer
**POST** `/customers/add`
*Requires Authentication*

Create a new customer.

**Request Body:**
```json
{
  "name": "Customer Name",
  "mobile": "1234567890",
  "alternativemobile": "0987654321",
  "email": "customer@example.com",
  "payment": "pending",
  "status": "status_id",
  "product": "product_id",
  "userDetails": [
    {
      "leadFormId": "form_field_id",
      "value": "field_value"
    }
  ]
}
```

### List Customers
**GET** `/customers/list`
*Requires Authentication*

Get paginated list of customers.

### Get Customer
**GET** `/customers/get-customer/:id`
*Requires Authentication*

Get specific customer details.

### Edit Customer
**PUT** `/customers/edit/:id`
*Requires Authentication*

Update customer information.

### Update Active Status
**PUT** `/customers/update-active/:id`
*Requires Authentication*

Update customer active status.

**Request Body:**
```json
{
  "isActive": true
}
```

### Update Payment Status
**PUT** `/customers/update-paymentstatus/:id`
*Requires Authentication*

Update customer payment status.

**Request Body:**
```json
{
  "payment": "paid" // pending, partially paid, paid, unpaid
}
```

### Update Status
**PUT** `/customers/update-status/:id`
*Requires Authentication*

Update customer status.

### Delete Customer
**DELETE** `/customers/delete/:id`
*Requires Authentication*

Delete a specific customer.

### Delete Multiple Customers
**DELETE** `/customers/delete-multiplecustomers`
*Requires Authentication*

Delete multiple customers.

**Request Body:**
```json
{
  "customerIds": ["customer_id_1", "customer_id_2"]
}
```

---

## Staff Management

### Register Staff
**POST** `/staffs/register`
*Requires Authentication*

Register a new staff member.

**Request Body:**
```json
{
  "name": "Staff Name",
  "email": "staff@example.com",
  "password": "password123",
  "mobile": "1234567890",
  "role": "Agent" // Admin, Sub-Admin, Agent, user
}
```

### Upload Profile Image
**POST** `/staffs/upload-profileimage`
*Requires Authentication*

Upload profile image for staff.

**Request:** Multipart form data
- Field name: `profileimage`

### Get Staffs
**GET** `/staffs/get-staffs`
*Requires Authentication*

Get list of all staff members.

### Get Agents
**GET** `/staffs/get-agents`
*Requires Authentication*

Get list of agents only.

### Edit Staff
**PUT** `/staffs/edit-staffs/:id`
*Requires Authentication*

Update staff information.

### Change Password
**PUT** `/staffs/change-password/:id`
*Requires Authentication*

Change staff password.

**Request Body:**
```json
{
  "currentPassword": "current_password",
  "newPassword": "new_password"
}
```

### Delete Staff
**DELETE** `/staffs/delete-staffs/:id`
*Requires Authentication*

Delete a staff member.

---

## Task Management

### Add Task
**POST** `/tasks/add`
*Requires Authentication*

Create a new task.

**Request Body:**
```json
{
  "title": "Task Title",
  "description": "Task Description",
  "assignedTo": "user_id",
  "dueDate": "2024-12-31T10:00:00Z",
  "priority": "high"
}
```

### List Tasks
**GET** `/tasks/list`
*Requires Authentication*

Get list of tasks.

### Edit Task
**PUT** `/tasks/edit/:id`
*Requires Authentication*

Update task information.

### Update Task Status
**PUT** `/tasks/update-status/:id`
*Requires Authentication*

Update task status.

**Request Body:**
```json
{
  "status": "completed"
}
```

---

## Team Management

### Assign Team
**PUT** `/teams/assign-team/:id`
*Requires Authentication*

Assign user to a team.

**Request Body:**
```json
{
  "teamId": "team_id"
}
```

### Unassign Team
**PUT** `/teams/unassign-team/:id`
*Requires Authentication*

Remove user from team.

---

## Payment Management

### Add Payment
**POST** `/payment/addPayment`

Add a new payment record.

**Request Body:**
```json
{
  "customerId": "customer_id",
  "amount": 1000,
  "paymentMethod": "cash",
  "description": "Payment description"
}
```

### Get Payment Details
**GET** `/payment/get-details/:id`

Get specific payment details.

### Get All Payments
**GET** `/payment/get-detailsed`

Get all payment records.

### Get Product Payment Details
**GET** `/payment/get-ProductDetails`

Get product-specific payment details.

### Get Products
**GET** `/payment/get-product`

Get list of products.

### Get Transactions
**GET** `/payment/get-transactions/:id`

Get transactions for specific customer.

### Get GST Details
**GET** `/payment/get-gst`

Get GST configuration.

### Get All Payment Data
**GET** `/payment/get-all`

Get comprehensive payment data.

### Update Transaction
**PUT** `/payment/update-transaction/:id`

Update transaction details.

### Delete Payment
**DELETE** `/payment/deletePayment/:id`

Delete a payment record.

---

## Notification Management

### Get Notifications
**GET** `/notification/get-notifications`
*Requires Authentication*

Get user notifications.

### Count Unread Notifications
**GET** `/notification/unread-notifications`
*Requires Authentication*

Get count of unread notifications.

### Mark All Read
**PUT** `/notification/markallread`
*Requires Authentication*

Mark all notifications as read.

### Delete All Notifications
**DELETE** `/notification/delete-all`
*Requires Authentication*

Delete all notifications.

### Delete Notification
**DELETE** `/notification/delete/:id`
*Requires Authentication*

Delete specific notification.

---

## Settings Management

### Customer Status Settings

#### Add Customer Status
**POST** `/customer-statussettings/add`
*Requires Authentication*

#### List Customer Statuses
**GET** `/customer-statussettings/list`
*Requires Authentication*

#### Edit Customer Status
**PUT** `/customer-statussettings/edit/:id`
*Requires Authentication*

#### Delete Customer Status
**DELETE** `/customer-statussettings/delete/:id`
*Requires Authentication*

#### Update Status Active
**PUT** `/customer-statussettings/update-status/:id`
*Requires Authentication*

### Lead Source Settings

#### Add Lead Source
**POST** `/lead-sourcesettings/add`
*Requires Authentication*

#### List Lead Sources
**GET** `/lead-sourcesettings/list`
*Requires Authentication*

#### Edit Lead Source
**PUT** `/lead-sourcesettings/edit/:id`
*Requires Authentication*

#### Delete Lead Source
**DELETE** `/lead-sourcesettings/delete/:id`
*Requires Authentication*

#### Update Source Active
**PUT** `/lead-sourcesettings/update-status/:id`
*Requires Authentication*

### Product Settings

#### Add Product
**POST** `/product-setting/add`
*Requires Authentication*

**Request Body:**
```json
{
  "title": "Product Name",
  "description": "Product Description",
  "price": 999.99
}
```

#### List Products
**GET** `/product-setting/list`
*Requires Authentication*

#### Update Product Title
**PUT** `/product-setting/update-title/:id`
*Requires Authentication*

#### Update Product Active
**PUT** `/product-setting/update-active/:id`
*Requires Authentication*

#### Delete Product
**DELETE** `/product-setting/delete/:id`
*Requires Authentication*

---

## Error Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 500 | Internal Server Error |

---

## Data Models

### User/Lead Model
```json
{
  "name": "string",
  "email": "string",
  "mobile": "string",
  "role": "Admin|Sub-Admin|Agent|user",
  "status": "new|open|converted|closed|walkin|paused|rejected|unavailable",
  "priority": "hot|warm|cold|Not Assigned",
  "source": "ObjectId",
  "product": "ObjectId",
  "nextFollowUp": "Date",
  "userDetails": [
    {
      "leadFormId": "ObjectId",
      "value": "Mixed"
    }
  ]
}
```

### Customer Model
```json
{
  "name": "string",
  "mobile": "string",
  "alternativemobile": "string",
  "email": "string",
  "payment": "pending|partially paid|paid|unpaid",
  "status": "ObjectId",
  "isActive": "boolean",
  "product": "ObjectId",
  "userDetails": [
    {
      "leadFormId": "ObjectId",
      "value": "Mixed"
    }
  ]
}
```

### Lead Form Field Model
```json
{
  "name": "string",
  "type": "text|number|email|textarea|file|image|date|choice|checkbox",
  "options": ["string"],
  "active": "boolean"
}
```

---

## Rate Limiting
API requests may be rate-limited. Check response headers for rate limit information.

## Support
For API support, contact the development team.
