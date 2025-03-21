interface CardDescriptionProps {
  description: string;
}

export const CardDescription = ({description}: CardDescriptionProps) => (
  <div>
    <p className="cardSubTitle">Description</p>
    <p className="descriptionText">{description}</p>

  </div>
);