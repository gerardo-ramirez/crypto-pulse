"use client"

import { useMarketFeed } from "../hooks/useMarketFeed"
import { CryptoCard } from "./CryptoCard"
import { Skeleton } from "@/shared/UI/skeleton"
import { Card, CardContent, CardHeader } from "@/shared/UI/card"

function SkeletonCard() {
  return (
    <Card
      aria-hidden="true"
      className="rounded-2xl border border-slate-200/60 bg-white shadow-xs ring-0"
    >
      <CardHeader className="flex-row items-center gap-3">
        <Skeleton className="size-8 shrink-0 rounded-full bg-slate-100" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-24 bg-slate-100" />
          <Skeleton className="h-3 w-12 bg-slate-100" />
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <Skeleton className="h-5 w-28 bg-slate-100" />
        <Skeleton className="h-5 w-16 rounded-full bg-slate-100" />
      </CardContent>
    </Card>
  )
}

export function MarketGrid() {
  const { data, isLoading, isError } = useMarketFeed()

  if (isError) {
    return (
      <p role="alert" className="py-8 text-center text-sm text-slate-500">
        No se pudo cargar el mercado. Intenta de nuevo.
      </p>
    )
  }

  return (
    <ul
      role="list"
      aria-label="Activos del mercado"
      aria-busy={isLoading}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {isLoading
        ? Array.from({ length: 8 }, (_, i) => (
            <li key={i}>
              <SkeletonCard />
            </li>
          ))
        : data?.map((asset) => (
            <li key={asset.id}>
              <CryptoCard asset={asset} />
            </li>
          ))}
    </ul>
  )
}
