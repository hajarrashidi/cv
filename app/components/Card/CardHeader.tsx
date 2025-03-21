interface CardHeaderProps {
  title: string;
  secondTitle?: string;
}

export const CardHeader = ({title, secondTitle}: CardHeaderProps) => (
  <h3 className="card-title font-semibold flex items-center pb-1">

    <span>{title}</span>
    {secondTitle && (
      <>
        <span className="mx-2 border-l-2 h-4 rounded border-gray-300"></span>
        <span>{secondTitle}</span>
      </>
    )}
  </h3>
);
