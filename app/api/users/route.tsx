import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
	return NextResponse.json([
		{ id: 1, name: 'Kiet' },
		{ id: 2, name: 'Dan' },
	]);
}
