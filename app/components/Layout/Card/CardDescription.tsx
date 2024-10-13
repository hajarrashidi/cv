interface CardDescriptionProps {
  description: string;
}

export const CardDescription = ({description}: CardDescriptionProps) => (
  <div>
    <p className="card-description">Beskrivning</p>
    <p className="text-sm mt-1">{description}</p>
  </div>
);