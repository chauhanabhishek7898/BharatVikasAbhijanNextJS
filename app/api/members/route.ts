import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Member from '@/lib/models/Member';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const skip = (page - 1) * limit;
    
    // Get filter parameters
    const state = searchParams.get('state');
    const role = searchParams.get('role');
    const status = searchParams.get('status');
    
    // Build query
    const query: any = {};
    
    if (state && state !== 'all') {
      query.state = state;
    }
    
    if (role && role !== 'all') {
      query.role = role;
    }
    
    if (status && status !== 'all') {
      query.status = status;
    }

    const members = await Member.find(query)
      .select('-password')
      .sort({ registrationDate: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Member.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: members,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching members:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch members' },
      { status: 500 }
    );
  }
}

// import { NextRequest, NextResponse } from 'next/server';
// import dbConnect from '@/lib/dbConnect';
// import Member from '@/lib/models/Member';

// export async function GET(request: NextRequest) {
//   try {
//     await dbConnect();

//     const { searchParams } = new URL(request.url);
//     const page = parseInt(searchParams.get('page') || '1');
//     const limit = parseInt(searchParams.get('limit') || '10');
//     const skip = (page - 1) * limit;

//     const members = await Member.find({})
//       .select('-password')
//       .sort({ registrationDate: -1 })
//       .skip(skip)
//       .limit(limit);

//     const total = await Member.countDocuments();

//     return NextResponse.json({
//       success: true,
//       data: members,
//       pagination: {
//         page,
//         limit,
//         total,
//         pages: Math.ceil(total / limit)
//       }
//     });

//   } catch (error) {
//     console.error('Error fetching members:', error);
//     return NextResponse.json(
//       { success: false, message: 'Failed to fetch members' },
//       { status: 500 }
//     );
//   }
// }