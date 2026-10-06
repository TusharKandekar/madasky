// import { revalidateTag } from 'next/cache';

// export async function POST(req, res) {
//   try {
//     const { tag } = await req.json();
//     if (!tag) {
//       return res.status(400).json({ error: 'Tag is required' });
//     }
//     revalidateTag(tag); // This invalidates cached data tagged with 'dataTag'
//     return res.status(200).json({ message: `Cache for tag '${tag}' revalidated` });
//   } catch (error) {
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }


// ***************************************************


// app/api/revalidate/route.ts

// import { NextRequest, NextResponse } from 'next/server';
// import { revalidateTag } from 'next/cache';

// export async function POST(request: NextRequest) {
//   try {
//     const { tag } = await request.json();

//     if (!tag) {
//       return NextResponse.json({ error: 'Tag is required' }, { status: 400 });
//     }

//     // Invalidate the cache for the specified tag.
//     revalidateTag(tag);

//     return NextResponse.json({ message: `Cache for tag '${tag}' revalidated` }, { status: 200 });
//   } catch (error) {
//     console.error('Error in revalidation endpoint:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }

// *********************


'use server';
import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  try {
    // Get the URL object from the request
    const { searchParams } = new URL(request.url);
    // Extract the 'tag' parameter from the query string
    const tag = searchParams.get('tag');

    if (!tag) {
      return NextResponse.json({ error: 'Tag is required' }, { status: 400 });
    }

    // Invalidate the cache associated with the provided tag
    revalidateTag(tag);

    return NextResponse.json({ message: `Cache for tag '${tag}' revalidated` }, { status: 200 });
  } catch (error) {
    console.error('Error in revalidation endpoint:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

