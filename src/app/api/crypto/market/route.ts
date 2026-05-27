import {NextResponse} from 'next/server';


export async function GET(){
    const baseUrl = process.env.COINGECKO_BASE_URL;
const url = `${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1`;
    try {
// 2. Leemos la llave segura del entorno
    const apiKey = process.env.COINGECKO_API_KEY || '';
    const response = await fetch(url,{
      headers: {
        'accept': 'application/json',
        'x-cg-demo-api-key': apiKey
      }
    });

    // 4. Atajamos errores de red o límite de cuota (Rate Limit)
    if (!response.ok) {
      return NextResponse.json(
        { error: `CoinGecko falló con status: ${response.status}` }, 
        { status: response.status }
      );
    }
        // 5. Desempaquetamos la data cruda
    const data = await response.json();
    return NextResponse.json(data);

    } catch (error) {
        console.error('[API Route Error]:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
        
    }
}