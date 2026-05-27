import { cn } from "@/lib/utils"
import { Badge } from "@/shared/UI/badge"

interface ChangeBadgeProps {
  change24h: number
}

export function ChangeBadge({ change24h }: ChangeBadgeProps) {
  const isPositive = change24h >= 0
  const absValue = Math.abs(change24h).toFixed(2)
  const direction = isPositive ? "subida" : "bajada"

  return (
    <Badge
      variant="outline"
      className={cn(
        isPositive
          ? "border-crypto-up bg-crypto-up/10 text-crypto-up"
          : "border-crypto-down bg-crypto-down/10 text-crypto-down"
      )}
      aria-label={`Cambio en 24h: ${direction} de ${absValue}%`}
    >
      <span aria-hidden="true">{isPositive ? "▲" : "▼"}</span>
      {absValue}%
    </Badge>
  )
}
