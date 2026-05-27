import { Activity } from "lucide-react"
import { MarketGrid } from "@/features/crypto-market-feed/components/MarketGrid"
import { MarketControls } from "@/features/crypto-market-feed/components/MarketControls"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50/40 font-sans text-slate-900 selection:bg-emerald-100">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-12">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Activity className="size-6 animate-pulse text-emerald-500" />
          <span>Crypto<span className="text-emerald-500">Pulse</span></span>
        </div>
        <div className="rounded-full border border-slate-200/60 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-xs">
          V1.0.0-ALPHA
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 sm:px-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Crypto<span className="text-emerald-500">Pulse</span>
          </h1>
          <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-500">
            Mercado Cripto
          </p>
          <p className="mt-3 text-base text-slate-400">
            Cotizaciones en tiempo real · actualización cada 20 s
          </p>
        </div>

        <MarketControls />
        <MarketGrid />
      </main>

      <footer className="mx-auto w-full max-w-7xl border-t border-slate-200/40 px-6 py-8 text-center text-xs font-medium text-slate-400 sm:px-12">
        &copy; {new Date().getFullYear()} CryptoPulse Engineering. Todos los derechos reservados.
      </footer>
    </div>
  )
}