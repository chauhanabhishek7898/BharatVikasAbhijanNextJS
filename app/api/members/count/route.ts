import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Member from '@/lib/models/Member';

export async function GET() {
  try {
    await dbConnect();
    
    // Count all registered members (both active and inactive)
    const totalMembers = await Member.countDocuments({});
    
    // Count active members
    const activeMembers = await Member.countDocuments({ 
      status: 'active',
      role: 'member'
    });
    
    // Count active leaders
    const activeLeaders = await Member.countDocuments({ 
      status: 'active',
      role: 'leader'
    });
    
    return NextResponse.json({
      success: true,
      counts: {
        totalMembers,      // All registered members (active + inactive)
        activeMembers,     // Only active members
        activeLeaders,     // Only active leaders
        totalActive: activeMembers + activeLeaders // All active users
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error counting members:', error);
    return NextResponse.json(
      { 
        success: false, 
        counts: {
          totalMembers: 0,
          activeMembers: 0,
          activeLeaders: 0,
          totalActive: 0
        },
        message: 'Failed to count members' 
      },
      { status: 500 }
    );
  }
}

// import { NextRequest, NextResponse } from 'next/server';
// import dbConnect from '@/lib/dbConnect';
// import Member from '@/lib/models/Member';

// export async function GET() {
//   try {
//     await dbConnect();
    
//     const count = await Member.countDocuments({ status: 'active' });
    
//     return NextResponse.json({
//       success: true,
//       count,
//       timestamp: new Date().toISOString()
//     });

//   } catch (error) {
//     console.error('Error counting members:', error);
//     return NextResponse.json(
//       { success: false, count: 0, message: 'Failed to count members' },
//       { status: 500 }
//     );
//   }
// }