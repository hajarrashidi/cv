export const CardLayout = ({title, description, subtitle, dateRange, content}: CardProps) => (
  <div className="relative pb-2">
    <div className="bg-white rounded-lg  p-3.5 md:p-6">
      <h2 className="text-sm font-semibold flex items-center pb-1">
        <span>{title}</span>
        {subtitle && (
          <>
            <span className="mx-2 border-l-2 h-4 rounded border-gra-300"></span>
            <span>{subtitle}</span>
          </>
        )}
      </h2>
      <p className="text-xs ">{dateRange}</p>
      {description && <p className="text-sm mt-1">{description}</p>}
      <div className="text-xs mt-2">{content}</div>
    </div>
  </div>
);
