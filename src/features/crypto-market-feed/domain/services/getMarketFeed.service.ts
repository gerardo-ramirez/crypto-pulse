
import { CoinGeckoMarketResponse } from "../models/api-types";
import mockData from "./crypto-mock.json"

const MARKET_URL = "/api/crypto/market";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getMarketFeed = async (useRealApi: boolean = false): Promise<CoinGeckoMarketResponse[]> => {
  try {
    if (!useRealApi) {
      await delay(1200)
      return mockData as CoinGeckoMarketResponse[]
    }

    const res = await fetch(MARKET_URL)
    if (!res.ok) {
      throw new Error(`Fallo en la API de mercado: ${res.status}`)
    }
    return await res.json() as CoinGeckoMarketResponse[]
  } catch (error) {
    console.error("[Service Error] getMarketFeed:", error)
    throw error
  }
}

