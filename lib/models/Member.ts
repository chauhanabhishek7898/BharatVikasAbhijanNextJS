import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    unique: true,
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  state: {
    type: String,
    required: [true, 'State is required'],
  },
  pincode: {
    type: String,
    required: [true, 'Pincode is required'],
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'],
  },
  referralId: {
    type: String,
    required: [true, 'Senior leader referral ID is required'],
  },
  referralName: {
    type: String,
    required: [true, 'Senior leader name is required'],
  },
  registrationId: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'active',
  },
});

// Generate unique registration ID before saving
MemberSchema.pre('save', async function(next) {
  // @ts-ignore
  if (!this.isNew) return next();
  
  const prefix = 'BBA';
  const year = new Date().getFullYear().toString().slice(-2);
  
  try {
    // Find count of members for sequential number
    // @ts-ignore
    const count = await this.constructor.countDocuments();
    const sequential = (count + 1).toString().padStart(6, '0');
    
    // @ts-ignore
    this.registrationId = `${prefix}${year}${sequential}`;
    
    // Hash password
    // @ts-ignore
    if (this.isModified('password')) {
      // @ts-ignore
      this.password = await bcrypt.hash(this.password, 10);
    }
    
    next();
  } catch (error: any) {
    next(error);
  }
});

// Method to compare password
MemberSchema.methods.comparePassword = async function(candidatePassword: string) {
  // @ts-ignore
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.Member || mongoose.model('Member', MemberSchema);