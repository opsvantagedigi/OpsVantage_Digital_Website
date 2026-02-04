import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    select: false,
  },
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
  },
  role: {
    type: String,
    enum: ['client', 'admin'],
    default: 'client',
  },
  stripeCustomerId: {
    type: String,
    unique: true,
    sparse: true,
  },
  stripeSubscriptionId: {
    type: String,
    unique: true,
    sparse: true,
  },
  stripePriceId: {
    type: String,
  },
  stripeSubscriptionStatus: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
