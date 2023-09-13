import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

import schema from './schema';

export function GET(request: NextRequest, response: NextResponse ) {
	return NextResponse.json(
		[
		{ id: 1, name: 'Kiet' },
		{ id: 2, name: 'Dan' },
	]);
}

export async function POST(request: NextRequest) {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, {status: 400});

	return NextResponse.json({id: 1, name: body.name}, {status: 201});
}
