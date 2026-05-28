import { useQuery } from "@tanstack/react-query"
import { useCallback, useState } from "react"
import { adaptMarketFeed } from "../adapters/market-feed.adapter"
import { getMarketFeed } from "../domain/services/getMarketFeed.service"

export const useMarketFeed = () => {
  const [useRealApi, setUseRealApi] = useState(false)

  const query = useQuery({
    queryKey: ["crypto", "market-feed", useRealApi],
    queryFn: async () => {
      const data = await getMarketFeed(useRealApi)
      return adaptMarketFeed(data)
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })

  const enableRealApi = useCallback(() => {
    setUseRealApi(true)
  }, [])

  return {
    ...query,
    useRealApi,
    enableRealApi,
  }
}
