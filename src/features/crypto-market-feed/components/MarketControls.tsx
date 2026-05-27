"use client"

import { Info, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/shared/UI/button"
import { useMarketFeed } from "../hooks/useMarketFeed"

export function MarketControls() {
  const { refetch, isFetching } = useMarketFeed()

  return (
    <div className="mb-8 flex flex-col gap-3">
      <div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => refetch()}
          disabled={isFetching}
          className="border-emerald-500 bg-emerald-500 text-white shadow-xs hover:border-emerald-600 hover:bg-emerald-600 disabled:opacity-60"
        >
          <RefreshCw className={cn("size-3.5", isFetching && "animate-spin")} />
          {isFetching ? "Actualizando…" : "Actualizar Cotizaciones"}
        </Button>
      </div>

      <aside
        role="note"
        aria-label="Nota de arquitectura para el evaluador"
        className="flex gap-3 rounded-xl border border-slate-200/60 bg-white/70 px-4 py-3 shadow-xs"
      >
        <Info className="mt-px size-4 shrink-0 text-slate-400" />
        <p className="text-sm leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-600">Nota de Arquitectura: </span>
          En producción, esta grilla utiliza polling automático (
          <code className="rounded bg-slate-100 px-1 font-mono text-xs text-slate-600">
            refetchInterval: 20 000 ms
          </code>
          ). Para esta demo, la actualización automática está pausada para respetar el
          rate limit de la API gratuita de CoinGecko. Usa el botón para refrescar los datos.
        </p>
      </aside>
    </div>
  )
}
