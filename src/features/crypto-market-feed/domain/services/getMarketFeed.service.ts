
import { CoinGeckoMarketResponse } from "../models/api-types";

const URL = "/api/crypto/market";

export const getMarketFeed =async():Promise<CoinGeckoMarketResponse[]>=>{
    try{
   const res= await fetch(URL);

   if(!res.ok){
    throw new Error(`Fallo en la API de mercado: ${res.status}`);
   }
   const data: CoinGeckoMarketResponse[]= await res.json()

   return data 
    }catch (error) {

console.error("[Service Error] getMarketFeed:", error);
    throw error;
    }
   
}

