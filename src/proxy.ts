
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  const { pathname } = request.nextUrl;

  if (isMaintenanceMode) {
    // 🛡️ LA LISTA BLANCA (Lo que SÍ dejamos pasar)
    if (
      pathname === '/' ||                 // 👈 1. PERMITIMOS LA HOME (donde está tu MarketGrid)
      pathname.startsWith('/maintenance') || // 2. La página de mantenimiento en sí
      pathname.startsWith('/_next') ||       // 3. Archivos internos de Next
      pathname.startsWith('/api/') ||        // 4. Tus BFFs (rutas de la API)
      pathname.includes('.')                 // 5. Archivos estáticos (favicon.ico, imagenes)
    ) {
      return NextResponse.next(); // "Pase tranquilo, VIP"
    }

    
    return NextResponse.rewrite(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};