interface CardDateProps {
  startDate: string;
  endDate?: string;
}

export const CardDate = ({ startDate, endDate }: CardDateProps) => (
  <p className="text-xs">{endDate ? `${startDate} - ${endDate}` : startDate}</p>
);