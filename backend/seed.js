const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing users
    await User.deleteMany();

    const users = [
      { name: 'Rahul' },
      { name: 'Kamal' },
      { name: 'Sanak' },
      { name: 'Meena' },
      { name: 'Anjali' },
      { name: 'Vikram' },
      { name: 'Deepa' },
      { name: 'Rohan' },
      { name: 'Priya' },
      { name: 'Amit' },
    ];

    await User.insertMany(users);
    console.log('✅ Users seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding users:', err);
    process.exit(1);
  }
};

seedUsers();
