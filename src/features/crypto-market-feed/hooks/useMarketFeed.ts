import { useQuery } from "@tanstack/react-query"
import { getMarketFeed } from "../domain/services/getMarketFeed.service"
import { adaptMarketFeed } from "../adapters/market-feed.adapter"

export const useMarketFeed = () => {
  return useQuery({
    queryKey: ["crypto", "market-feed"],
    queryFn: async () => {
      const data = await getMarketFeed()
      return adaptMarketFeed(data)
    },
    staleTime: Infinity,
   // staleTime: 0,
    // Production: refetchInterval: 20_000 (polling cada 20 s)
    // Demo: deshabilitado para respetar el rate limit de la API gratuita de CoinGecko.
    refetchOnWindowFocus: false,
  })
}