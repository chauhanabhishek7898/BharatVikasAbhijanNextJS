import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Member from '@/lib/models/Member';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    
    // Check if user already exists
    const existingMember = await Member.findOne({
      $or: [
        { email: body.email },
        { phone: body.phone }
      ]
    });

    if (existingMember) {
      return NextResponse.json(
        { success: false, message: 'Email or phone already registered' },
        { status: 400 }
      );
    }

    // Create new member
    const member = new Member(body);
    await member.save();

    return NextResponse.json({
      success: true,
      message: 'Registration successful',
      registrationId: member.registrationId,
      data: {
        id: member._id,
        name: member.name,
        email: member.email,
        registrationId: member.registrationId,
      }
    }, { status: 201 });

  } catch (error: any) {
    console.error('Registration error:', error);
    
    let message = 'Registration failed';
    if (error.code === 11000) {
      message = 'Duplicate field value entered';
    } else if (error.name === 'ValidationError') {
      message = Object.values(error.errors).map((err: any) => err.message).join(', ');
    }

    return NextResponse.json(
      { success: false, message },
      { status: 400 }
    );
  }
}