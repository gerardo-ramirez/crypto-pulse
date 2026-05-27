export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  change24h: number;
  imageUrl: string;
}