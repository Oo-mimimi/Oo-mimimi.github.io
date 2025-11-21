import NeonCard from '../NeonCard'

export default function NeonCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NeonCard glowColor="cyan">
        <h3 className="text-cyan-400 font-orbitron font-bold mb-2">Cyan Glow Card</h3>
        <p className="text-muted-foreground">This card has a cyan neon glow effect.</p>
      </NeonCard>
      <NeonCard glowColor="magenta">
        <h3 className="text-pink-500 font-orbitron font-bold mb-2">Magenta Glow Card</h3>
        <p className="text-muted-foreground">This card has a magenta neon glow effect.</p>
      </NeonCard>
    </div>
  )
}
