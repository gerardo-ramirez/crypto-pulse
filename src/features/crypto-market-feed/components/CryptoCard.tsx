import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/UI/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/UI/avatar"
import { ChangeBadge } from "./ChangeBadge"
import type { CryptoAsset } from "../domain/models/domain-types"

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

interface CryptoCardProps {
  asset: CryptoAsset
}

const labelClass = "text-xs font-medium uppercase tracking-wider text-slate-400"

export function CryptoCard({ asset }: CryptoCardProps) {
  return (
    <Card className="rounded-2xl border border-slate-200/60 bg-gradient-to-b from-white to-slate-50/60 shadow-sm ring-0 transition-all duration-200 hover:border-slate-300 hover:shadow-md hover:to-white">
      <CardHeader className="flex-row items-center gap-3">
        <Avatar size="lg">
          <AvatarImage src={asset.imageUrl} alt="" />
          <AvatarFallback aria-hidden="true">
            {asset.symbol[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <CardTitle className="font-semibold tracking-tight text-slate-900">
            {asset.name}
          </CardTitle>
          <span className={labelClass}>{asset.symbol}</span>
        </div>
      </CardHeader>

      <CardFooter className="flex items-center justify-between rounded-b-2xl border-t border-slate-100 bg-white/60">
        <div>
          <p className={`mb-0.5 ${labelClass}`}>Precio</p>
          <p className="font-mono text-lg font-semibold text-slate-900">
            {priceFormatter.format(asset.currentPrice)}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className={labelClass}>24h</p>
          <ChangeBadge change24h={asset.change24h} />
        </div>
      </CardFooter>
    </Card>
  )
}
