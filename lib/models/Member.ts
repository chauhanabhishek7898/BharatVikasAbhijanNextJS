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
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  religion: {
    type: String,
    required: [true, 'Religion is required'],
  },
  caste: {
    type: String,
    required: [true, 'Caste is required'],
  },
  educationalQualification: {
    type: String,
    required: [true, 'Educational qualification is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'unknown'],
    required: [true, 'Blood group is required'],
  },
  wardNo: {
    type: String,
    required: [true, 'Ward number is required'],
  },
  boothNo: {
    type: String,
    required: [true, 'Booth number is required'],
  },
  panchayat: {
    type: String,
    required: [true, 'Panchayat is required'],
  },
  zillaparisadZone: {
    type: String,
    required: [true, 'Zillaparisad zone is required'],
  },
  block: {
    type: String,
    required: [true, 'Block is required'],
  },
  constituency: {
    type: String,
    required: [true, 'Constituency is required'],
  },
  district: {
    type: String,
    required: [true, 'District is required'],
  },
  state: {
    type: String,
    required: [true, 'State is required'],
  },
  mobileNo: {
    type: String,
    required: [true, 'Mobile number is required'],
    unique: true,
  },
  whatsappNo: {
    type: String,
    required: [true, 'WhatsApp number is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  // address: {
  //   type: String,
  //   required: [true, 'Address is required'],
  // },
  // pincode: {
  //   type: String,
  //   required: [true, 'Pincode is required'],
  // },
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

export default mongoose.models.Member || mongoose.model('Member', MemberSchema);

// // lib/models/Member.ts - Fixed version
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const MemberSchema = new mongoose.Schema({
//   userId: {
//     type: Number,
//     unique: true
//     },
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
//     default: 'inactive',
//   },
// });

// // Auto-generate userId and registrationId
// MemberSchema.pre('save', async function(next) {
//   // Only run for new documents
//   if (!this.isNew) {
//     // For updates, set roleId based on role
//     if (this.isModified('role')) {
//       this.roleId = this.role === 'leader' ? 3 : 2;
//     }
//     return next();
//   }

//   try {
//     // Generate sequential userId
//     const lastMember = await mongoose.models.Member.findOne().sort({ userId: -1 });
//     this.userId = lastMember ? lastMember.userId + 1 : 1;
    
//     // Generate registration ID
//     const prefix = 'BBA';
//     const year = new Date().getFullYear().toString().slice(-2);
//     const sequential = this.userId?.toString().padStart(6, '0');
//     this.registrationId = `${prefix}${year}${sequential}`;
    
//     // Set roleId based on role
//     this.roleId = this.role === 'leader' ? 3 : 2;
    
//     // Hash password
//     if (this.isModified('password')) {
//       this.password = await bcrypt.hash(this.password, 10);
//     }
    
//     next();
//   } catch (error: any) {
//     next(error);
//   }
// });
