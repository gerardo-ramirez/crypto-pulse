// src/app/maintenance/page.tsx
import { ShieldAlert, ArrowUpRight, Activity } from "lucide-react";

export const Maintenance=()=> {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100">
      {/* Header Minimalista */}
      <header className="flex w-full max-w-7xl items-center justify-between px-6 py-6 mx-auto sm:px-12">
        <div className="flex items-center gap-2 font-bold tracking-tight text-xl">
          <Activity className="size-6 text-emerald-500 animate-pulse" />
          <span>Crypto<span className="text-emerald-500">Pulse</span></span>
        </div>
        <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-xs border border-slate-200/60">
          V1.0.0-ALPHA
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center sm:px-12">
        <div className="relative mb-8 flex size-16 items-center justify-center rounded-2xl bg-white shadow-md border border-slate-200/40">
          <ShieldAlert className="size-8 text-emerald-500" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </span>
        </div>

        <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:leading-[1.1]">
          Evolucionando la claridad de tus <span className="text-emerald-500">activos digitales</span>.
        </h1>
        
        <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
          Estamos desplegando nuestra nueva infraestructura de datos financieros con una interfaz optimizada de alta precisión. Volvemos en unos minutos.
        </p>

        {/* Status Card */}
        <div className="mt-10 w-full max-w-sm rounded-2xl border border-slate-200/60 bg-white p-5 shadow-xs text-left">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Estado del Sistema</span>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Upgrade en curso</span>
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Core Engine (Next 16)</span>
              <span className="font-mono text-xs text-slate-400">Listo</span>
            </div>
            <div className="flex justify-between">
              <span>CoinGecko Adapter v3</span>
              <span className="font-mono text-xs text-emerald-500">Sincronizando...</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl px-6 py-8 mx-auto text-center sm:px-12 border-t border-slate-200/40 text-xs text-slate-400 font-medium">
        &copy; {new Date().getFullYear()} CryptoPulse Engineering. Todos los derechos reservados.
      </footer>
    </div>
  );
}