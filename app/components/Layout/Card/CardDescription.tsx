interface CardDescriptionProps {
  description: string;
}

export const CardDescription = ({description}: CardDescriptionProps) => (
  <div>
    <p className="card-description text-xs font-semibold text-gray-800 mt-4">Beskrivning</p>
    <p className="text-sm mt-1">{description}</p>
  </div>
);