# Rewards API (NestJS + MongoDB)

This project is a backend API for a Rewards Dashboard built using **NestJS** and **MongoDB**. It manages user rewards, transactions, and redemption functionalities.

---

## 🚀 Features

- Static/mock user management (no authentication)
- Rewards tracking per user
- Redeem reward points (Cashback / Vouchers)
- Reward transaction history (paginated)
- Reward options listing
- Mock seeding for demo/testing
- Swagger API docs
- Jest unit testing

---

## 🛠 Tech Stack

| Tech            | Purpose              |
| --------------- | -------------------- |
| NestJS          | Backend Framework    |
| MongoDB         | Database             |
| Mongoose        | ODM for MongoDB      |
| Swagger         | API Documentation    |
| class-validator | DTO validation       |
| Jest            | Unit Testing         |

---

## 📦 Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/rewards-api.git
cd rewards-api
2. Install dependencies
bash
Copy
Edit
npm install
3. Create .env file
env
Copy
Edit
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/rewards
PORT=3000
4. Run the app
bash
Copy
Edit
npm run start:dev
App runs at: http://localhost:3000

📚 API Documentation
Swagger available at:

bash
Copy
Edit
http://localhost:3000/api
📘 API Endpoints
➤ GET /rewards/points/:userId
json
Copy
Edit
{
  "userId": "64efb1e58f9b7e6fa9c8a123",
  "totalPoints": 450
}
➤ GET /rewards/transactions?userId=xyz&page=1&limit=5
json
Copy
Edit
[
  {
    "_id": "abc123",
    "userId": "xyz",
    "amount": 1200,
    "category": "Groceries",
    "pointsEarned": 120,
    "timestamp": "2025-07-12T..."
  }
]
➤ GET /rewards/options
json
Copy
Edit
[
  { "type": "Cashback", "requiredPoints": 100 },
  { "type": "Amazon Voucher", "requiredPoints": 200 },
  { "type": "Gift Box", "requiredPoints": 300 }
]
➤ POST /rewards/redeem
json
Copy
Edit
{
  "userId": "xyz",
  "rewardType": "Amazon Voucher",
  "pointsRedeemed": 200
}
Response:

json
Copy
Edit
{
  "message": "Redemption successful",
  "remainingPoints": 250
}
➤ GET /rewards/seed/:userId
json
Copy
Edit
{ "message": "Mock data seeded successfully" }
🧪 Testing
bash
Copy
Edit
npm run test
🧾 MongoDB Collections
Users
ts
Copy
Edit
{
  _id: ObjectId,
  name: string,
  email: string
}
Rewards
ts
Copy
Edit
{
  _id: ObjectId,
  userId: ObjectId,
  totalPoints: number,
  updatedAt: Date
}
Transactions
ts
Copy
Edit
{
  _id: ObjectId,
  userId: ObjectId,
  amount: number,
  category: string,
  pointsEarned: number,
  timestamp: Date
}
Redemptions
ts
Copy
Edit
{
  _id: ObjectId,
  userId: ObjectId,
  rewardType: string,
  pointsRedeemed: number,
  timestamp: Date
}
📁 Project Structure
css
Copy
Edit
src/
├── users/
├── rewards/
├── redemptions/
├── transactions/
└── main.ts
✅ Final Checklist
 All APIs implemented

 Swagger documentation available

 DTOs with validation added

 Mock seeding working

 Error handling complete

 Code modular and clean

🔗 Submission
Submit GitHub repo link

Add .env.example file with MongoDB URI format

Include this README.md in the root of your project

📧 Contact
Email: nitish.kumar@finchpay.co
Backup: team@finchpay.co