interface CardDescriptionProps {
  description: string;
}

export const CardDescription = ({description}: CardDescriptionProps) => (
  <div>
    <h3 className="text-xs font-semibold mt-2">Beskrivning</h3>
    <p className="text-sm mt-1">{description}</p>
  </div>
);