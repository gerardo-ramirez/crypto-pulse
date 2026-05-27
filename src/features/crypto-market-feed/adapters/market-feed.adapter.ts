import { CoinGeckoMarketResponse } from "../domain/models/api-types";
import { CryptoAsset } from "../domain/models/domain-types";


export const adaptMarketFeed =(marketResponse:CoinGeckoMarketResponse[]):CryptoAsset[]=> (

   marketResponse.map((mkt):CryptoAsset =>({
  id: mkt.id,
  symbol: mkt.symbol,
  name: mkt.name,
  currentPrice: mkt.current_price,
  change24h: mkt.price_change_percentage_24h,
  imageUrl: mkt.image
        
    }))
  
)