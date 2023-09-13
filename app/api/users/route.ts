import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest, response: NextResponse ) {
	return NextResponse.json(
		[
		{ id: 1, name: 'Kiet' },
		{ id: 2, name: 'Dan' },
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	if (!body.name) return NextResponse.json({error: 'Name is required'}, {status: 400});

	return NextResponse.json({id: 1, name: body.name}, {status: 201});
}
