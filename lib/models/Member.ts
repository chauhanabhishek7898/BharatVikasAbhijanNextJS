// lib/models/Member.ts - Fixed version
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MemberSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true
    },
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
  role: {
    type: String,
    enum: ['member', 'leader'],
    default: 'member',
  },
  roleId: {
    type: Number,
    default: 2, // 2 for member, 3 for leader
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
    default: 'inactive',
  },
});

// Auto-generate userId and registrationId
MemberSchema.pre('save', async function(next) {
  // Only run for new documents
  if (!this.isNew) {
    // For updates, set roleId based on role
    if (this.isModified('role')) {
      this.roleId = this.role === 'leader' ? 3 : 2;
    }
    return next();
  }

  try {
    // Generate sequential userId
    const lastMember = await mongoose.models.Member.findOne().sort({ userId: -1 });
    this.userId = lastMember ? lastMember.userId + 1 : 1;
    
    // Generate registration ID
    const prefix = 'BBA';
    const year = new Date().getFullYear().toString().slice(-2);
    const sequential = this.userId?.toString().padStart(6, '0');
    this.registrationId = `${prefix}${year}${sequential}`;
    
    // Set roleId based on role
    this.roleId = this.role === 'leader' ? 3 : 2;
    
    // Hash password
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    
    next();
  } catch (error: any) {
    next(error);
  }
});

// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const MemberSchema = new mongoose.Schema({
//   userId: {
//     type: Number,
//     unique: true,
//   },
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     lowercase: true,
//     trim: true,
//   },
//   phone: {
//     type: String,
//     required: [true, 'Phone number is required'],
//     unique: true,
//   },
//   address: {
//     type: String,
//     required: [true, 'Address is required'],
//   },
//   city: {
//     type: String,
//     required: [true, 'City is required'],
//   },
//   state: {
//     type: String,
//     required: [true, 'State is required'],
//   },
//   pincode: {
//     type: String,
//     required: [true, 'Pincode is required'],
//   },
//   dateOfBirth: {
//     type: Date,
//     required: [true, 'Date of birth is required'],
//   },
//   referralId: {
//     type: String,
//     required: [true, 'Senior leader referral ID is required'],
//   },
//   referralName: {
//     type: String,
//     required: [true, 'Senior leader name is required'],
//   },
//   registrationId: {
//     type: String,
//     unique: true,
//   },
//   role: {
//     type: String,
//     enum: ['member', 'leader'],
//     default: 'member',
//   },
//   roleId: {
//     type: Number,
//     default: 2, // 2 for member, 3 for leader
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: 6,
//   },
//   registrationDate: {
//     type: Date,
//     default: Date.now,
//   },
//   status: {
//     type: String,
//     enum: ['active', 'inactive', 'pending'],
//     default: 'inactive', // Changed to inactive by default
//   },
// });

// // Generate unique userId and registration ID before saving
// MemberSchema.pre('save', async function(next) {
//   // @ts-ignore
//   if (!this.isNew) return next();
  
//   try {
//     // Generate sequential userId starting from 1
//     const lastMember = await mongoose.models.Member.findOne().sort({ userId: -1 });
//     // @ts-ignore
//     this.userId = lastMember ? lastMember.userId + 1 : 1;
    
//     // Generate registration ID
//     const prefix = 'BBA';
//     const year = new Date().getFullYear().toString().slice(-2);
//     // @ts-ignore
//     const sequential = this.userId.toString().padStart(6, '0');
//     // @ts-ignore
//     this.registrationId = `${prefix}${year}${sequential}`;
    
//     // Set roleId based on role
//     // @ts-ignore
//     if (this.role === 'leader') {
//       // @ts-ignore
//       this.roleId = 3;
//     } else {
//       // @ts-ignore
//       this.roleId = 2;
//     }
    
//     // Hash password
//     // @ts-ignore
//     if (this.isModified('password')) {
//       // @ts-ignore
//       this.password = await bcrypt.hash(this.password, 10);
//     }
    
//     next();
//   } catch (error: any) {
//     next(error);
//   }
// });

// Method to compare password
MemberSchema.methods.comparePassword = async function(candidatePassword: string) {
  // @ts-ignore
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.Member || mongoose.model('Member', MemberSchema);

// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const MemberSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     lowercase: true,
//     trim: true,
//   },
//   phone: {
//     type: String,
//     required: [true, 'Phone number is required'],
//     unique: true,
//   },
//   address: {
//     type: String,
//     required: [true, 'Address is required'],
//   },
//   city: {
//     type: String,
//     required: [true, 'City is required'],
//   },
//   state: {
//     type: String,
//     required: [true, 'State is required'],
//   },
//   pincode: {
//     type: String,
//     required: [true, 'Pincode is required'],
//   },
//   dateOfBirth: {
//     type: Date,
//     required: [true, 'Date of birth is required'],
//   },
//   referralId: {
//     type: String,
//     required: [true, 'Senior leader referral ID is required'],
//   },
//   referralName: {
//     type: String,
//     required: [true, 'Senior leader name is required'],
//   },
//   registrationId: {
//     type: String,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: 6,
//   },
//   registrationDate: {
//     type: Date,
//     default: Date.now,
//   },
//   status: {
//     type: String,
//     enum: ['active', 'inactive', 'pending'],
//     default: 'active',
//   },
// });

// // Generate unique registration ID before saving
// MemberSchema.pre('save', async function(next) {
//   // @ts-ignore
//   if (!this.isNew) return next();
  
//   const prefix = 'BBA';
//   const year = new Date().getFullYear().toString().slice(-2);
  
//   try {
//     // Find count of members for sequential number
//     // @ts-ignore
//     const count = await this.constructor.countDocuments();
//     const sequential = (count + 1).toString().padStart(6, '0');
    
//     // @ts-ignore
//     this.registrationId = `${prefix}${year}${sequential}`;
    
//     // Hash password
//     // @ts-ignore
//     if (this.isModified('password')) {
//       // @ts-ignore
//       this.password = await bcrypt.hash(this.password, 10);
//     }
    
//     next();
//   } catch (error: any) {
//     next(error);
//   }
// });

// // Method to compare password
// MemberSchema.methods.comparePassword = async function(candidatePassword: string) {
//   // @ts-ignore
//   return await bcrypt.compare(candidatePassword, this.password);
// };

// export default mongoose.models.Member || mongoose.model('Member', MemberSchema);