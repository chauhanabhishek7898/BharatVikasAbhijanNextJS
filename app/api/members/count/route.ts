import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Member from '@/lib/models/Member';

export async function GET() {
  try {
    await dbConnect();
    
    const count = await Member.countDocuments({ status: 'active' });
    
    return NextResponse.json({
      success: true,
      count,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error counting members:', error);
    return NextResponse.json(
      { success: false, count: 0, message: 'Failed to count members' },
      { status: 500 }
    );
  }
}