import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  const { pathname } = request.nextUrl;

  if (isMaintenanceMode) {
    if (
      pathname.startsWith('/maintenance') ||
      pathname.startsWith('/_next') ||
      pathname.includes('/api/') ||
      pathname.includes('.')
    ) {
      return NextResponse.next();
    }

    return NextResponse.rewrite(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
