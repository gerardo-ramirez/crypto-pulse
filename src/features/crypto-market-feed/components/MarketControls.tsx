"use client"

import { AlertTriangle, CheckCircle2, Globe, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/shared/UI/button"
import { useMarketFeed } from "../hooks/useMarketFeed"

export function MarketControls() {
  const { refetch, isFetching, useRealApi, enableRealApi } = useMarketFeed()

  return (
    <div className="mb-8 flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="default"
          size="sm"
          onClick={enableRealApi}
          disabled={isFetching || useRealApi}
          aria-label="Cambiar a datos reales de CoinGecko y actualizar"
          className="gap-1.5"
        >
          <Globe className={cn("size-3.5", isFetching && useRealApi && "animate-spin")} />
          {isFetching && useRealApi ? "Conectando…" : "Probar API Real (CoinGecko)"}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => refetch()}
          disabled={isFetching}
          aria-label="Actualizar cotizaciones manteniendo el modo actual"
        >
          <RefreshCw className={cn("size-3.5", isFetching && "animate-spin")} />
          {isFetching && !useRealApi ? "Actualizando…" : "Actualizar Cotizaciones"}
        </Button>
      </div>

      {useRealApi ? (
        <aside
          role="status"
          aria-label="Estado de conexión: API real activa"
          className="flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3"
        >
          <CheckCircle2 className="mt-px size-4 shrink-0 text-emerald-600" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-emerald-800">
            <span className="font-semibold">Conexión Directa Activa: </span>
            Los datos están siendo devueltos en tiempo real por el BFF desde la API oficial de CoinGecko.
          </p>
        </aside>
      ) : (
        <aside
          role="note"
          aria-label="Modo simulación activo: usando datos locales"
          className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3"
        >
          <AlertTriangle className="mt-px size-4 shrink-0 text-amber-500" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-amber-800">
            <span className="font-semibold">Modo Simulación Activo: </span>
            Se están utilizando datos locales (Mock) con un delay intencional de 1.2s para apreciar los Skeletons.
            Esto protege la app del estricto rate limit de la API pública.
          </p>
        </aside>
      )}
    </div>
  )
}
