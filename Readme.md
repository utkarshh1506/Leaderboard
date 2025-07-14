# Rewards API (NestJS + MongoDB)

This project is a backend API for a Rewards Dashboard built using NestJS and MongoDB. It manages user rewards, transactions, and redemption functionalities.

## 🚀 Features
- User reward tracking
- Redeem rewards (Cashback, Amazon Voucher, Gift Box)
- Reward transaction history (paginated)
- Mock data seeding
- Swagger API documentation
- Modular NestJS structure

## 🛠 Tech Stack
- NestJS
- MongoDB (Mongoose)
- Swagger
- class-validator
- Jest (for unit testing)

## 📦 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/rewards-api.git
cd rewards-api
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/rewards
PORT=3000
```

4. Run the application:
```bash
npm run start:dev
```

App runs on: `http://localhost:3000`

## 📚 API Documentation
Swagger UI available at:  
`http://localhost:3000/api`

## 📘 API Endpoints

### GET `/rewards/points/:userId`
Returns total reward points of a user.

### GET `/rewards/transactions?userId=xyz&page=1&limit=5`
Returns paginated list of reward transactions.

### GET `/rewards/options`
Returns all available reward options:
```json
[
  { "type": "Cashback", "requiredPoints": 100 },
  { "type": "Amazon Voucher", "requiredPoints": 200 },
  { "type": "Gift Box", "requiredPoints": 300 }
]
```

### POST `/rewards/redeem`
Redeem reward points.
**Payload:**
```json
{
  "userId": "xyz",
  "rewardType": "Amazon Voucher",
  "pointsRedeemed": 200
}
```

**Response:**
```json
{
  "message": "Redemption successful",
  "remainingPoints": 250
}
```

### GET `/rewards/seed/:userId`
Seeds mock reward + transaction + redemption data for a user.
```json
{ "message": "Mock data seeded successfully" }
```

## 🧾 MongoDB Collections

### Users
```ts
{
  _id: ObjectId,
  name: string,
  email: string
}
```

### Rewards
```ts
{
  _id: ObjectId,
  userId: ObjectId,
  totalPoints: number,
  updatedAt: Date
}
```

### Transactions
```ts
{
  _id: ObjectId,
  userId: ObjectId,
  amount: number,
  category: string,
  pointsEarned: number,
  timestamp: Date
}
```

### Redemptions
```ts
{
  _id: ObjectId,
  userId: ObjectId,
  rewardType: string,
  pointsRedeemed: number,
  timestamp: Date
}
```

## 📁 Project Structure

```
src/
├── users/
├── rewards/
├── redemptions/
├── transactions/
└── main.ts
```

## ✅ Final Checklist

- [x] All required APIs working
- [x] Swagger Docs added
- [x] Seed endpoint enabled
- [x] DTOs + Validation
- [x] Error handling complete

## 🔗 Submission

- Include `.env.example` with MONGODB_URI format
- Upload complete GitHub repo
- Attach this `README.md`

## 📩 Contact

**Email:** utkarshsingh.job@gmail.com

