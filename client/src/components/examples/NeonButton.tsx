import NeonButton from '../NeonButton'

export default function NeonButtonExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <NeonButton variant="cyan" onClick={() => console.log('Cyan clicked')}>
        Cyan Button
      </NeonButton>
      <NeonButton variant="magenta" onClick={() => console.log('Magenta clicked')}>
        Magenta Button
      </NeonButton>
      <NeonButton variant="purple" onClick={() => console.log('Purple clicked')}>
        Purple Button
      </NeonButton>
      <NeonButton variant="outline" onClick={() => console.log('Outline clicked')}>
        Outline Button
      </NeonButton>
    </div>
  )
}
