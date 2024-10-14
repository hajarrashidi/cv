interface CardDateProps {
  startDate: string;
  endDate?: string;
}

export const CardDate = ({startDate, endDate}: CardDateProps) => (
  <p className="text-xs text-gray-700">{endDate ? `${startDate} - ${endDate}` : startDate}</p>
);